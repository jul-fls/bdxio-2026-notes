# Révolution TanStack Query : enfin une bonne gestion d’état

**Lucas Audart et Mickael Alves · Vendredi, 15 h 15 · Amphi A**

## Ouverture et fil du talk

Gérer les données venant du serveur : chargement, cache, erreurs, modifications et synchronisation de l’interface.

## Notes de déroulé et détails

La conférence prend la forme d’un service après-vente : plusieurs cas permettent de voir les mécanismes du cache plutôt que d’énumérer une API. Le premier problème est la quantité de logique que l’on écrit à la main autour d’un simple chargement : erreurs, attente, données déjà connues et actualisation.

La query key représente l’identité de la donnée. Si les paramètres changent, la clé doit refléter cette différence. Cela permet à plusieurs composants de partager la bonne donnée sans confondre deux résultats distincts.

La mutation modifie le serveur ; elle ne signifie pas automatiquement que tous les résultats dérivés deviennent corrects dans le navigateur. L’exemple du panier montre pourquoi l’invalidation fait partie de la conception. On indique quelles données doivent être relues après l’ajout.

L’abandon du code Redux de l’exemple ne veut pas dire que Redux est inutile. Les intervenants séparent précisément les informations distantes des décisions locales d’interface. Une modale, une sélection temporaire et un panier stocké côté serveur n’ont pas la même autorité ni le même cycle de vie.

Les derniers appels du SAV ouvrent vers la pagination, la persistance et le rendu serveur. Les factories de clés et la colocation réduisent les conventions dispersées. La continuité hors ligne demande davantage que conserver une copie : il faut aussi penser reprises, mutations et fraîcheur des données.

**La distinction centrale**

- **Server state** : données appartenant au serveur, dont l’application conserve une représentation locale.
- **Client state** : état propre à l’interface, comme une modale ouverte ou une sélection locale.

TanStack Query cible surtout le premier. Il ne remplace pas systématiquement tous les autres gestionnaires d’état.

**Les briques**

| Notion | Rôle |
|---|---|
| Query | Récupérer des données et suivre leur état |
| Query key | Identifier les données et leurs paramètres dans le cache |
| Mutation | Effectuer une modification distante |
| Invalidation | Signaler que des données doivent être actualisées |
| QueryClient | Piloter le cache et les opérations associées |

**L’exemple du talk**

Un panier initialement géré avec beaucoup de code Redux passe à des queries et mutations. Après un ajout, l’invalidation du panier permet de récupérer son nouvel état.

**Les bonnes pratiques illustrées**

- Donner des clés cohérentes aux données et paramètres.
- Regrouper les clés dans des factories et placer les queries près de la fonctionnalité concernée.
- Utiliser les outils de développement pour comprendre le cache.
- Employer les fonctions dédiées à la pagination ou au chargement progressif.

**Les autres possibilités évoquées**

Persistance du cache, gestion des pertes de réseau et transfert de données entre rendu serveur et client. Ces usages nécessitent une configuration adaptée ; la persistance seule ne transforme pas toute application en système hors ligne complet.

## Ce que j’en garde

Distinguer les données du serveur de l’état de l’interface évite de reconstruire à la main toute la gestion du cache et des chargements.

*Sources : transcription du jour 2 et programme fournis. Synthèse des concepts ; pas un guide de configuration actualisé.*
