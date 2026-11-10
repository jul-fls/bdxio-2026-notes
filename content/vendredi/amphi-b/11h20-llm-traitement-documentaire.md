# De 6 mois à 2 jours : la révolution LLM pour le traitement documentaire

**Vinorth · Vendredi, 11 h 20 · Amphi B**

## Ouverture et fil du talk

Extraire des informations de documents avec un modèle de langage et des instructions, puis fiabiliser le résultat pour un usage réel.

## Notes de déroulé et détails

Le contraste initial oppose l’annotation détaillée de documents et une première extraction obtenue en décrivant la tâche. Le message est de tester une approche promptée avant d’engager toute une chaîne d’entraînement spécialisée, pas de considérer le premier résultat comme prêt pour tous les cas.

L’extraction doit revenir dans une structure exploitable. Les types et champs attendus fournissent un premier filtre, puis les règles techniques et métier examinent la cohérence. Un JSON valide peut toujours contenir une mauvaise valeur : la forme et le sens doivent être évalués séparément.

Les exemples de documents servent à faire apparaître la variabilité réelle. Un jeu d’évaluation est nécessaire pour savoir si une modification du prompt améliore l’ensemble ou seulement le dernier document qui posait problème. Les cas incertains peuvent demander une reprise ou une revue humaine.

La production ajoute aussi le volume, le rythme et le coût. Un traitement nocturne par lots et un besoin immédiat n’impliquent pas la même infrastructure ni les mêmes délais acceptables. Les alertes doivent aider à repérer une dégradation plutôt que compter uniquement les appels réussis.

La discussion sur les instructions cachées dans les documents rappelle qu’une entrée documentaire reste non fiable. Contrôler les sorties est utile, mais les permissions, les secrets accessibles et les actions possibles doivent être limités indépendamment du prompt. Le délai spectaculaire du titre ne vaut donc pas garantie générale de mise en production.

**Le changement présenté**

L’approche traditionnelle implique notamment de préparer et annoter des documents pour entraîner une extraction spécialisée. Le talk montre une approche reposant d’abord sur un prompt et un format de sortie attendu.

**La chaîne à comprendre**

```text
Document → extraction par LLM → données structurées
         → validation technique et métier → traitement ou revue
```

**Les notions utiles**

- **Bounding box** : rectangle délimitant une zone annotée dans un document.
- **Schéma de données** : décrit les champs, types et contraintes attendus.
- **Golden dataset** : ensemble de documents et résultats de référence pour évaluer la qualité.
- **Revue humaine** : vérification des cas incertains ou non conformes.

**Du prototype à la production**

Le talk ajoute au prompt l’évaluation, les contrôles de cohérence, les reprises sur erreur, l’observation des performances, le traitement en batch ou en flux et la protection des données.

**Le point de vigilance**

Un document peut contenir des instructions malveillantes destinées au modèle. Un schéma de sortie aide à contrôler la forme, mais ne garantit pas à lui seul une protection contre l’injection de prompt ni la justesse des valeurs extraites.

## Ce que j’en garde

Un LLM peut accélérer le démarrage de l’extraction ; la validation et l’évaluation restent ce qui permet de juger son utilité réelle.

*Sources : transcription du vendredi en amphi B et programme fournis. Le délai du titre appartient au retour d’expérience, pas à une promesse générale. Certaines formulations orales de sécurité sont nuancées pour éviter une garantie erronée.*
