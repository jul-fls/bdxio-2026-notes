# Server-Sent Events : quand l’API murmure à l’oreille de votre navigateur

**Charline Humeau et Nicolas Giraud · Vendredi, 11 h 20 · Grand Amphi**

## Ouverture et fil du talk

Actualiser une interface lorsque des événements surviennent côté serveur, sans multiplier les demandes périodiques du navigateur.

## Notes de déroulé et détails

La démonstration fait évoluer une application où des changements doivent devenir visibles sans action répétée du client. Avec le polling, la fréquence choisie peut être trop lente à certains moments et produire beaucoup de demandes inutiles à d’autres.

Le flux SSE déplace cette initiative vers le serveur. Le navigateur écoute et réagit quand un événement arrive ; les autres opérations continuent à passer par les appels habituels. Ce découpage convient à un grand nombre de mises à jour, sans imposer tout le protocole d’une conversation bidirectionnelle permanente.

Les intervenants rapprochent le mécanisme d’un pub/sub, puis distinguent ce modèle d’une file avec acquittement. Le fait qu’un événement soit envoyé ne garantit pas qu’un consommateur absent l’a reçu ni qu’il a exécuté le traitement attendu. Il faut connaître la politique de reprise et l’état de départ.

Les types de messages organisent le flux, mais les droits restent une responsabilité du backend. Une interface qui masque un événement ne remplace pas le contrôle de ce que le serveur lui transmet. Les données peuvent être filtrées par accès au flux ou par périmètre métier au moment de l’émission.

La fin rappelle les coûts d’exploitation : connexions durables, interruptions et gestion des ressources. SSE retire une partie de la complexité du transport, sans retirer le besoin de concevoir les garanties et le cycle de vie.

**Comparer les approches**

- **Polling** : le client demande régulièrement si quelque chose a changé.
- **SSE** : une connexion HTTP permet au serveur d’envoyer des événements au client.
- **WebSocket** : autre mécanisme permettant notamment une communication bidirectionnelle.

SSE transporte les événements du serveur vers le client ; les actions du client peuvent continuer à utiliser des requêtes HTTP habituelles.

**L’exemple du talk**

Une application de restaurant transmet des changements liés aux commandes, aux joueurs et aux salles. Les interfaces concernées réagissent aux événements plutôt que d’interroger en permanence un état inchangé.

**Les points de conception**

- Choisir une granularité claire et des types d’événements compréhensibles.
- Filtrer les événements selon les droits et le périmètre métier côté serveur.
- Prévoir l’état initial et le comportement après une interruption.
- Gérer la durée de vie des connexions et les ressources associées.
- Distinguer diffusion d’événements et file de travail avec acquittement.

**La limite importante**

Un flux SSE ne fournit pas, à lui seul, une file durable ni la garantie qu’un consommateur a traité chaque message. Un mécanisme de reprise ou une relecture de l’état peut être nécessaire selon le besoin.

## Ce que j’en garde

SSE simplifie les mises à jour poussées vers le navigateur, à condition de définir les droits, les reconnexions et les garanties réellement attendues.

*Sources : transcription du Grand Amphi jour 2, segments 298–414 environ, et programme fournis. Synthèse des concepts et de la démonstration, pas un guide d’API actualisé.*
