# Votre architecture cloud est en réalité un organigramme

**Horacio Gonzalez (LostInBrittany) · Jeudi, 16 h 30 · Grand Amphi**

## Ouverture et fil du talk

Choisir une architecture en tenant compte de l’équipe qui devra la comprendre, l’exploiter et la faire évoluer.

## Notes de déroulé et détails

Le talk regarde l’architecture depuis le quotidien de ceux qui devront la porter. Un déploiement réussi ne dit pas qui saura comprendre les logs, gérer un certificat ou reprendre un incident lorsque la personne qui a installé le système n’est pas disponible.

La complexité peut être déplacée vers une plateforme ou un fournisseur. Ce déplacement peut être pertinent, mais il doit être choisi : quelles opérations sont déléguées, lesquelles restent à l’équipe, et quelles nouvelles compétences deviennent nécessaires ?

L’onboarding sert d’indicateur concret. Si une personne met longtemps à comprendre les dépendances ou les responsabilités, ce coût fait partie de l’architecture. Il ne se voit pas dans un simple schéma de composants ni dans le temps de réponse d’une requête.

Le scénario de génération par IA force la question. Un agent peut produire rapidement une solution cohérente avec une définition générique de production. Il ne sait pas spontanément ce que l’équipe maîtrise, combien de personnes assurent l’astreinte ou quelles limites sont acceptables.

La responsabilité consiste donc à donner ces contraintes, puis à s’approprier le résultat. Cela ne veut pas forcément dire inspecter chaque ligne de chaque fichier ; cela signifie comprendre les décisions et leurs conséquences opérationnelles. La rapidité de fabrication rend ce travail plus important, parce qu’elle facilite l’introduction de composants que personne n’a encore appris à maintenir.

**L’idée principale**

La complexité d’une architecture ne disparaît pas : elle est prise en charge quelque part, par l’équipe, une plateforme, un fournisseur ou de l’automatisation. Ce déplacement implique des responsabilités.

**Les contraintes humaines à examiner**

- Taille de l’équipe et compétences disponibles.
- Capacité de maintenance et d’astreinte.
- Temps nécessaire à l’arrivée d’une nouvelle personne.
- Répartition des responsabilités et dépendances entre équipes.
- Capacité à diagnostiquer un incident sur les composants retenus.

**L’exemple du talk**

Une IA met rapidement en place une application sur Kubernetes. Le déploiement fonctionne, mais l’équipe ne maîtrise pas toutes les dépendances introduites. Une évolution d’API ou un problème de certificat révèle ensuite le coût d’exploitation caché.

**Ce que cela enseigne sur les demandes à l’IA**

Des mots comme « scalable » et « production ready » ne décrivent pas les contraintes réelles. Il faut préciser les compétences, la taille de l’équipe, les besoins opérationnels et la complexité qu’elle peut assumer.

**La question de décision**

Au-delà de « est-ce que cela fonctionne ? », se demander « qui saura maintenir cela et résoudre le problème lorsque cela ne fonctionnera plus ? ».

## Ce que j’en garde

Une architecture adaptée est aussi une architecture que l’organisation peut porter ; automatiser sa création ne transfère pas cette responsabilité.

*Sources : transcription du Grand Amphi et programme fournis. Synthèse des arguments ; scénario reformulé.*
