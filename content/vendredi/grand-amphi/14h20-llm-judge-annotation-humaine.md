# Des prompts qui s’optimisent (presque) tout seuls : construire un LLM-as-a-judge aligné sur l’annotation humaine

**Renaud Marmion · Vendredi, 14 h 20 · Grand Amphi**

## Ouverture et fil du talk

Améliorer un juge LLM à partir de cas annotés par les personnes du métier, au lieu de supposer que son jugement correspond déjà à leurs attentes.

## Notes de déroulé et détails

Renaud part de titres produits qui avaient passé la démonstration, puis révélé des cas problématiques à grande échelle. Une règle de format peut sembler suivie tout en donnant un titre inutile, par exemple lorsque le modèle reproduit un mot du template faute d’information disponible.

Ajouter un juge ne résout pas automatiquement le problème. Il faut lui apprendre ce que le métier juge important. Un titre de téléphone bien formé peut encore cacher une version dont les caractéristiques doivent être visibles pour l’acheteur. Deux LLM peuvent partager la même omission.

La méthode récupère les verdicts du juge puis les confronte à une revue humaine. Les désaccords deviennent des exemples. Les raisons sont importantes : elles donnent à l’optimiseur un signal plus riche qu’une note sans explication.

La fonction de score traduit les conséquences. Accepter un mauvais titre peut être considéré comme plus grave que refuser temporairement un titre correct. Le prompt obtenu reflétera ce choix ; l’optimiseur ne décide pas tout seul quelle erreur est acceptable pour l’activité.

GEPA explore des variantes et conserve aussi de la diversité. Un candidat moins bon en moyenne peut résoudre des cas que les autres manquent et servir de point de départ utile. Il faut ensuite évaluer sur des données distinctes et vérifier la stabilité. La boucle produit aussi progressivement une définition plus explicite de la qualité métier.

**Le problème**

Des titres de produits générés peuvent sembler corrects mais omettre une information importante, comme une particularité de version. Deux modèles d’accord ne prouvent pas que le titre est acceptable pour l’acheteur.

**La boucle présentée**

1. Faire produire des verdicts au juge et conserver les traces.
2. Faire revoir ces verdicts par le métier.
3. Construire un jeu de cas annotés, avec les raisons des décisions.
4. Séparer entraînement, validation et test.
5. Optimiser le prompt du juge avec une fonction de score adaptée.
6. Réévaluer le nouveau candidat et recommencer.

**Le rôle de GEPA**

L’optimiseur présenté explore et améliore des formulations à partir des résultats et des retours. La diversité des candidats peut conserver des approches utiles sur certains cas, même si leur score moyen est inférieur.

**Les points déterminants**

- Représenter les cas réels dans le dataset.
- Expliquer les verdicts plutôt que fournir uniquement une étiquette.
- Pondérer les erreurs selon leurs conséquences métier.
- Mesurer aussi la stabilité du juge sur plusieurs exécutions.
- Distinguer les résultats obtenus sur les cas évalués de la performance future en production.

**L’enseignement**

Les annotations aident également à clarifier le standard métier : expliquer pourquoi un titre est refusé révèle des règles jusque-là implicites.

## Ce que j’en garde

Le juge doit lui aussi être évalué ; son alignement vient d’une boucle de données, de retours humains et de mesures.

*Sources : transcription du Grand Amphi jour 2, segments 510–601 environ, et programme fournis. Synthèse du travail présenté ; chiffres de performance non généralisés.*
