'use strict';

const Busboy = require('busboy');
const nodemailer = require('nodemailer');

const EMPFAENGER = 'info@brotzeit-rostock.de';
const MAX_DATEI_BYTES = 3 * 1024 * 1024;
const ERLAUBTE_DATEITYPEN = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png'
]);

function antwort(res, status, daten) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(JSON.stringify(daten));
}

function text(value, max = 5000) {
  return String(value || '').replace(/\0/g, '').trim().slice(0, max);
}

function gueltigeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function dateinameSaubern(value) {
  const basis = String(value || 'lebenslauf').split(/[\\/]/).pop();
  return basis.replace(/[^a-zA-Z0-9äöüÄÖÜß._ -]/g, '_').slice(0, 120) || 'lebenslauf';
}

function multipartLesen(req) {
  return new Promise((resolve, reject) => {
    const felder = {};
    let datei = null;
    let abgebrochen = false;
    let busboy;

    try {
      busboy = Busboy({
        headers: req.headers,
        limits: { files: 1, fileSize: MAX_DATEI_BYTES, fields: 20, fieldSize: 20_000 }
      });
    } catch (error) {
      reject(new Error('UNGÜLTIGE_ANFRAGE'));
      return;
    }

    busboy.on('field', (name, value) => {
      felder[name] = value;
    });

    busboy.on('file', (name, stream, info) => {
      const teile = [];
      let groesse = 0;

      stream.on('data', (teil) => {
        groesse += teil.length;
        teile.push(teil);
      });
      stream.on('limit', () => {
        abgebrochen = true;
      });
      stream.on('end', () => {
        if (!info.filename) return;
        datei = {
          feldname: name,
          dateiname: dateinameSaubern(info.filename),
          typ: info.mimeType,
          groesse,
          inhalt: Buffer.concat(teile)
        };
      });
    });

    busboy.on('filesLimit', () => { abgebrochen = true; });
    busboy.on('error', reject);
    busboy.on('finish', () => {
      if (abgebrochen) reject(new Error('DATEI_ZU_GROSS'));
      else resolve({ felder, datei });
    });
    req.pipe(busboy);
  });
}

