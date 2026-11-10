# Éviter le déficit de l’infrastructure : retour d’expérience

**Vivien Ramahandry · Vendredi, 14 h 20 · Amphi A**

## Ouverture et fil du talk

Comprendre puis réduire une facture cloud, avec un retour d’expérience sur une infrastructure AWS et Kubernetes.

## Notes de déroulé et détails

Le retour commence par une facture qui augmente alors que la personne recrutée pour reprendre l’infrastructure découvre et remet en marche des éléments mal maîtrisés. Avant de couper, il faut comprendre ce que chaque ressource fait et à qui elle appartient.

Les tags permettent de rattacher les coûts aux environnements et aux responsables. Le monitoring ajoute la consommation réelle à l’inventaire. Sans ces deux vues, une baisse de capacité risque de se faire au mauvais endroit ou de supprimer une ressource dont une autre équipe dépend.

Le premier levier est temporel : un environnement de développement n’a pas toujours besoin de fonctionner la nuit et le week-end. L’automatisation évite de faire reposer les économies sur une extinction manuelle oubliée.

Le stockage fournit un autre exemple : des années d’images de conteneurs se sont accumulées alors qu’un retour à certaines versions n’a plus de sens. Les politiques de cycle de vie doivent néanmoins être discutées avec ceux qui utilisent les données, et l’archivage a ses propres coûts de récupération.

La partie réseau rappelle qu’une requête apparemment interne peut emprunter un chemin facturé. Il faut regarder zones, régions, sorties et accès aux services. Le plan reste progressif : annoncer une action, la faire, observer puis décider de la suivante. Une économie chiffrée sur un poste ne prouve pas que toute l’infrastructure est optimisée.

**La méthode**

1. Identifier les ressources et leurs responsables avec une politique de tags.
2. Observer les coûts et l’utilisation réelle.
3. Auditer les postes compute, stockage et réseau.
4. Communiquer un plan d’action et effectuer un changement ciblé.
5. Mesurer les effets avant de poursuivre.

**Les leviers illustrés**

- **Environnements inutilisés** : automatiser l’arrêt de ressources de développement hors des périodes utiles.
- **Dimensionnement** : confronter la capacité allouée à la consommation observée.
- **Stockage** : examiner les vieilles images de conteneurs, snapshots et données, puis définir des règles de conservation adaptées.
- **Réseau** : comprendre le trajet des flux et les passages entre zones, régions et services.
- **Appels API** : éviter des opérations répétées ou inutiles pour récupérer une information déjà connue.

**L’exemple réseau**

Le talk montre l’intérêt d’examiner des accès à des services cloud qui empruntent un chemin coûteux et d’évaluer des endpoints privés. Le gain dépend des services et de leur tarification ; ce n’est pas une économie automatique dans toute architecture.

**Les précautions du retour d’expérience**

Avant une suppression, vérifier le besoin avec les équipes concernées. Avant une modification réseau, comprendre les flux et les conséquences. Optimiser un poste sans observer le service peut dégrader son fonctionnement.

## Ce que j’en garde

La réduction des coûts commence par rendre l’infrastructure lisible, puis avancer par changements mesurés.

*Sources : transcription du jour 2 et programme fournis. Synthèse du retour d’expérience ; montants et paramètres tarifaires non repris comme références actuelles.*
