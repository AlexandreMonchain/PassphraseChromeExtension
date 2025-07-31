function saveSettings() {
  const settings = {
    nb_mots: document.getElementById('nb_mots').value,
    separateur: document.getElementById('separateur').value,
    longueur_nombre: document.getElementById('longueur_nombre').value,
    caractere_special: document.getElementById('caractere_special').value,
    longueur_minimale: document.getElementById('longueur_minimale').value,
    majuscule_debut: document.getElementById('majuscule_debut').checked,
    majuscule_aleatoire: document.getElementById('majuscule_aleatoire').checked,
    caracteres_accentues: document.getElementById('caracteres_accentues').checked
  };
  chrome.storage.local.set({ settings });
}

function restoreSettings(callback) {
  chrome.storage.local.get('settings', (result) => {
    const s = result.settings;
    if (s) {
      document.getElementById('nb_mots').value = s.nb_mots;
      document.getElementById('separateur').value = s.separateur;
      document.getElementById('longueur_nombre').value = s.longueur_nombre;
      document.getElementById('caractere_special').value = s.caractere_special;
      document.getElementById('longueur_minimale').value = s.longueur_minimale;
      document.getElementById('majuscule_debut').checked = s.majuscule_debut;
      document.getElementById('majuscule_aleatoire').checked = s.majuscule_aleatoire;
      document.getElementById('caracteres_accentues').checked = s.caracteres_accentues;
    }
    if (callback) callback();
  });
}

function bindInputsToSave() {
  const ids = [
    'nb_mots', 'separateur', 'longueur_nombre',
    'caractere_special', 'longueur_minimale',
    'majuscule_debut', 'majuscule_aleatoire', 'caracteres_accentues'
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('change', () => {
      saveSettings();
      generatePassword();
    });
  });
}

function generatePassword() {
  const params = new URLSearchParams({
    count: 5,
    nb_mots: document.getElementById('nb_mots').value,
    separateur: document.getElementById('separateur').value,
    longueur_nombre: document.getElementById('longueur_nombre').value,
    caractere_special: document.getElementById('caractere_special').value,
    longueur_minimale: document.getElementById('longueur_minimale').value,
    majuscule_debut: document.getElementById('majuscule_debut').checked,
    majuscule_aleatoire: document.getElementById('majuscule_aleatoire').checked,
    caracteres_accentues: document.getElementById('caracteres_accentues').checked
  });

  fetch(`https://passphrase.fr/api/passwords?${params.toString()}`)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('result');
      container.innerHTML = '';

      data.passwords.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'password-item';

        const span = document.createElement('span');
        span.className = 'password-text';
        span.textContent = item.password;

        const btn = document.createElement('button');
        btn.className = 'copy-icon-btn';
        btn.setAttribute('aria-label', 'Copier le mot de passe');
        btn.innerHTML = '<i class="fas fa-copy"></i>';

        btn.onclick = () => {
          navigator.clipboard.writeText(item.password);
          btn.innerHTML = '<i class="fas fa-check"></i>';
          setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-copy"></i>';
          }, 1500);
        };

        li.appendChild(span);
        li.appendChild(btn);
        container.appendChild(li);
      });
    })
    .catch(error => {
      const container = document.getElementById('result');
      container.innerHTML = `<li class="password-item">Erreur : ${error}</li>`;
    });
}

function resetSettings() {
  chrome.storage.local.clear(() => {
    // Réinitialiser les champs à leur valeur par défaut
    document.getElementById('nb_mots').value = "2";
    document.getElementById('separateur').value = "random";
    document.getElementById('longueur_nombre').value = "2";
    document.getElementById('caractere_special').value = "random";
    document.getElementById('longueur_minimale').value = "12";
    document.getElementById('majuscule_debut').checked = true;
    document.getElementById('majuscule_aleatoire').checked = false;
    document.getElementById('caracteres_accentues').checked = false;

    saveSettings();
    generatePassword();
  });
}

document.getElementById('reset-settings').addEventListener('click', resetSettings);
document.getElementById('generate').addEventListener('click', generatePassword);

document.addEventListener('DOMContentLoaded', () => {
  restoreSettings(() => {
    generatePassword();
    bindInputsToSave();
  });
});
