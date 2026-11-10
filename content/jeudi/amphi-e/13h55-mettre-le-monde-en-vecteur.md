# Mettre le monde en vecteur

**Florent Legras · Jeudi, 13 h 55 · Amphi E**

## Ouverture et fil du talk

Représenter des données sous forme de vecteurs pour rechercher des éléments similaires : textes, images ou autres contenus.

## Notes de déroulé et détails

Florent prend l’exemple RGB pour donner une intuition : une couleur peut être située avec trois nombres. Le passage aux représentations apprises conserve l’idée de coordonnées, mais les axes deviennent beaucoup moins interprétables directement.

Pour le texte, la question est de placer ensemble des éléments proches selon ce que le modèle a appris. Les analogies de mots donnent une image pédagogique de cette organisation. Il ne faut pas en déduire qu’une dimension isolée correspondrait littéralement à un concept comme le genre ou une catégorie de produit.

Le problème se complique quand les contenus sont différents. Le mot rouge, une image rouge et trois valeurs RGB ne deviennent pas comparables par le simple fait d’être des nombres. Les représentations doivent être compatibles. L’exemple CLIP montre l’apprentissage d’un espace rapprochant textes et images associés.

La base vectorielle intervient après cette transformation. Stocker des vecteurs n’est pas encore chercher efficacement leurs voisins : l’index organise cette recherche pour éviter de tout comparer naïvement à chaque demande. La qualité de l’encodeur et celle de la recherche sont donc deux sujets distincts.

Le fil général est un pipeline : données d’origine, modèle d’embedding, représentations, index, recherche. Cela permet de situer le RAG comme une utilisation possible de la recherche, sans confondre la base vectorielle avec le modèle qui rédige ensuite la réponse.

**Le vocabulaire**

- **Vecteur** : suite de nombres représentant une donnée dans un espace.
- **Embedding** : représentation numérique produite par un modèle, destinée notamment à comparer des contenus.
- **Base vectorielle** : stocke et recherche ces représentations.
- **Index vectoriel** : structure permettant d’accélérer la recherche de voisins proches.

**L’intuition du talk**

Une couleur RGB se représente par trois valeurs. Pour le texte ou les images, les représentations apprises utilisent davantage de dimensions et permettent de comparer des contenus selon les caractéristiques apprises.

**Pourquoi un espace commun compte**

Des vecteurs produits par des systèmes différents ne sont pas automatiquement comparables. Les modèles multimodaux peuvent apprendre à rapprocher une image et sa description dans un espace partagé. Le talk prend CLIP comme exemple pour le texte et l’image.

**Applications présentées**

- Recherche sémantique de textes proches par leur sens.
- Recherche d’images similaires ou à partir d’une description.
- Recherche documentaire pour alimenter un système RAG.

**Le point de vigilance**

Dans un embedding appris, chaque dimension ne correspond généralement pas à une caractéristique simple que l’on pourrait nommer. Les illustrations en quelques dimensions donnent une intuition, pas une interprétation littérale du modèle.

## Ce que j’en garde

La recherche vectorielle compare des représentations ; leur qualité et leur compatibilité comptent autant que le stockage.

*Sources : transcription de l’amphi E et programme fournis. Notes développées à partir de la transcription ; analogies simplifiées.*
