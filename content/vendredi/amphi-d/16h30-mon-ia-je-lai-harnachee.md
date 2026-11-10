# Mon IA galopait, je l’ai harnachée

**Benoit Fernandez · Vendredi, 16 h 30 · Amphi D**

## Ouverture et fil du talk

Construire progressivement une confiance contrôlée dans une chaîne agentique, sans transformer l’humain en relecteur épuisé de toute la production.

## Notes de déroulé et détails

Benoit commence par l’effet de volume : les agents produisent assez de code et de documents pour que la relecture intégrale devienne difficile. Le risque est alors de cliquer sur valider par fatigue, tout en donnant l’impression qu’un contrôle humain a eu lieu.

Son projet de migration introduit la confiance par étapes. Le cadrage et le pilote sont examinés en détail, parce qu’ils définissent le socle et les décisions qui seront reproduites. L’équipe ajuste les agents et les règles sur ce premier ensemble avant d’étendre le flux.

Les contrôles se déplacent ensuite vers plusieurs endroits : tests, CI, étapes de revue, supervision et traitement des exceptions. Les nouveautés sont distinguées des motifs déjà stabilisés. Le contrôle par échantillon complète ces mécanismes, sans transformer une bonne couverture de tests en preuve absolue.

La création des skills est guidée par des problèmes réellement observés. Un cas de concurrence mal traité déclenche une méthode spécialisée ; une règle utile partout peut rester globale. Cette démarche évite d’accumuler toutes les instructions possibles avant de savoir comment l’agent travaille.

La fin reste un retour en cours. Le pilote a demandé plus d’effort que prévu, la chaîne est spécifique à cette migration et les retours de recette ne sont pas tous revenus. Les gains annoncés doivent être lus dans ce contexte, avec les coûts de préparation, de contrôle et d’amélioration.

**Le problème de départ**

La génération rapide multiplie code, analyses et spécifications. Tout relire devient un goulot d’étranglement ; valider sans lire ne constitue pas une solution.

**Le parcours présenté**

1. Relire intégralement les décisions structurantes et le pilote.
2. Définir les règles et ajuster les agents sur cette base.
3. Ajouter des contrôles automatisés et des étapes de vérification.
4. Superviser les exécutions et conserver leurs traces.
5. Examiner les nouveautés, les écarts et des échantillons.
6. Corriger l’usine à partir des problèmes observés.

**Le rôle des skills**

Ajouter une méthode spécialisée lorsqu’un comportement problématique le justifie. Exemple : préciser comment gérer les mécanismes de concurrence rencontrés dans le logiciel ancien. Les instructions spécialisées sont chargées selon le besoin.

**Ce que l’humain garde**

- Les décisions d’architecture et les règles de référence.
- La validation des pratiques nouvelles.
- Le traitement des exceptions et arbitrages fonctionnels.
- L’analyse des résultats pour améliorer la chaîne.

**Les limites du retour d’expérience**

Le pilote et la mise au point demandent un investissement important. La confiance n’atteint pas 100 %. Au moment du talk, un premier lot est livré, mais tous les retours de recette ne sont pas encore disponibles. Les gains projetés ne sont donc pas tous des résultats finaux.

## Ce que j’en garde

La confiance se construit avec des preuves, des contrôles et une boucle d’amélioration ; elle ne se décrète pas à partir de la vitesse de génération.

*Sources : transcription du vendredi en amphi D et programme fournis. Synthèse du retour d’expérience ; coûts, estimations et couverture de tests ne sont pas des garanties de qualité.*
