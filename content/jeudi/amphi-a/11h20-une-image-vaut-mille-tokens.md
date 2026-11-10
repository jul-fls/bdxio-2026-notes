# Une image vaut mille tokens : une description pour les gouverner toutes

**Pietro Fodra · Jeudi, 11 h 20 · Amphi A**

## Ouverture et fil du talk

Exploiter l’information contenue dans les images de produits tout en limitant le coût des traitements à grande échelle.

## Notes de déroulé et détails

Le raisonnement est guidé par la volumétrie : une méthode satisfaisante sur une image doit encore pouvoir absorber l’arrivée quotidienne de nouveaux produits. L’équipe compare donc l’information apportée, le coût de traitement et la vitesse, pas uniquement la qualité apparente d’une réponse.

L’image contient des informations absentes ou mal exprimées dans la fiche textuelle. La description sert à les rendre accessibles aux étapes suivantes. L’intérêt est de payer une première transformation, puis de réutiliser le même texte pour plusieurs tâches plutôt que refaire une analyse visuelle complète à chaque usage.

Cette description doit rester suffisamment générale. Si elle est fabriquée seulement pour une catégorie précise, elle peut perdre son intérêt pour la modération ou les autres applications. Le chantier annoncé est justement de réunir les travaux dans une chaîne commune, avec une base de référence partagée.

Dans les questions, la qualité de cette représentation intermédiaire est discutée. L’équipe ne prétend pas disposer d’une note absolue de bonne description. Elle vérifie surtout si la représentation améliore une tâche mesurable, notamment la catégorisation. Une autre piste serait la comparaison directe d’embeddings multimodaux, évoquée mais pas évaluée dans le travail présenté. Le bon compromis dépend donc de l’ensemble de la chaîne, pas du seul modèle chargé de décrire l’image.

**Le contexte du talk**

Un catalogue e-commerce comporte un très grand nombre de produits et reçoit de nouvelles images chaque jour. Un petit écart de coût ou de durée par image devient important à cette échelle.

**L’approche présentée**

Transformer l’image en description textuelle, puis réutiliser cette description pour différentes tâches.

```text
Image produit → description textuelle réutilisable
                           ↓
       catégorisation · modération · texte alternatif
```

**Les trois usages**

- **Catégorisation** : affecter le produit à une catégorie pertinente.
- **Modération** : exploiter les informations de l’image dans un traitement de contrôle.
- **Texte alternatif** : produire une description destinée à restituer le contenu visuel.

**Pourquoi passer par du texte ?**

Dans les expériences présentées, cela permet de réduire la quantité d’information à traiter dans les étapes suivantes, d’homogénéiser les entrées et de réutiliser une même représentation. L’économie doit inclure le coût initial de génération de la description.

**Comment évaluer**

L’équipe privilégie l’utilité de la description pour la tâche finale. Pour la catégorisation, elle peut mesurer si la bonne catégorie est retrouvée parmi les candidates et si la décision finale est correcte.

Une description agréable à lire n’est pas automatiquement utile ; une description courte peut aussi omettre des informations importantes de l’image.

**Les pistes et limites**

- Construire une chaîne commune plutôt que des descriptions spécifiques indépendantes pour chaque usage.
- Réévaluer les compromis qualité, coût et vitesse lorsque les modèles changent.
- Les embeddings d’images sont évoqués en question comme autre piste, sans être présentés comme l’approche évaluée par l’équipe.

## Ce que j’en garde

Une description peut devenir une représentation intermédiaire réutilisable, à condition d’évaluer ce qu’elle apporte aux tâches finales.

*Sources : transcription de l’amphi A et programme fournis. Résultats restitués qualitativement ; prix, modèles et performances ne sont pas présentés comme des données actuelles vérifiées.*
