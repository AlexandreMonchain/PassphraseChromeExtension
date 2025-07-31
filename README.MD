# Extension Chrome — Passphrase

Extension Chrome pour accéder rapidement au générateur de mots de passe développé dans le projet Passphrase : https://github.com/AlexandreMonchain/Passphrase

## Testez-moi

L'extension peut être utilisée localement en mode développeur. Elle interagit avec l'API REST du générateur Passphrase. Vous pouvez l'utiliser avec votre propre instance ou l'instance publique si disponible.

---

## Générateur de Passphrase directement dans votre navigateur

Cette extension Chrome permet de générer facilement des passphrases sécurisées à partir d'une API distante. Elle s’intègre directement dans le navigateur via une popup simple et rapide d’accès.

---

## Fonctionnalités

- Génération instantanée de passphrases : récupération automatique depuis l’API Symfony.
- Interface minimaliste : une popup légère, sans interface complexe.
- Compatibilité API : fonctionne avec toutes les instances du générateur Passphrase hébergé et par defaut avec l'API hébergée de https://passphrase.fr

---

## Mise en route

1. Clonez ce dépôt :
   git clone https://github.com/<utilisateur>/PassphraseChromeExtension.git

2. Ouvrez Google Chrome à l’adresse :
   chrome://extensions/

3. Activez le mode développeur.

4. Cliquez sur "Charger l’extension non empaquetée" et sélectionnez le dossier du projet.

---

## Configuration

Dans le fichier popup.js, modifiez l’URL de l’API si nécessaire :

   fetch('https://votre-domaine.fr/api/passwords')

L’API doit retourner une réponse au format JSON contenant une clé "password" :
   { "passwords": "exemple-de-passphrase" }

---

## Contribuer

Si vous rencontrez des problèmes ou avez des suggestions d’amélioration, vous pouvez créer une issue ou soumettre une pull request sur ce dépôt GitHub.

---

## Licence

Ce projet est sous licence MIT.

Passphrase Chrome Extension © 2025 Alexandre MONCHAIN.
