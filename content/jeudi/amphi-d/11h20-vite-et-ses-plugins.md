# Au cœur d’une pipeline : démystifions Vite et ses plugins

**Estéban S · Jeudi, 11 h 20 · Amphi D**

## Ouverture et fil du talk

Comprendre les transformations entre les fichiers du projet et le code reçu par le navigateur.

## Notes de déroulé et détails

La conférence part d’une observation dans le navigateur : les ressources demandées ne correspondent pas toujours au contenu brut des fichiers sur disque. Dans le développement présenté, un import de CSS peut déclencher l’envoi de JavaScript chargé de l’intégrer à la page. Le navigateur sait aussi traiter du CSS ; ce qui est intéressant ici est la transformation liée au mode de chargement.

Vite est montré sous trois angles : un serveur pour développer, une chaîne de préparation pour la production et un système extensible de plugins. L’objectif est de rendre cette plomberie visible plutôt que de la considérer comme une boîte noire.

Le plugin commence simplement : une fonction renvoie un objet avec un nom et des hooks. La distinction entre résolution, chargement et transformation évite de tout mélanger. Trouver l’identité d’un module n’est pas encore produire son contenu ; produire ce contenu n’est pas encore le transformer.

Le hook de chargement peut lire un fichier, récupérer une ressource distante ou renvoyer directement une chaîne. Ce dernier cas explique les modules virtuels : un import peut exister pour le programme sans correspondre à un fichier créé manuellement.

Les démonstrations ouvrent ensuite vers les routes générées, les métadonnées et les middlewares. Le serveur de développement peut héberger un outil d’inspection ou une fausse API. Le plugin d’inspection sert justement à retrouver ce qui a modifié une ressource et à comprendre les étapes traversées.

**L’idée principale**

Vite fonctionne comme une chaîne de traitement extensible. Ses plugins peuvent trouver un module, fournir son contenu et transformer son code.

**Trois hooks à connaître**

Un hook est un point où un plugin peut intervenir.

| Hook | Rôle |
|---|---|
| `resolveId` | Déterminer à quoi correspond un import |
| `load` | Charger ou fournir le contenu du module |
| `transform` | Transformer ce contenu |

**Exemple simplifié**

Le navigateur ne comprend pas directement un composant `.vue`. Un plugin le transforme en code utilisable.

**Les notions utiles**

- **Module virtuel** : module importable dont le contenu est généré, sans fichier source correspondant sur le disque. Utile pour des routes, des icônes ou des informations de version.
- **HMR** : remplacement à chaud d’un module, pour actualiser l’application sans tout recharger et préserver son état lorsque c’est possible.
- **Middleware** : traitement des requêtes du serveur de développement, par exemple pour simuler une API.

## Ce que j’en garde

Vite est une chaîne entre les fichiers et le navigateur ; les plugins permettent d’en adapter les étapes.

*Source : transcription et programme fournis. Notes développées à partir de la transcription, sans citations littérales.*
