# Extension Chrome — Passphrase

Extension Chrome permettant d’accéder rapidement au générateur de mots de passe développé dans le projet Passphrase : https://github.com/AlexandreMonchain/Passphrase

## Testez-moi

L’extension est disponible sur le Chrome Web Store :  
https://chromewebstore.google.com/detail/g%C3%A9n%C3%A9rateur-de-passphrase/bhlgfoknmmhgpfoanhoemjccephcanjd

Elle utilise par défaut l’API publique de https://passphrase.fr.

Vous pouvez aussi l’utiliser localement avec votre propre instance (voir “Mise en route”).

---

## Fonctionnalités

- Génération de passphrases : récupération depuis l’API REST du site Passphrase.
- Personnalisation : les paramètres de génération sont configurables directement dans l’extension.
- Compatibilité API : fonctionne avec n’importe quelle instance conforme à l’API Passphrase.

---

## Mise en route

### Utilisation via le Chrome Web Store

Installez l’extension depuis le lien suivant pour une utilisation immédiate avec l’API publique :
https://chromewebstore.google.com/detail/g%C3%A9n%C3%A9rateur-de-passphrase/bhlgfoknmmhgpfoanhoemjccephcanjd

### Utilisation locale avec votre propre API

1. Clonez ce dépôt :

   git clone https://github.com/AlexandreMonchain/PassphraseChromeExtension

2. Ouvrez Chrome et allez à l’adresse :

   chrome://extensions/

3. Activez le mode développeur.

4. Cliquez sur "Charger l’extension non empaquetée" et sélectionnez le dossier du projet.

5. Dans le fichier popup.js, remplacez l’URL de l’API par celle de votre instance :

   fetch('https://votre-domaine.fr/api/passwords')

---

## Contribuer

Pour signaler un problème ou proposer une amélioration, ouvrez une issue ou soumettez une pull request sur GitHub.

---

## Licence

Ce projet est sous licence MIT.  
Passphrase Chrome Extension © 2025 Alexandre MONCHAIN.