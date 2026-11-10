# Fin de partie du legacy : une usine IA calquée sur les gestes de nos devs

**Guillaume Bernus et Michael Naxara · Vendredi, 10 h 25 · Amphi B**

## Ouverture et fil du talk

Industrialiser une migration de logiciel ancien avec une chaîne d’agents et de skills reproduisant les étapes du travail de l’équipe.

## Notes de déroulé et détails

L’usine est décrite à partir des gestes déjà faits par les développeurs. L’idée n’est pas de donner tout le legacy à un seul agent et d’attendre une application neuve. Chaque phase produit des éléments que la suivante pourra utiliser et que l’équipe pourra examiner.

Le cadrage fonctionnel extrait les règles et les scénarios. Le cadrage d’architecture répartit ensuite les responsabilités entre composants et précise les contrats. Cette séparation permet d’envisager du travail en parallèle, sans laisser chaque agent inventer une interface incompatible avec ses voisins.

Les artefacts sont conservés en Markdown, avec des décisions et dépendances explicites. La mémoire ne doit pas rester dans une seule conversation que les autres membres de l’équipe n’ont pas. Les tests générés reprennent aussi les scénarios posés en amont, avec des vérifications complémentaires.

Le retour d’expérience distingue les bénéfices attendus et les surprises. Produire un plan et du code plus vite était attendu ; aider des personnes moins habituées au cadrage à participer à cette phase est un autre effet observé. La validation, en revanche, a demandé davantage de travail que prévu.

L’incident de versions montre une dépendance rarement visible dans les démonstrations d’agents : l’outil qui fabrique doit lui-même être maîtrisé. Stabiliser une version pendant un chantier évite de produire des analyses et implémentations selon des règles différentes, tout en conservant une boucle d’amélioration séparée.

**La chaîne présentée**

1. Analyser le comportement existant et écrire les spécifications fonctionnelles.
2. Décrire les règles métier et scénarios de test.
3. Cadrer l’architecture : composants, décisions et contrats d’API.
4. Préparer les plans de migration et leurs dépendances.
5. Implémenter les composants et leurs tests.
6. Vérifier l’intégration et la non-régression.

**Les documents intermédiaires**

- Fichiers Markdown pour transmettre le contexte entre étapes.
- Scénarios Gherkin décrivant les comportements attendus.
- Schémas C4 pour représenter l’architecture.
- ADR pour conserver les décisions et leurs raisons.

**Le rôle humain**

L’équipe apporte les règles, arbitre les décisions et valide les résultats. Le gain recherché concerne aussi l’analyse et le cadrage, pas seulement la génération de code.

**L’incident instructif**

Des personnes travaillent avec des versions différentes de l’usine : les plans produits ne prennent pas tous en compte le même découpage. Il faut reprendre une partie du travail. L’équipe met ensuite en place un versionnement pour stabiliser la chaîne utilisée pendant une migration.

**La limite du retour d’expérience**

La validation n’est pas automatiquement accélérée : améliorer l’usine en même temps qu’on l’utilise peut ralentir la migration. Les comparaisons présentées reposent notamment sur des estimations initiales.

## Ce que j’en garde

Une chaîne d’agents se traite comme un outil logiciel : contrats, contexte partagé, validation et versions cohérentes sont essentiels.

*Sources : transcription du vendredi en amphi B et programme fournis. Notes développées à partir de la transcription ; résultats non présentés comme gains garantis.*
