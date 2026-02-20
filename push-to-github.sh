#!/bin/bash
# Script pour pousser le projet vers https://github.com/Wintechsn/wintech.sn.git
# À exécuter dans un terminal depuis la racine du projet.

set -e
cd "$(dirname "$0")"

# Vérifier si on a déjà un commit
if ! git rev-parse HEAD &>/dev/null; then
  echo "Création du premier commit..."
  git commit -m "first commit"
fi

# Branche main et remote
git branch -M main 2>/dev/null || true
if ! git remote get-url origin &>/dev/null; then
  git remote add origin https://github.com/Wintechsn/wintech.sn.git
fi

echo "Envoi vers GitHub..."
git push -u origin main

echo "Terminé. Projet disponible sur https://github.com/Wintechsn/wintech.sn"
