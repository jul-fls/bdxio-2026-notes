# À l’abordage du score Lighthouse !

**Florian Leux · Vendredi, 10 h 25 · Amphi E**

## Ouverture et fil du talk

Comprendre un audit de performance web et choisir des améliorations selon ce qui retarde réellement l’affichage ou gêne l’utilisateur.

## Notes de déroulé et détails

Le format est participatif : le public choisit les améliorations d’un site fictif au fil d’une aventure de pirates. Les personnes qui découvrent Lighthouse doivent pouvoir suivre, tandis que les plus expérimentées voient comment les différentes mesures s’influencent.

Le score est une agrégation, pas une description unique de la vitesse. Une page peut afficher quelque chose tôt tout en bloquant les interactions ; elle peut aussi finir par présenter le bon contenu après avoir déplacé tous les éléments. Les métriques essaient de rendre ces problèmes visibles séparément.

Le chargement est montré comme une chaîne. Une réponse serveur tardive retarde le travail suivant ; des ressources trop lourdes ou bloquantes repoussent l’apparition du contenu ; des dimensions non réservées font bouger ce qui était déjà affiché. Certaines interventions améliorent donc plusieurs indicateurs à la fois.

L’exemple des images introduit les variantes et la balise picture. Il s’agit de conserver une source adaptée au navigateur et à l’usage, plutôt que forcer tout le monde à charger le même fichier. Les polices et le texte participent également à la progression visuelle.

L’intérêt pédagogique est d’expliquer pourquoi un score change après une action. Une amélioration ne vaut pas seulement parce que le nombre devient vert : il faut relier la mesure au problème de consultation. Les conditions de test doivent rester comparables pour interpréter correctement les écarts.

**Les notions utiles**

- **Lighthouse** : outil d’audit d’une page dans des conditions de test.
- **LCP** : moment d’affichage du plus grand contenu visible pris en compte par la métrique.
- **CLS** : mesure des décalages de mise en page inattendus.
- **TBT** : indicateur de blocage du thread principal dans un test de laboratoire.
- **Speed Index** : mesure de la progression visuelle de la page.
- **TTFB** : délai avant réception du premier octet de la réponse.

**Le déroulé**

Le public participe à une aventure autour d’un site fictif. Les choix d’optimisation permettent d’expliquer les métriques et leurs interactions.

**Les leviers abordés**

- Réduire les ressources et traitements qui bloquent le rendu.
- Limiter le JavaScript et les fichiers inutiles ou trop lourds.
- Éviter que les éléments déplacent la page après leur chargement.
- Adapter les images à l’affichage, notamment avec plusieurs sources.
- Examiner la réponse serveur et l’ordre de chargement des contenus.

**Le point important**

Une amélioration peut profiter à plusieurs métriques. À l’inverse, optimiser artificiellement une mesure sans améliorer l’expérience ne remplace pas un diagnostic global.

## Ce que j’en garde

Le score aide à repérer des problèmes ; comprendre les métriques permet de choisir les changements utiles.

*Sources : transcription du vendredi en amphi E et programme fournis. Notes développées à partir de la transcription ; pondérations et compatibilités non reprises comme références actuelles.*
