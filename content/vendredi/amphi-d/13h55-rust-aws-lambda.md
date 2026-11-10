# Du Rust dans AWS Lambda : simple à coder, imbattable côté perf !

**Etienne Puissant · Vendredi, 13 h 55 · Amphi D**

## Ouverture et fil du talk

Développer, tester et déployer une fonction Rust sur AWS Lambda avec une chaîne d’outils intégrée.

## Notes de déroulé et détails

Étienne situe son intérêt pour Rust dans des services avec de fortes contraintes de production. Le langage est apprécié pour la maîtrise des ressources et ses caractéristiques d’exécution, mais le talk veut surtout montrer que le développement quotidien n’exige pas de tout assembler manuellement.

Cargo Lambda fournit un projet de départ adapté à l’événement. Le squelette contient déjà les structures et la séparation entre l’initialisation et le handler. L’exemple HTTP lit un paramètre de requête, ce qui rend le cycle facile à suivre.

L’exécution locale reçoit un payload représentatif. On peut faire une modification et réessayer sans créer à chaque fois une fonction complète depuis la console distante. La démonstration passe par une vidéo de secours lorsque le téléchargement initial est bloqué par le réseau.

La compilation produit ensuite un artefact optimisé pour la cible. Le déploiement montré avec l’outil ne signifie pas que toutes les équipes doivent abandonner leur infrastructure as code : le conférencier cite aussi d’autres méthodes utilisées dans son organisation.

Ce qui est simple dans la démo est le parcours de démarrage. Le choix réel demande encore de mesurer le temps d’initialisation, la charge utile et les accès aux services distants. Une fonction surtout limitée par son réseau n’obtiendra pas le même bénéfice qu’un calcul fortement dépendant du CPU.

**Le vocabulaire**

- **Lambda** : fonction exécutée en réponse à un événement dans le service AWS concerné.
- **Handler** : fonction qui reçoit et traite l’événement.
- **Payload** : données de l’événement envoyé à la fonction.
- **Cold start** : phase de démarrage d’un nouvel environnement d’exécution.
- **Cargo Lambda** : outil présenté pour créer, exécuter, compiler et déployer ces projets Rust.

**Le parcours de démonstration**

1. Créer un projet à partir d’un template adapté au type d’événement.
2. Examiner les structures d’entrée et le handler.
3. Lancer un environnement local et invoquer la fonction avec un événement JSON.
4. Modifier le code et vérifier la réponse.
5. Construire un binaire optimisé puis le déployer.

**L’exemple**

Une fonction HTTP lit un paramètre de requête et renvoie un message. Le talk montre qu’on dispose déjà d’une base de projet et de types adaptés, plutôt que de tout construire à la main.

**Les raisons du choix de Rust**

Le conférencier met en avant la performance et la maîtrise des ressources dans des services soumis à des contraintes de production. L’intérêt concret dépend du travail réalisé par la fonction et doit être mesuré.

## Ce que j’en garde

L’outillage peut rendre le cycle de développement d’une Lambda Rust accessible, tout en conservant les atouts du langage pour les performances.

*Sources : transcription du vendredi en amphi D et programme fournis. Le titre est celui du programme ; il ne prouve pas une supériorité universelle. État du support et commandes à vérifier avant implémentation.*
