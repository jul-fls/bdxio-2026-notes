# BDX / Notes — le carnet de conférence

Site statique indépendant de BDX I/O, prêt pour GitHub Pages. Aucun serveur applicatif, secret, compte ou dépendance npm. Node.js 20 ou plus récent sert uniquement à construire le site et à la prévisualisation locale.

## Contenu

- Programme officiel : 85 entrées distinctes, soit **86 sessions** en comptant la présentation de l’association sur les deux jours.
- **69 carnets développés**, un extrait partiel et 16 sessions sans transcription exploitable.
- Les 72 fichiers Markdown précédemment préparés sont dans `content/`. Les ateliers sans notes figurent aussi dans le planning.
- Portraits et liens publics du programme BDX I/O, complétés avec les profils fournis par Julien. Les portraits existants sont conservés. Pour les portraits manquants : LinkedIn en priorité ; GitHub lorsqu’aucun profil LinkedIn n’est renseigné. Si le portrait reste inaccessible, les initiales sont affichées.

## Voir le site

La version construite est dans `dist/`. Ouvrir `dist/index.html` directement fonctionne aussi : les données sont embarquées dans un script local et le site ne dépend pas d’un fetch de fichier JSON.

Pour la prévisualisation avec HTTP :

```sh
npm run build
npm run check
npm start
```

Ouvrir ensuite `http://127.0.0.1:4173`.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub, puis mettre **le contenu de ce dossier à la racine du dépôt**, avec `.github/`, `scripts/`, `public/`, `data/`, `content/` et `package.json`. Ne pas envoyer seulement le ZIP.
2. Utiliser une branche principale nommée `main`, ou adapter `branches` dans `.github/workflows/pages.yml`.
3. Dans le dépôt : **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Pousser les fichiers sur `main`. Le workflow construit, vérifie et publie `dist/`.
5. L’URL apparaît dans la tâche de déploiement et dans Settings → Pages. Elle prend généralement la forme `https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT/`.

Alternative sans build : copier le contenu de `dist/` à la racine d’une branche de publication et sélectionner cette branche dans Pages. Garder `.nojekyll`. Ne pas mélanger cette méthode avec le workflow sans choisir l’une des deux comme source de publication.

Tous les chemins d’assets sont relatifs, ce qui permet de publier sous un sous-dossier GitHub Pages. Les liens des talks utilisent le fragment `#talk=...`, sans routage serveur ni fichier 404 de secours.

## Modifier les notes et le programme

Les versions courantes des carnets sont dans `content/jeudi/` et `content/vendredi/`. Modifier ces fichiers puis relancer `npm run build`. La copie source d’origine située dans un autre dossier n’est pas synchronisée automatiquement.

Les horaires, catégories, formats, intervenants et liens sont dans `data/catalog.json`. Les styles et interactions sont dans `public/assets/`. Le build rend un sous-ensemble Markdown sûr : titres, paragraphes, listes, tableaux, blocs de code, citations et liens HTTP(S). Il n’exécute pas de HTML provenant des notes.

Les favoris et l’état « lu » sont conservés dans le localStorage du navigateur. Ils ne sont ni synchronisés ni transmis. La recherche porte aussi sur le texte des notes. Sur petit écran, l’affichage Liste est sélectionné au premier chargement ; le planning reste disponible avec défilement horizontal.

## Sources et attribution

Programme, noms, formats, portraits et liens : [BDX I/O](https://bdxio.fr/talks/). Les biographies et descriptions intégrales ne sont pas reproduites : la fiche officielle est liée depuis chaque modal. Les notes sont reformulées à partir des transcriptions fournies et ne sont pas validées par les intervenants. Les droits des éléments tiers restent ceux de leurs auteurs ; aucune licence globale de réutilisation de ces portraits n’est revendiquée.

Ce dossier est un livrable prêt à publier ; il n’a pas été poussé sur un compte GitHub ni mis en ligne automatiquement.

### Compléter les portraits

`node scripts/sync-portraits.mjs` récupère les portraits manquants depuis les profils renseignés, sans remplacer les images locales existantes. LinkedIn peut bloquer les accès publics (HTTP 999 ou 429) : aucune connexion ni contournement n’est utilisé. Le résultat est enregistré dans `data/portrait-report.json`. Relancer ensuite `node scripts/build.mjs`. Les images sont conservées localement pour éviter de dépendre d’URL temporaires LinkedIn.

## Éditions annuelles

Le registre data/editions.json pilote les éditions, les dates, le lieu et defaultYear (accueil). Chaque édition publiée conserve son adresse editions/2026/, editions/2027/, etc. Les favoris et lectures sont séparés par année ; ceux de 2026 sont conservés.

Pour publier 2027 : créer son catalogue (structure de data/catalog.json) et son dossier de notes ; renseigner leurs chemins catalog et content dans le registre. Remplacer planned: true par les champs datesLabel, location et days sur le modèle de 2026. Chaque jour possède id, label, short et date, et son id correspond au champ day des sessions. Mettre defaultYear à 2027 pour en faire l’accueil, puis reconstruire et publier dist/. Aucune date ni session 2027 n’est inventée.
