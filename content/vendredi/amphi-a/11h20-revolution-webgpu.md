# La révolution WebGPU : toute la puissance du GPU, sur le web et en dehors

**Julien Sulpis · Vendredi, 11 h 20 · Amphi A**

## Ouverture et fil du talk

Comprendre comment le GPU dessine et calcule, puis ce qu’une API comme WebGPU permet d’exprimer.

## Notes de déroulé et détails

Bob le poisson est d’abord un ensemble de sommets et de faces. Pour l’afficher, il faut passer des coordonnées propres à l’objet à celles de la scène, se placer du point de vue de la caméra et projeter le résultat. Les multiplications de matrices rendent cette suite de transformations systématique.

Les points ne suffisent pas encore à produire l’image. Les triangles sont rasterisés, les couleurs calculées puis combinées, avec l’éclairage et les objets qui se superposent. Cela situe les shaders dans une chaîne de travail plutôt que comme un langage isolé à apprendre.

Le second usage du GPU est le calcul. Beaucoup de données peuvent recevoir des opérations similaires en parallèle. La simulation des poissons illustre cet intérêt, mais aussi les limites : déplacer des tableaux volumineux à chaque image entre CPU et GPU peut annuler une partie du bénéfice.

La réponse donnée aux questions précise le montage de buffers. L’état courant sert à produire le suivant, puis les rôles s’inversent. Les gros tableaux restent sur le GPU ; quelques petites valeurs, comme une matrice ou une interaction utilisateur, peuvent être transmises séparément.

Le choix de l’API ne remplace donc pas le design du calcul. Il faut savoir où se trouve le goulot d’étranglement et éviter d’accélérer un morceau tout en ajoutant davantage de transferts ailleurs. Les questions sur WebAssembly restent présentées avec prudence par le conférencier.

**Le vocabulaire**

- **GPU** : processeur adapté à de nombreux calculs parallèles.
- **Shader** : programme exécuté sur le GPU.
- **Buffer** : zone de données utilisée pour les calculs ou le rendu.
- **Render pipeline** : étapes produisant une image.
- **Compute** : calcul sur GPU au-delà du seul dessin.

**La chaîne de rendu expliquée**

1. Charger les points et faces d’un modèle 3D.
2. Transformer les coordonnées de l’objet vers la scène, puis la caméra.
3. Projeter la scène sur l’image.
4. Rasteriser les triangles et calculer les couleurs.
5. Composer le résultat final.

**L’exemple du talk**

Bob, un poisson-clown, sert de support à l’explication. La démonstration s’étend à de nombreux poissons pour illustrer le rendu et le calcul parallèle.

**Le point de performance essentiel**

Échanger de gros volumes entre mémoire CPU et mémoire GPU coûte cher. Les positions des poissons peuvent rester sur le GPU, dans deux buffers utilisés alternativement pour l’état courant et l’état suivant. De petits paramètres d’interaction peuvent être transmis séparément.

**Le message sur WebGPU**

Une API moderne ouvre des possibilités de rendu et de calcul. Elle ne dispense pas de choisir de bons algorithmes ni d’organiser efficacement les données. Le talk évoque aussi son utilisation en dehors du navigateur.

## Ce que j’en garde

Exploiter un GPU demande de penser parallélisme et circulation des données, pas seulement de changer d’API.

*Sources : transcription du jour 2 et programme fournis. Notes développées à partir de la transcription ; compatibilité des navigateurs et comportements de repli non vérifiés comme informations actuelles.*
