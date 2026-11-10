# LoRa, Meshtastic & MeshCore : communiquer sans internet. Pour de vrai.

**Guillaume Membré · Jeudi, 15 h 15 · Amphi B**

## Ouverture et fil du talk

Faire communiquer de petites cartes par radio pour échanger des messages courts ou des mesures, sans dépendre d’une connexion internet pour leur transport.

## Notes de déroulé et détails

Guillaume distingue d’abord la transmission radio et les logiciels qui organisent les échanges. LoRa transporte des informations ; Meshtastic et MeshCore ajoutent des choix de protocole et de fonctionnement des appareils. Deux cartes compatibles matériellement ne partagent donc pas nécessairement le même réseau.

Le téléphone sert souvent d’écran et de clavier. La petite carte fait le travail radio, avec ses contraintes d’alimentation et d’antenne. Les messages sont courts ; l’exemple d’un capteur relevé quelques fois par jour aide à situer les usages qui conviennent mieux qu’un flux volumineux.

Le relais paraît simple : recevoir puis réémettre. Mais ce mécanisme utilise le même espace radio que les nouveaux messages. Si beaucoup d’appareils répètent, la capacité utile peut diminuer. Le nombre de sauts et les règles de retransmission doivent donc être pensés avec la densité du réseau.

Les démonstrations et anecdotes montrent aussi une asymétrie importante : voir un émetteur ne prouve pas qu’il nous voit. L’emplacement, les obstacles et les caractéristiques de l’installation peuvent rendre une liaison utilisable dans un sens seulement.

Le retour d’expérience reste très expérimental. Antennes, positions fixes et disponibilité des relais changent le résultat. L’intérêt est d’apprendre ce que permet une infrastructure légère, sans confondre la possibilité de transmettre avec une garantie de livraison ni reprendre les paramètres radio comme configuration universelle.

**Les trois noms à distinguer**

| Nom | Rôle dans le talk |
|---|---|
| LoRa | Technologie de transmission radio |
| Meshtastic | Projet logiciel organisant les échanges entre appareils |
| MeshCore | Autre projet logiciel, avec une organisation différente des rôles et du relais |

Utiliser la même technologie radio ne signifie pas que deux réseaux sont interopérables.

**Le principe du maillage**

Un nœud reçoit un message et peut le retransmettre. Plusieurs sauts peuvent ainsi étendre la portée au-delà d’une liaison directe.

Un téléphone peut servir d’interface de saisie et de lecture, tandis que la carte assure la communication radio.

**La comparaison présentée**

- **Meshtastic** : le talk insiste sur la participation des nœuds au relais et le risque de saturation lorsque les retransmissions se multiplient.
- **MeshCore** : le talk distingue les appareils compagnons et les relais, avec des chemins qui s’optimisent au fil des échanges.

Ce sont les grandes lignes exposées, pas une description exhaustive des configurations possibles.

**Les limites concrètes**

- Petits messages et faible débit : ce n’est pas un remplacement d’internet pour les gros fichiers.
- Portée dépendante du terrain, des obstacles, des antennes et du positionnement.
- Recevoir un émetteur ne garantit pas qu’il puisse nous recevoir en retour.
- Saturation possible si trop d’appareils émettent ou retransmettent.
- La présence de nœuds ne garantit pas la livraison de chaque message.

**L’exemple du talk**

Transmettre quelques fois par jour les mesures d’un capteur situé hors d’un réseau traditionnel, ou expérimenter l’envoi de messages entre plusieurs lieux.

Le conférencier souligne aussi l’importance du choix de matériel adapté à la région et du cadre radio applicable. La fiche ne reprend pas de paramètres réglementaires comme consignes de configuration.

## Ce que j’en garde

Communiquer sans internet reste dépendant d’un réseau physique : couverture radio, relais et capacité disponible comptent toujours.

*Sources : transcription de l’amphi B et programme fournis. Notes développées à partir de la transcription, sans citations littérales.*
