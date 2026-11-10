# Du perceptron au transformer : démystifier l’architecture des LLMs

**Sébastien Bertrand · Vendredi, 10 h 25 · Amphi A**

## Ouverture et fil du talk

Comprendre un modèle de langage comme un enchaînement d’opérations mathématiques, du neurone simple aux blocs d’un transformer.

## Notes de déroulé et détails

Sébastien lance l’entraînement de MicroGPT au début, pour retrouver le résultat à la fin. Cela donne un objet concret à suivre : le modèle apprend sur des prénoms et doit produire des suites de caractères qui ressemblent à ce corpus, pas répondre à toutes les questions du monde.

Le chemin va du calcul d’un neurone à l’écriture matricielle. Les poids multiplient les entrées, les résultats sont combinés et une activation transforme les valeurs. Empiler ces opérations donne une fonction plus riche, mais toujours composée de calculs identifiables.

La tokenisation fait passer du texte aux identifiants. L’embedding transforme ensuite ces identifiants en vecteurs. L’attention combine des informations entre positions ; le réseau feed-forward poursuit la transformation à chaque position. La sortie revient à des scores sur les tokens possibles.

La génération ne livre donc pas une phrase en un seul choix. Elle sélectionne un token, l’ajoute au contexte puis recommence. L’échantillonnage explique une partie de la variété obtenue avec une même demande ; la distribution calculée et la procédure qui choisit dedans sont deux choses à distinguer.

Le talk montre aussi l’écart entre ce petit programme pédagogique et l’exploitation d’un grand modèle. Cache, mémoire et quantification sont indispensables pour tenir des contraintes de ressources, mais ne rendent pas les mécanismes de base magiques. La démonstration cherche surtout à rendre leur composition lisible.

**Les briques à connaître**

- **Perceptron** : combine des entrées avec des poids et une fonction d’activation.
- **Réseau de neurones** : enchaîne ces transformations ; les calculs s’expriment notamment avec des matrices.
- **Token** : unité de texte manipulée par le modèle.
- **Embedding** : représentation numérique d’un token.
- **Attention** : combine les informations des positions du contexte selon des poids calculés.
- **Feed-forward** : transforme la représentation de chaque token.
- **Softmax** : convertit des scores en distribution de probabilités.

**La chaîne simplifiée**

```text
Tokens → embeddings → attention et feed-forward
       → scores sur le vocabulaire → choix du token suivant
```

Le modèle produit une distribution sur le prochain token. La génération répète ce processus en ajoutant le token choisi au contexte.

**L’exemple du talk**

MicroGPT, un petit transformer en Python, est entraîné pendant la conférence sur des prénoms. Il génère ensuite de nouveaux exemples ressemblant aux données apprises.

**Pourquoi les réponses peuvent varier**

Le choix du prochain token peut utiliser un échantillonnage plutôt que retenir systématiquement le plus probable. Les calculs en virgule flottante et leur exécution peuvent aussi introduire des différences numériques.

**Distinguer modèle et optimisations**

Le cache KV, la quantification ou la fusion d’opérations servent notamment à rendre l’exécution plus efficace. Ils se distinguent de la description mathématique de base présentée dans le talk.

## Ce que j’en garde

Un transformer combine des opérations relativement simples ; l’apprentissage, les données et le passage à l’échelle produisent un comportement beaucoup plus riche.

*Sources : transcription du jour 2 et programme fournis. Notes développées à partir de la transcription ; architecture simplifiée, sans reprise des chiffres ou noms mal transcrits.*
