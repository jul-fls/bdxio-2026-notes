# Le temps, c’est de l’argent… et des bugs

**Julien Lenormand · Vendredi, 15 h 15 · Amphi D**

## Ouverture et fil du talk

Pourquoi manipuler des dates et heures produit des erreurs lorsque l’on traite les conventions humaines comme des règles uniformes.

## Notes de déroulé et détails

Le talk utilise des situations où l’intuition « une date est un nombre » cesse de suffire. L’heure sur une montre locale n’est pas une chronologie uniforme. Certaines tranches reviennent et d’autres disparaissent lorsque les règles du lieu changent.

L’exemple du rendez-vous dans une heure inexistante oblige à poser une décision métier : faut-il décaler, refuser la saisie ou demander une précision ? La bibliothèque peut proposer un comportement, mais elle ne connaît pas toujours ce que l’utilisateur voulait exprimer.

Les calendriers ajoutent une autre couche. Le découpage en jours, mois et années reflète des conventions et une histoire, pas une simple multiplication de durées constantes. Le détour historique sert surtout à casser l’idée d’une règle unique valable partout et à toutes les époques.

Il faut donc conserver la bonne information pour l’usage. Une date anniversaire, une réservation à une heure locale et un événement déjà survenu ne portent pas le même sens. Dans un cas, une date civile suffit ; dans un autre, le lieu et ses règles sont indispensables pour interpréter l’horaire.

Les notes évitent de reproduire les détails historiques mal reconnus dans le texte. Le point technique solide est la séparation des concepts : lorsqu’un bug apparaît, revenir à la signification de la donnée avant de modifier les conversions. Une correction d’offset improvisée peut masquer le cas du jour et casser le suivant.

**Les distinctions utiles**

- **Instant** : un point sur la chronologie.
- **Heure locale** : une représentation liée à un lieu et à ses règles.
- **Fuseau horaire** : ensemble de règles de conversion, qui ne se réduit pas à un décalage fixe.
- **Durée** : quantité de temps écoulée.
- **Date civile et calendrier** : représentation utilisée pour organiser les jours et les événements.

**Les pièges illustrés**

- Une heure locale peut apparaître deux fois lors d’un changement d’heure.
- Une heure locale peut ne pas exister lors d’un autre changement d’heure.
- Ajouter un jour au calendrier et ajouter une durée de 24 heures ne répondent pas toujours au même besoin.
- Les calendriers ont des règles différentes et une histoire.
- Les années et les mois ne correspondent pas à des durées uniformes.

**L’exemple du talk**

Un rendez-vous ou calcul placé dans une tranche supprimée par un changement d’heure peut être décalé. La même représentation locale ne suffit donc pas toujours à identifier sans ambiguïté un instant.

**Comment raisonner**

Avant de choisir une représentation, préciser ce que le métier veut conserver : une date, un instant, une durée ou une heure récurrente dans un lieu. Éviter de supposer que toutes ces notions sont interchangeables.

## Ce que j’en garde

Les bugs temporels viennent souvent d’une ambiguïté sur ce que l’on représente, avant même le calcul.

*Sources : transcription du vendredi en amphi D et programme fournis. Notes développées à partir de la transcription ; détails historiques et règles de calendrier mal transcrits écartés.*
