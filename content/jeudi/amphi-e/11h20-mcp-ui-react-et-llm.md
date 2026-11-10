# MCP UI, React et LLM : comment créer son App dans Claude & ChatGPT

**Mathieu Mure et Mickael Alves · Jeudi, 11 h 20 · Amphi E**

## Ouverture et fil du talk

Créer une application interactive dans une conversation avec un assistant, en combinant outils MCP, données structurées et interface React.

## Notes de déroulé et détails

La mise en scène Batman et Robin sert un parcours concret : récupérer des criminels, explorer des scènes de crime et rapprocher des indices. Au départ, le serveur ne fait que relayer une API et retourner des données. Cela suffit pour l’agent, mais reste difficile à lire pour l’utilisateur lorsqu’il y a beaucoup de résultats.

L’inspecteur permet de tester les outils avant de passer par la conversation. Les descriptions et schémas ne sont pas décoratifs : ils aident l’agent à comprendre quoi appeler, avec quels paramètres et comment interpréter les champs reçus.

L’interface ajoute une autre manière de travailler. Plutôt que lire du JSON, la personne manipule des cartes et des filtres. La ressource graphique s’exécute dans le cadre prévu par l’hôte ; il faut relier explicitement l’outil et la ressource, pas simplement retourner une page au hasard.

L’authentification est intégrée pour accéder aux données concernées. La démonstration ajoute ensuite la possibilité d’actualiser depuis le widget. Tous les clics ne doivent pas obliger à produire un nouveau message et une nouvelle interface dans le chat.

Le résultat combine deux canaux : la conversation formule une intention et conserve le contexte, tandis que l’interface permet une exploration plus précise. Les mêmes données chronologiques et géographiques deviennent alors plus faciles à rapprocher dans l’enquête.

**Les éléments à distinguer**

- **Serveur MCP** : expose des outils et des ressources à l’application hôte.
- **Outil** : opération que l’assistant peut appeler, avec description et schéma d’entrée.
- **Résultat structuré** : données organisées pour être exploitées par l’agent et l’interface.
- **Ressource UI** : contenu HTML, CSS et JavaScript affiché dans un cadre isolé par l’application hôte.

**Le déroulé de la démonstration**

1. Exposer un outil qui récupère des informations auprès d’une API fictive de police.
2. Décrire les entrées, les sorties et les champs pour guider l’agent.
3. Tester le serveur avec l’inspecteur MCP.
4. Ajouter une interface affichant les informations plus clairement que du JSON brut.
5. Ajouter authentification, interactions et mise à jour des données.

**Pourquoi une interface ?**

Des milliers de résultats bruts sont difficiles à lire. Des cartes, images et filtres permettent d’explorer les données dans la conversation.

**L’interactivité**

Un widget peut appeler un outil pour actualiser ses données sans demander à l’utilisateur de reformuler une requête dans le chat. Le talk montre aussi que certains outils peuvent être réservés à l’interface.

**L’exemple du talk**

Une enquête inspirée de Batman : filtrer des crimes, afficher leur localisation et relier des événements chronologiquement pour trouver des indices.

## Ce que j’en garde

Une application dans le chat combine une API utilisable par l’agent et une interface manipulable par l’utilisateur.

*Sources : transcription de l’amphi E et programme fournis. Notes développées à partir de la transcription, pas un guide d’implémentation à jour ; les API évoluent.*
