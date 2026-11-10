# Ils sont fous chez TanStack, ils ont mis une DB dans le front !

**Delphin Aubin et Lucas Audart · Jeudi, 15 h 15 · Amphi D**

## Ouverture et fil du talk

Manipuler des données côté navigateur pour obtenir des interfaces plus réactives et faciliter leur synchronisation.

## Notes de déroulé et détails

La démonstration suit une gestion de recettes et d’ingrédients, avec un habillage de village gaulois. Le problème est facile à visualiser : plusieurs vues dépendent des mêmes stocks et doivent rester cohérentes lorsqu’une quantité change.

Le déplacement majeur est celui du calcul. Dans une approche classique, la recherche, les filtres ou la pagination peuvent provoquer une requête au backend. Dans l’exemple avec collections locales, une partie de ces opérations se fait sur les données déjà disponibles dans le navigateur. La complexité ne disparaît pas : elle change de place.

Les live queries ne sont pas seulement des lectures répétées. Elles décrivent un résultat qui doit suivre les changements des collections. Le talk montre le chaînage de filtres et des jointures, par exemple pour relier une recette à ses ingrédients. La syntaxe proche du SQL aide à comprendre, mais ne signifie pas que tout SQL est pris en charge.

Côté modification, la collection expose des opérations comme update ou delete. La relation avec le serveur est définie dans sa configuration ; l’interface peut réagir immédiatement, avec une stratégie optimiste. Il faut toujours réfléchir à ce qui arrive si l’écriture distante échoue.

Le local-first ouvre ensuite un sujet architectural plus large : synchronisation, règles métier et dépendance au moteur choisi. Une migration peut rester progressive, fonctionnalité par fonctionnalité. Les intervenants ne proposent pas de télécharger n’importe quel catalogue complet ni de convertir toute application d’un seul coup.

**Le problème**

Plusieurs écrans utilisent les mêmes données : maintenir leur cohérence implique de gérer chargements, modifications et rafraîchissements.

**Les notions importantes**

- **Collection** : ensemble de données manipulées côté client.
- **Live query** : requête dont le résultat évolue lorsque les données concernées changent.
- **Mise à jour optimiste** : afficher immédiatement une modification avant sa confirmation par le serveur.
- **Sync engine** : mécanisme de synchronisation des données locales et distantes.
- **Local-first** : approche privilégiant le travail sur les données locales, puis leur synchronisation.

**L’exemple du talk**

La gestion des ingrédients d’un village : plusieurs personnes consultent et modifient les stocks. Les vues doivent refléter les changements sans multiplier les rafraîchissements manuels.

**L’apport de TanStack DB**

Manipuler et interroger des collections côté front, avec différentes connexions aux données, y compris à des moteurs de synchronisation. Le talk présente une migration progressive possible selon les usages.

**Les limites**

- Repenser la répartition du travail entre client et serveur.
- Les live queries ont leurs limites malgré une syntaxe rappelant SQL.
- Le moteur de synchronisation crée des dépendances techniques.
- Tous les usages ne se prêtent pas au chargement local des données.

## Ce que j’en garde

Travailler localement puis synchroniser peut améliorer l’expérience, selon les besoins de l’application.

*Source : transcription et programme fournis. Notes développées à partir de la transcription, sans citations littérales.*
