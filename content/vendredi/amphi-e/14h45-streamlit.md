# Au secours, de la data dans mon projet ! Streamlit à la rescousse…

**Nicolas Foussard · Vendredi, 14 h 45 · Amphi E**

## Ouverture et fil du talk

Créer rapidement une interface d’exploration de données avec Python et Streamlit.

## Notes de déroulé et détails

Le CSV de Pokémon sert de point de départ immédiatement compréhensible : il contient déjà les données, mais les explorer reste peu confortable sans filtres ni présentation. Streamlit permet de fabriquer cette couche de lecture dans le même univers Python.

La démonstration ajoute progressivement les composants. Les contrôles reprennent les caractéristiques présentes dans le tableau ; pour certaines bornes, les valeurs minimales et maximales viennent directement des données. L’interface suit ainsi le jeu exploré plutôt qu’un exemple entièrement figé.

Les colonnes et les éléments de texte organisent l’écran. L’image est construite à partir du Pokémon sélectionné, ce qui introduit aussi les problèmes ordinaires d’intégration : une URL mal formée ou une ressource indisponible peut casser une partie du parcours.

Le cas d’erreur est traité explicitement. Vérifier la réponse et afficher un message permet de continuer à utiliser l’outil, au lieu de laisser une image vide sans explication. Ce détail rappelle qu’un démonstrateur a lui aussi besoin de retours lisibles.

La fin parcourt d’autres familles de composants, y compris médias et chat. Nicolas situe son exemple dans de petites interfaces de données et insiste sur le risque d’accumuler trop de complexité. L’intérêt est de mettre rapidement les données en discussion, pas de remplacer toute réflexion d’architecture par une bibliothèque d’interface.

**Le principe**

Décrire dans un script Python des composants d’interface pour afficher les données et permettre leur manipulation, sans construire une application frontend complète à la main.

**L’exemple du talk**

Explorer un CSV de Pokémon : consulter les valeurs, sélectionner des caractéristiques, filtrer les données et afficher l’image du Pokémon choisi.

**Les éléments illustrés**

- Affichage de tableaux et de textes.
- Sélecteurs et contrôles de valeurs.
- Organisation de l’écran avec des colonnes.
- Affichage de médias à partir d’une URL.
- Message d’erreur si la récupération d’une image échoue.

**Le cas d’erreur**

Certaines images ne se chargent pas à cause de l’URL utilisée. La démonstration vérifie la réponse HTTP et affiche un message explicite plutôt que laisser l’utilisateur sans explication.

**Le périmètre proposé**

Le conférencier positionne l’outil pour des démonstrateurs et interfaces simples. Une application plus complexe exige d’évaluer ses besoins d’architecture, de maintenance et de charge ; la démo ne suffit pas à établir ses capacités dans tous les contextes.

## Ce que j’en garde

Une interface légère et interactive peut rendre un jeu de données bien plus facile à explorer qu’un fichier brut.

*Sources : transcription du vendredi en amphi E et programme fournis. Notes développées à partir de la transcription ; limites évoquées restituées comme son positionnement, pas comme une borne universelle du produit.*
