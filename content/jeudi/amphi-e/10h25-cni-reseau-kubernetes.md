# CNI — Connexions Non Identifiées : deep dive dans le réseau Kubernetes

**Benoit Touron · Jeudi, 10 h 25 · Amphi E**

## Ouverture et fil du talk

Comprendre comment les pods communiquent sur un même nœud puis entre plusieurs nœuds. Le talk se concentre sur le réseau entre pods.

## Notes de déroulé et détails

Benoit annonce un périmètre volontairement limité : la communication entre pods. Les Services Kubernetes, le service mesh et l’ingress ne sont pas le sujet. Cela permet de reconstruire le chemin d’un paquet sans ajouter immédiatement toutes les abstractions du cluster.

Le namespace réseau donne à un groupe de processus ses propres interfaces et sa propre vue du réseau. Les conteneurs d’un pod partagent cette vue. Pour joindre l’extérieur de ce périmètre, la paire veth forme un lien entre deux environnements ; le bridge permet ensuite de relier plusieurs interfaces sur le même nœud.

La progression des démonstrations est importante : tant qu’une brique manque, le ping échoue. Ajouter une interface ne crée pas magiquement les routes et le trajet de retour. Le réseau est reconstruit par étapes vérifiables plutôt que présenté comme une seule configuration opaque.

Entre les nœuds, l’overlay transporte le paquet dans une encapsulation. L’autre approche repose sur la connaissance des réseaux accessibles par chaque nœud. Les routes statiques montrent le principe ; BGP et un démon comme Bird permettent ensuite de diffuser les changements.

Le CNI apparaît à la fin comme l’automatisation de ces opérations. Comprendre les mécanismes Linux en dessous aide à situer la panne : isolation locale, branchement, routage entre nœuds ou sortie du réseau. Les implémentations peuvent choisir des montages différents.

**Les briques Linux**

| Brique | Rôle |
|---|---|
| Network namespace | Isoler l’environnement réseau d’un groupe de processus |
| Paire veth | Relier deux environnements par un « câble Ethernet virtuel » |
| Bridge | Relier plusieurs interfaces, comme un commutateur virtuel |
| Routage | Indiquer où envoyer les paquets destinés aux autres réseaux |
| NAT | Traduire des adresses, notamment pour certaines communications vers l’extérieur |

**À l’intérieur d’un pod**

Les conteneurs partagent le même environnement réseau et peuvent communiquer via `localhost`.

**Entre plusieurs nœuds**

Deux approches sont montrées :
- **Overlay** : encapsuler les paquets pour les transporter entre nœuds, puis les désencapsuler à l’arrivée.
- **Routage** : faire connaître les réseaux de pods accessibles via chaque nœud. Les routes peuvent être statiques ou échangées dynamiquement, par exemple avec BGP.

**Le rôle du CNI**

**Container Network Interface** définit l’interface utilisée pour configurer le réseau des conteneurs. Les plugins automatisent les opérations réseau illustrées dans les démonstrations.

**L’exemple du talk**

Construire progressivement la connectivité : namespaces isolés, interfaces virtuelles, bridge, puis chemins entre nœuds. Un ping échoue tant que les éléments nécessaires au trajet ne sont pas en place.

## Ce que j’en garde

Le réseau Kubernetes s’appuie sur des mécanismes Linux concrets ; le CNI automatise leur configuration.

*Sources : transcription de l’amphi E et programme fournis. Notes développées à partir de la transcription, sans citations littérales.*
