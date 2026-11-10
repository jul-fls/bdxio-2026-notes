# OpenRewrite : Refactor as code

**Jérôme Tama · Vendredi, 16 h 30 · Grand Amphi**

## Ouverture et fil du talk

Automatiser des transformations répétées du code avec des recettes structurées et testables, notamment pour des migrations à l’échelle de plusieurs applications.

## Notes de déroulé et détails

Jérôme présente OpenRewrite comme une manière d’écrire le refactoring lui-même. L’effort de fabrication d’une recette devient intéressant quand la même transformation revient dans beaucoup de fichiers ou d’applications.

Le LST conserve la structure nécessaire pour identifier précisément ce que l’on modifie, mais aussi ce que les humains ne veulent pas perdre : mise en forme et commentaires. Une substitution de texte ne connaît pas toujours les types ni la différence entre deux expressions qui se ressemblent.

Le visiteur parcourt l’arbre et applique le comportement choisi. Les recettes peuvent se composer, mais leur ordre et leurs préconditions restent importants. Un changement effectué par la première peut empêcher la seconde de retrouver le motif qu’elle attendait.

Les migrations de JUnit et Mockito montrent le passage d’un remplacement simple à un changement de convention plus large. L’exemple Micrometer illustre une transformation réutilisable sur l’instrumentation. Une recette peut aussi analyser sans modifier, pour cartographier des usages.

L’association avec un LLM est envisagée en conclusion : fournir un outil structuré au modèle plutôt que le laisser tout remplacer sous forme de texte. Le caractère déterministe aide à tester et répéter la transformation, mais ne démontre pas que la recette exprime le bon besoin. Comme pour un outil de compilation, il faut encore examiner le résultat et valider le projet.

**Les deux concepts clés**

- **Recette** : description d’une analyse ou transformation, composable avec d’autres recettes.
- **LST — Lossless Syntax Tree** : représentation structurée du code conservant notamment les informations nécessaires pour préserver commentaires et mise en forme.

**Comment cela fonctionne**

Le code est analysé comme une structure, pas seulement comme du texte. Un visiteur parcourt les éléments et applique les transformations pertinentes. Une recette peut aussi produire un inventaire sans modifier le code.

**Les exemples du talk**

Migration de tests JUnit, adaptation d’usages de Mockito et transformation d’instrumentation avec Micrometer. Des opérations simples s’assemblent en une migration plus large.

**Quand cela aide**

Des motifs récurrents sur de nombreux fichiers ou dépôts peuvent justifier l’écriture d’une recette. Pour un renommage ponctuel, le refactoring de l’IDE peut rester suffisant.

**Les limites**

- Les préconditions et l’ordre de combinaison des recettes comptent.
- La compréhension des constructions utilisées dépend de leur prise en charge.
- Une transformation reproductible peut reproduire une erreur de recette : ses tests et la validation du projet restent nécessaires.

**Le lien avec les LLM**

Le conférencier propose de combiner l’assistance d’un modèle avec des outils structurés de transformation plutôt que laisser toute modification dépendre de manipulations textuelles.

## Ce que j’en garde

Encapsuler une transformation répétitive dans une recette permet de la réutiliser, de la tester et de mieux contrôler sa portée.

*Sources : transcription du Grand Amphi jour 2, segments 689–774 environ, et programme fournis. Synthèse de la démonstration ; licences et compatibilités actuelles non vérifiées.*
