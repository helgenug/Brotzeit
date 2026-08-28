// TEMPORÄRE Testdatei — wird nach dem Test wieder gelöscht, nicht deployen.
'use strict';

const Module = require('module');
const path = require('path');

// nodemailer mocken, damit kein echter SMTP-Versand passiert.
const nodemailerPath = require.resolve('nodemailer');
const sentMails = [];
require.cache[nodemailerPath] = {
  id: nodemailerPath,
  filename: nodemailerPath,
  loaded: true,
  exports: {
    createTransport(opts) {
      return {
        async sendMail(mail) {
          sentMails.push({ opts, mail });
          if (process.env.MOCK_SMTP_FAIL === '1') {
            throw new Error('Mock SMTP Fehler');
          }
          return { messageId: 'mock-id-123' };
        }
      };
    }
  }
};

process.env.SMTP_USER = 'info@brotzeit-rostock.de';
process.env.SMTP_PASSWORD = 'testpasswort';

const http = require('http');
const handler = require('./api/formular.js');

function makeRes() {
  const res = {
    statusCode: 200,
    headers: {},
    body: null,
    status(code) { this.statusCode = code; return this; },
    setHeader(k, v) { this.headers[k] = v; return this; },
    end(body) { this.body = body; return this; }
  };
  return res;
}

const server = http.createServer(async (req, res) => {
  const wrapped = makeRes();
  wrapped.end = (body) => { res.writeHead(wrapped.statusCode, wrapped.headers); res.end(body); };
  await handler(req, wrapped);
});

server.listen(0, async () => {
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}/`;

  async function send(fields, opts = {}) {
    const fd = new FormData();
    for (const [k, v] of Object.entries(fields)) fd.append(k, v);
    if (opts.file) {
      fd.append('lebenslauf', new Blob([opts.file.bytes], { type: opts.file.type }), opts.file.name);
    }
    const resp = await fetch(base, { method: 'POST', body: fd });
    const json = await resp.json().catch(() => null);
    return { status: resp.status, json };
  }

  const jetzt = Date.now();
  const vorZweiSekunden = jetzt - 2000;

  console.log('--- Test 1: Gueltige Kontaktanfrage ---');
  console.log(await send({
    formular_typ: 'kontakt', website: '', formular_gestartet: String(vorZweiSekunden),
    name: 'Erika Musterfrau', email: 'erika@example.com', betreff: 'Allgemeine Anfrage',
    nachricht: 'Hallo, habt ihr am Sonntag geöffnet? Grüße äöüß.'
  }));

  console.log('--- Test 2: Honeypot ausgefuellt (Bot) ---');
  console.log(await send({
    formular_typ: 'kontakt', website: 'http://spam.example', formular_gestartet: String(vorZweiSekunden),
    name: 'Bot', email: 'bot@example.com', betreff: 'x', nachricht: 'spam'
  }));

  console.log('--- Test 3: Zu schnell abgeschickt (< 1.5s) ---');
  console.log(await send({
    formular_typ: 'kontakt', website: '', formular_gestartet: String(jetzt - 100),
    name: 'Schnell Bot', email: 'schnell@example.com', betreff: 'x', nachricht: 'zu schnell'
  }));

  console.log('--- Test 4: Ungueltige E-Mail ---');
  console.log(await send({
    formular_typ: 'kontakt', website: '', formular_gestartet: String(vorZweiSekunden),
    name: 'Test', email: 'keine-email', betreff: 'x', nachricht: 'test'
  }));

  console.log('--- Test 5: Bewerbung mit PDF-Anhang ---');
  console.log(await send({
    formular_typ: 'bewerbung', website: '', formular_gestartet: String(vorZweiSekunden),
    name: 'Max Mustermann', email: 'max@example.com', telefon: '0176 123456',
    stelle: 'Bäcker / Konditor (m/w/d)', nachricht: 'Interesse an der Stelle.'
  }, {
    file: { bytes: new Uint8Array([0x25,0x50,0x44,0x46,0x2d,0x31,0x2e,0x34]), type: 'application/pdf', name: 'lebenslauf.pdf' }
  }));

  console.log('--- Test 6: Bewerbung mit unerlaubtem Dateityp (.exe) ---');
  console.log(await send({
    formular_typ: 'bewerbung', website: '', formular_gestartet: String(vorZweiSekunden),
    name: 'Max Mustermann', email: 'max@example.com', stelle: 'x', nachricht: 'x'
  }, {
    file: { bytes: new Uint8Array([0,1,2,3]), type: 'application/x-msdownload', name: 'virus.exe' }
  }));

  console.log('--- Test 7: Bewerbung ohne Anhang (optional) ---');
  console.log(await send({
    formular_typ: 'bewerbung', website: '', formular_gestartet: String(vorZweiSekunden),
    name: 'Initiativ Bewerber', email: 'init@example.com', stelle: 'Initiativbewerbung',
    nachricht: 'Ich bewerbe mich initiativ.'
  }));

  console.log('--- Test 8: Ungueltiger formular_typ ---');
  console.log(await send({
    formular_typ: 'unbekannt', website: '', formular_gestartet: String(vorZweiSekunden),
    name: 'Test', email: 'test@example.com', nachricht: 'test'
  }));

  console.log('--- Test 9: SMTP-Fehler simulieren ---');
  process.env.MOCK_SMTP_FAIL = '1';
  console.log(await send({
    formular_typ: 'kontakt', website: '', formular_gestartet: String(vorZweiSekunden),
    name: 'Fehler Test', email: 'fehler@example.com', betreff: 'x', nachricht: 'test'
  }));
  process.env.MOCK_SMTP_FAIL = '0';

  console.log('\n=== Tatsaechlich "versendete" Mails (mock) ===');
  sentMails.forEach((m, i) => {
    console.log(`Mail ${i + 1}:`, JSON.stringify({ to: m.mail.to, from: m.mail.from, replyTo: m.mail.replyTo, subject: m.mail.subject, hasAttachment: !!m.mail.attachments, smtpHost: m.opts.host }, null, 2));
  });

  server.close();
});
