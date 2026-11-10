# BDX / IO / NOTES — le carnet de conférence

Site indépendant de BDX I/O, distribué sous forme d’image Docker sur GitHub Container Registry (GHCR), selon le même workflow que jul-fls/vbmatrix-tool. Aucun service externe ni dépendance npm nécessaire au fonctionnement.

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

## Déploiement Docker / GHCR

Le workflow .github/workflows/docker-publish.yaml reprend celui de [vbmatrix-tool](https://github.com/jul-fls/vbmatrix-tool/blob/master/.github/workflows/docker-publish.yaml) : checkout v4, connexion GHCR avec GITHUB_TOKEN, build-push-action v5, publication du tag latest à chaque push ou pull request vers main (master dans le dépôt d’origine). Le nom de l’image devient :

```text
ghcr.io/jul-fls/bdxio-2026-notes/bdxio-2026-notes-app:latest
```

Pousser ce projet sur main pour déclencher la construction. Le Dockerfile construit et vérifie les notes, puis lance un serveur Node 20 Alpine sur le port 3000, accessible depuis le réseau du conteneur.

Sur la machine d’hébergement :

```sh
docker pull ghcr.io/jul-fls/bdxio-2026-notes/bdxio-2026-notes-app:latest
docker run -d --restart unless-stopped --name bdxio-2026-notes -p 3000:3000 ghcr.io/jul-fls/bdxio-2026-notes/bdxio-2026-notes-app:latest
```

Ouvrir http://localhost:3000 (ou l’adresse du serveur). Le workflow publie l’image ; il ne redémarre pas automatiquement un serveur distant, comme celui du dépôt modèle. Pour une image privée, se connecter à GHCR sur le serveur avec docker login ghcr.io.

Construction locale :

```sh
docker build -t bdxio-2026-notes .
docker run --rm -p 3000:3000 bdxio-2026-notes
```

Le serveur accepte HOST et PORT ; dans Docker ils valent 0.0.0.0 et 3000. Les chemins restent relatifs et les éditions sont accessibles sous editions/2026/.

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
