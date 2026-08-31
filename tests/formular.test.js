'use strict';

const assert = require('node:assert/strict');
const { Readable } = require('node:stream');
const nodemailer = require('nodemailer');
let handler;

function anfrage(felder, datei) {
  const boundary = '----brotzeit-test-boundary';
  const teile = [];
  for (const [name, value] of Object.entries(felder)) {
    teile.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`));
  }
  if (datei) {
    teile.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="lebenslauf"; filename="${datei.name}"\r\nContent-Type: ${datei.type}\r\n\r\n`));
    teile.push(datei.content);
    teile.push(Buffer.from('\r\n'));
  }
  teile.push(Buffer.from(`--${boundary}--\r\n`));
  const req = Readable.from(Buffer.concat(teile));
  req.method = 'POST';
  req.headers = { 'content-type': `multipart/form-data; boundary=${boundary}` };
  return req;
}

function antwort() {
  return {
    statusCode: 200,
    headers: {},
    status(code) { this.statusCode = code; return this; },
    setHeader(name, value) { this.headers[name] = value; return this; },
    end(body) { this.body = body; return this; }
  };
}

async function senden(felder, datei) {
  const res = antwort();
  await handler(anfrage(felder, datei), res);
  return { status: res.statusCode, body: JSON.parse(res.body) };
}

(async () => {
  process.env.SMTP_USER = 'info@brotzeit-rostock.de';
  process.env.SMTP_PASSWORD = 'test-passwort';
  const mails = [];
  nodemailer.createTransport = () => ({ sendMail: async (nachricht) => { mails.push(nachricht); } });
  handler = require('../api/formular');

  const basis = { formular_gestartet: String(Date.now() - 3000), website: '' };
  let ergebnis = await senden({ ...basis, formular_typ: 'kontakt', name: 'Ada', email: 'ada@example.com', betreff: 'Frage', nachricht: 'Hallo' });
  assert.equal(ergebnis.status, 200);
  assert.equal(mails[0].to, 'info@brotzeit-rostock.de');
  assert.equal(mails[0].replyTo, 'ada@example.com');

  ergebnis = await senden({ ...basis, formular_typ: 'bewerbung', name: 'Max', email: 'max@example.com', stelle: 'Bäcker', nachricht: '' }, { name: 'lebenslauf.pdf', type: 'application/pdf', content: Buffer.from('PDF-Test') });
  assert.equal(ergebnis.status, 200);
  assert.equal(mails[1].attachments[0].filename, 'lebenslauf.pdf');

  ergebnis = await senden({ ...basis, formular_typ: 'torte', name: 'Mia', email: 'mia@example.com', anlass: 'Hochzeit', datum: '2026-09-20', personen: '40', nachricht: 'Mit Beeren' });
  assert.equal(ergebnis.status, 200);
  assert.match(mails[2].subject, /Tortenanfrage: Hochzeit/);
  assert.match(mails[2].text, /Personenzahl: 40/);

  ergebnis = await senden({ ...basis, formular_typ: 'sushi', name: 'Tom', email: 'tom@example.com', datum: '2026-09-15', stueckzahl: '30', nachricht: 'Bitte vegetarisch' });
  assert.equal(ergebnis.status, 200);
  assert.match(mails[3].subject, /Bäcker-Sushi-Anfrage/);
  assert.match(mails[3].text, /Stückzahl: 30/);

  ergebnis = await senden({ ...basis, formular_typ: 'kontakt', name: '', email: 'falsch', nachricht: '' });
  assert.equal(ergebnis.status, 422);

  ergebnis = await senden({ ...basis, website: 'spam', formular_typ: 'kontakt' });
  assert.equal(ergebnis.status, 200);
  assert.equal(mails.length, 4);

  console.log('6 Formular-Tests bestanden.');
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
