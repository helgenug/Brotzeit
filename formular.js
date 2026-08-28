(function () {
  'use strict';

  document.querySelectorAll('form[data-vercel-formular]').forEach(function (formular) {
    var startfeld = formular.querySelector('input[name="formular_gestartet"]');
    var status = formular.querySelector('.formular-status');
    var button = formular.querySelector('button[type="submit"]');
    if (startfeld) startfeld.value = String(Date.now());

    formular.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (!formular.reportValidity()) return;

      var datei = formular.querySelector('input[type="file"]');
      if (datei && datei.files[0] && datei.files[0].size > 3 * 1024 * 1024) {
        status.textContent = 'Die Datei ist größer als 3 MB.';
        status.dataset.status = 'fehler';
        datei.focus();
        return;
      }

      button.disabled = true;
      button.dataset.originalText = button.textContent;
      button.textContent = 'Wird gesendet …';
      status.textContent = '';
      status.dataset.status = '';

      try {
        var antwort = await fetch(formular.action, { method: 'POST', body: new FormData(formular) });
        var daten = await antwort.json().catch(function () { return {}; });
        if (!antwort.ok || !daten.ok) throw new Error(daten.message || 'Der Versand ist fehlgeschlagen.');
        status.textContent = daten.message;
        status.dataset.status = 'erfolg';
        formular.reset();
        if (startfeld) startfeld.value = String(Date.now());
      } catch (error) {
        status.textContent = error.message || 'Der Versand ist fehlgeschlagen. Bitte versuchen Sie es erneut.';
        status.dataset.status = 'fehler';
      } finally {
        button.disabled = false;
        button.textContent = button.dataset.originalText;
      }
    });
  });
}());
