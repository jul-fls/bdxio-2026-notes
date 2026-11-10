# La nécessaire évolution du métier de développeur : que nous arrive-t-il ?

**Nicolas Martignole · Vendredi, 9 h · Grand Amphi**

## Ouverture et fil du talk

Le déplacement du travail de développement lorsque les agents prennent en charge une part croissante de la production de code.

## Notes de déroulé et détails

Nicolas construit la keynote sur son parcours, ses usages chez Back Market et sa vision de la suite. Il assume un propos volontairement provocateur sur la fin de la saisie manuelle et de certaines pratiques de revue ; il faut le lire comme une prise de position étayée par son expérience, pas une description de toutes les équipes.

La distinction importante est entre déléguer le code et déléguer le problème. Dans son exemple de facturation électronique, il reste engagé dans la compréhension des API, les performances et les choix synchrones ou asynchrones. L’agent produit, mais le système doit encore remplir un besoin dont quelqu’un répond.

Le harnais devient un investissement durable : instructions, outils, documents et contexte. Le cas du fichier regroupant des commentaires de revue montre comment une connaissance répétée oralement peut être déplacée en amont de la génération. Cela ne supprime pas tous les défauts ; cela évite de rejouer sans fin les mêmes remarques.

La revue de conversations est proposée pour retrouver l’intention derrière de gros changements. Il est plus facile de comprendre une suite de décisions si l’on sait ce qui a été demandé et corrigé. Ce matériau complète la compréhension des artefacts, sans constituer à lui seul une preuve de leur exactitude.

Les feature flags permettent enfin de distinguer livraison et activation. Les contrôles peuvent porter sur le comportement observé et une exposition progressive, plutôt que traiter la mise en production comme un événement unique et irréversible.

**Le témoignage**

Le conférencier décrit ses usages personnels et ceux observés chez Back Market. Il délègue davantage la saisie du code, tout en conservant la réflexion sur le besoin, l’architecture, les performances et le résultat.

**Les notions importantes**

- **Harnais ou harness** : environnement autour du modèle, comprenant les outils et mécanismes d’exécution et de gestion du contexte.
- **Contexte** : informations nécessaires à l’agent pour comprendre le projet et ses contraintes.
- **Feature flag** : mécanisme séparant le déploiement du code de l’activation d’une fonctionnalité.

**Les changements proposés**

- Investir dans la documentation et les instructions réutilisables.
- Transformer les remarques récurrentes de revue en règles accessibles aux agents.
- Examiner les intentions, les conversations et les résultats, au-delà du seul volume de fichiers produits.
- Garder une maîtrise de l’activation et de l’observation des fonctionnalités.

**L’exemple du talk**

Les commentaires répétitifs d’un développeur expérimenté sont regroupés dans un fichier de consignes pour éviter de devoir les refaire après chaque génération.

**La distinction à garder**

La disparition annoncée de la revue de code est une position prospective du conférencier. Elle ne démontre pas que l’inspection du code est inutile dans tous les projets ni que des tests suffisent à garantir la qualité.

## Ce que j’en garde

La vitesse de production déplace l’effort vers la formulation du besoin, le contexte, les décisions et la vérification du résultat.

*Sources : transcription du Grand Amphi jour 2, segments 35–179 environ, et programme fournis. Synthèse du témoignage ; prévisions et affirmations sur les modèles restituées comme des opinions, sans validation indépendante.*