function mailInhalt(art, daten, datei) {
  let zeilen;
  if (art === 'bewerbung') {
    zeilen = [
        'Neue Bewerbung über brotzeit-rostock.de',
        '',
        `Name: ${daten.name}`,
        `E-Mail: ${daten.email}`,
        `Telefon: ${daten.telefon || 'nicht angegeben'}`,
        `Stelle: ${daten.stelle}`,
        `Lebenslauf: ${datei ? `${datei.dateiname} (${Math.ceil(datei.groesse / 1024)} KB)` : 'nicht angehängt'}`,
        '',
        'Nachricht:',
        daten.nachricht || 'keine Nachricht'
      ];
  } else if (art === 'torte') {
    zeilen = [
        'Neue Tortenanfrage über brotzeit-rostock.de',
        '',
        `Name: ${daten.name}`,
        `E-Mail: ${daten.email}`,
        `Anlass: ${daten.anlass || 'nicht angegeben'}`,
        `Wunschdatum: ${daten.datum || 'nicht angegeben'}`,
        `Personenzahl: ${daten.personen || 'nicht angegeben'}`,
        '',
        'Wünsche:',
        daten.nachricht
      ];
  } else if (art === 'sushi') {
    zeilen = [
        'Neue Bäcker-Sushi-Anfrage über brotzeit-rostock.de',
        '',
        `Name: ${daten.name}`,
        `E-Mail: ${daten.email}`,
        `Wunschtermin: ${daten.datum || 'nicht angegeben'}`,
        `Stückzahl: ${daten.stueckzahl || 'nicht angegeben'}`,
        '',
        'Wünsche:',
        daten.nachricht
      ];
  } else if (art === 'canapes') {
    zeilen = [
        'Neue Canapé-Anfrage über brotzeit-rostock.de',
        '',
        `Name: ${daten.name}`,
        `E-Mail: ${daten.email}`,
        `Wunschtermin: ${daten.datum || 'nicht angegeben'}`,
        `Stückzahl: ${daten.stueckzahl || 'nicht angegeben'}`,
        '',
        'Wünsche:',
        daten.nachricht
      ];
  } else {
    zeilen = [
        'Neue Kontaktanfrage über brotzeit-rostock.de',
        '',
        `Name: ${daten.name}`,
        `E-Mail: ${daten.email}`,
        `Betreff: ${daten.betreff}`,
        '',
        'Nachricht:',
        daten.nachricht
      ];
  }
  return zeilen.join('\n');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return antwort(res, 405, { ok: false, message: 'Nur POST-Anfragen sind erlaubt.' });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('SMTP_USER oder SMTP_PASSWORD fehlt.');
    return antwort(res, 503, { ok: false, message: 'Der Formularversand ist noch nicht vollständig eingerichtet.' });
  }

  let eingabe;
  try {
    eingabe = await multipartLesen(req);
  } catch (error) {
    const zuGross = error.message === 'DATEI_ZU_GROSS';
    return antwort(res, zuGross ? 413 : 400, {
      ok: false,
      message: zuGross ? 'Die Datei ist größer als 3 MB.' : 'Die Formulardaten konnten nicht gelesen werden.'
    });
  }

  const f = eingabe.felder;
  if (text(f.website, 200)) return antwort(res, 200, { ok: true, message: 'Vielen Dank.' });

  const gestartet = Number(f.formular_gestartet || 0);
  if (!gestartet || Date.now() - gestartet < 1500 || Date.now() - gestartet > 24 * 60 * 60 * 1000) {
    return antwort(res, 400, { ok: false, message: 'Bitte laden Sie die Seite neu und versuchen Sie es erneut.' });
  }

  const art = text(f.formular_typ, 20);
  const daten = {
    name: text(f.name, 120),
    email: text(f.email, 254),
    telefon: text(f.telefon, 80),
    stelle: text(f.stelle, 180),
    betreff: text(f.betreff, 180),
    anlass: text(f.anlass, 180),
    datum: text(f.datum, 40),
    personen: text(f.personen, 20),
    stueckzahl: text(f.stueckzahl, 20),
    nachricht: text(f.nachricht, 5000)
  };

  if (!daten.name || !gueltigeEmail(daten.email) || !['kontakt', 'bewerbung', 'torte', 'sushi', 'canapes'].includes(art)) {
    return antwort(res, 422, { ok: false, message: 'Bitte prüfen Sie Name und E-Mail-Adresse.' });
  }
  if (['kontakt', 'torte', 'sushi', 'canapes'].includes(art) && !daten.nachricht) {
    return antwort(res, 422, { ok: false, message: 'Bitte geben Sie eine Nachricht ein.' });
  }
  if (eingabe.datei && (!ERLAUBTE_DATEITYPEN.has(eingabe.datei.typ) || eingabe.datei.feldname !== 'lebenslauf')) {
    return antwort(res, 415, { ok: false, message: 'Erlaubt sind PDF, Word, JPG und PNG.' });
  }

  const betreff = art === 'bewerbung'
    ? `Neue Bewerbung: ${daten.stelle || 'Brotzeit Rostock'} – ${daten.name}`
    : art === 'torte'
      ? `Tortenanfrage: ${daten.anlass || 'Allgemein'} – ${daten.name}`
      : art === 'sushi'
        ? `Bäcker-Sushi-Anfrage – ${daten.name}`
        : art === 'canapes'
          ? `Canapé-Anfrage – ${daten.name}`
          : `Kontaktformular: ${daten.betreff || 'Allgemeine Anfrage'} – ${daten.name}`;
  const nachricht = {
    from: `Brotzeit Website <${process.env.SMTP_USER}>`,
    to: EMPFAENGER,
    replyTo: daten.email,
    subject: betreff,
    text: mailInhalt(art, daten, eingabe.datei)
  };
  if (eingabe.datei) {
    nachricht.attachments = [{ filename: eingabe.datei.dateiname, content: eingabe.datei.inhalt.toString('base64') }];
  }

  try {
    const transport = nodemailer.createTransport({
      host: 'smtp.ionos.de',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      connectionTimeout: 15_000,
      greetingTimeout: 15_000,
      socketTimeout: 30_000
    });
    await transport.sendMail(nachricht);
    return antwort(res, 200, {
      ok: true,
      message: art === 'bewerbung'
        ? 'Vielen Dank! Ihre Bewerbung wurde versendet.'
        : art === 'kontakt'
          ? 'Vielen Dank! Ihre Nachricht wurde versendet.'
          : 'Vielen Dank! Ihre Anfrage wurde versendet.'
    });
  } catch (error) {
    console.error('Versand fehlgeschlagen:', error);
    return antwort(res, 502, { ok: false, message: 'Die Nachricht konnte gerade nicht versendet werden. Bitte versuchen Sie es später erneut.' });
  }
};
