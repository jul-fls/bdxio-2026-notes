# Mon setup DevContainer : un poste de développement, reproductible et flexible

**Nicolas Focqueu · Vendredi, 14 h 20 · Amphi E**

## Ouverture et fil du talk

Décrire l’environnement de développement avec le projet pour le retrouver sur un poste local ou une machine distante.

## Notes de déroulé et détails

Nicolas commence avec un projet Java alors que les outils correspondants ne sont pas installés sur son poste. La démonstration rend visible ce qui appartient à l’hôte et ce qui est fourni par l’environnement du projet.

La configuration peut partir d’un template puis être personnalisée avec un Dockerfile. Elle décrit les versions, dépendances et réglages nécessaires pour travailler. Les features ajoutent des capacités réutilisables ; elles ne doivent pas être comprises comme un assemblage magique de tous les conteneurs.

L’éditeur se connecte au contexte de développement et les commandes s’y exécutent. Les fichiers du projet et l’environnement technique sont donc liés sans exiger que chaque développeur installe à la main le même ensemble directement sur son système principal.

La partie distante reprend le même raisonnement : on déplace l’exécution, tout en conservant une manière familière d’accéder au code et aux outils. Cela peut alléger un poste local, mais ajoute la disponibilité et la latence du réseau au travail quotidien.

Le point intéressant est la reproductibilité relative. Une configuration partagée diminue les écarts et accélère la préparation ; elle doit encore être entretenue et testée. La gestion des ressources, des accès et des secrets ne disparaît pas parce que l’environnement a un fichier de configuration. Le talk montre un setup personnel, à adapter aux contraintes de son équipe.

**Les briques**

- **Conteneur de développement** : environnement contenant les outils nécessaires au projet.
- **Configuration Dev Container** : décrit l’environnement et son intégration avec l’éditeur.
- **Dockerfile** : personnalise l’image et les outils installés.
- **Features** : composants réutilisables pour ajouter des capacités à l’environnement.

**La démonstration**

Un projet Java et Spring est préparé sur un poste qui ne dispose pas de Java ni de Maven en local. L’environnement fournit les versions et outils nécessaires. Le talk montre ensuite un usage distant.

**Les bénéfices**

- Réduire les écarts entre les installations des développeurs.
- Retrouver un outillage configuré avec le projet.
- Faciliter l’arrivée sur un projet sans multiplier les installations locales.
- Faire fonctionner l’environnement sur une autre machine lorsque nécessaire.

**Le compromis**

La configuration et l’image demandent un entretien. Les ressources de la machine d’exécution et la connexion dans le cas distant restent des contraintes concrètes.

## Ce que j’en garde

Versionner l’environnement avec le projet rend sa préparation plus reproductible et facilite le passage entre plusieurs machines.

*Sources : transcription du vendredi en amphi E et programme fournis. Synthèse de la démonstration, sans guide d’installation actualisé.*
