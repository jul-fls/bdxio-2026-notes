# Du prompt artisanal au prompt observable : REX d’une Healthtech

**Vincent Dubois · Vendredi, 13 h 55 · Amphi E**

## Ouverture et fil du talk

Organiser une boucle d’amélioration des prompts à partir des usages réels, au lieu de corriger au hasard ou de surveiller une masse ingérable de traces.

## Notes de déroulé et détails

Vincent décrit une difficulté familière : le premier prompt fonctionne sur quelques exemples et l’équipe cherche ensuite un indicateur simple de qualité. La comparaison des textes paraît séduisante, mais une forte proximité ne prouve pas que la reformulation respecte les éléments importants.

Le passage à un juge LLM ouvre plus de possibilités, avec un coût supplémentaire et de nouveaux résultats à examiner. Multiplier les critères peut produire une quantité de traces que la petite équipe ne parvient plus à exploiter. Une observabilité trop coûteuse ou trop bruyante finit par ne plus être utilisée.

Le changement consiste à faire remonter les problèmes depuis le produit. Un pouce négatif accompagné d’un commentaire devient un signal ciblé. Une tâche collecte les retours, les rend visibles dans l’organisation du travail et permet d’accéder à la bonne trace plutôt que fouiller l’ensemble des appels.

Le cas réel entre ensuite dans le jeu de données après préparation adaptée. L’équipe cherche d’abord à reproduire le défaut, puis modifie le prompt et rejoue les évaluations. La version du prompt, les entrées et le résultat attendu deviennent des éléments que l’on peut comparer.

Le processus ressemble ainsi à une boucle de correction de logiciel. Les retours orientent les priorités et enrichissent le corpus de vérification. Il reste indispensable de traiter les données selon leur sensibilité et de ne pas confondre absence de plainte avec absence de problème.

**Le cas présenté**

Une fonction remet en forme du texte dans une application de santé. L’équipe cherche à savoir si le résultat reste correct et utile.

**Les premiers essais**

- Comparer les textes par une mesure de similarité : difficile de choisir un seuil suffisamment pertinent.
- Utiliser de nombreux juges LLM : coûteux et chronophage à exploiter systématiquement.
- Développer une solution maison : investissement important pour une petite équipe.

**La boucle retenue**

1. Recueillir les retours utilisateurs, avec un commentaire pour les cas problématiques.
2. Relier le retour à la trace de l’appel concerné.
3. Reproduire le défaut et ajouter le cas à un jeu d’évaluation.
4. Modifier et versionner le prompt.
5. Rejouer le jeu de données pour vérifier l’amélioration et les régressions.

**Les outils et concepts**

Versionnement des prompts, traces d’entrées et sorties, datasets et évaluateurs. Le talk montre leur utilisation avec LangSmith.

**Le message pratique**

Suivre moins de signaux, mais les rendre actionnables. Des prompts accumulant des correctifs peuvent devenir contradictoires et mériter une réécriture. Les données utilisées pour le suivi doivent aussi être protégées.

## Ce que j’en garde

Un retour concret devient utile lorsqu’il mène à un cas reproductible et à une vérification après correction.

*Sources : transcription du vendredi en amphi E et programme fournis. Synthèse du processus logiciel ; aucune évaluation de sécurité clinique du produit n’est déduite du talk.*
