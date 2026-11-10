# Adieu le « Ça marche pas sur ma machine », welcome EasyLab !

**Matthieu Vincent · Jeudi, 16 h 30 · Amphi E**

## Ouverture et fil du talk

Préparer des environnements de travaux pratiques accessibles par navigateur pour éviter que les participants passent l’atelier à installer des outils.

## Notes de déroulé et détails

L’anecdote initiale est un atelier de trois heures dont une grande partie disparaît dans les installations. Les difficultés viennent autant des droits et proxies d’entreprise que des versions d’outils ou de la saturation du réseau lorsque tout le monde télécharge en même temps.

EasyLab déplace la préparation vers une infrastructure contrôlée par le formateur. Le participant utilise un navigateur et retrouve un espace prévu pour l’exercice. Fermer son onglet ne doit pas lui faire perdre immédiatement ce qu’il a fait pendant le lab.

La partie d’administration permet de préparer les connexions aux environnements, le DNS et les configurations. Le même outil peut piloter un cluster distant depuis le poste du formateur ou être lui-même hébergé. Cette distinction aide à choisir ce qui reste critique pendant l’atelier.

La démonstration montre aussi le cycle de vie : ouverture du lab, accès aux workspaces, aide à un participant, notifications et destruction programmée. Nettoyer à la fin est aussi important que réussir à démarrer, pour ne pas retrouver une facture de ressources oubliées.

Le gain de simplicité côté participant correspond donc à un travail supplémentaire en amont. L’outil automatise une partie de cette préparation, mais ne fait pas disparaître la capacité du cluster, le besoin de réseau ni la maintenance des images d’exercice.

**Le problème de départ**

Des postes, versions de JDK et systèmes différents, des restrictions d’entreprise, des téléchargements lourds et des droits insuffisants peuvent consommer une grande partie du temps d’un workshop.

**La solution présentée**

EasyLab crée des espaces de travail pour les participants sur une infrastructure distante. L’environnement est préparé à partir d’une configuration et accessible sur le web.

**Les briques techniques citées**

- Go et HTMX pour l’application.
- Pulumi pour piloter l’infrastructure avec du code.
- Kubernetes pour les environnements de lab.
- Des dépôts Git ou configurations de dev containers pour préparer les espaces de travail.

**Les fonctions montrées**

- Conserver l’espace de travail pendant le lab malgré la fermeture du navigateur.
- Préparer plusieurs environnements et promouvoir une configuration de staging vers un autre environnement.
- Permettre au formateur d’accéder à un espace pour aider.
- Envoyer des notifications aux participants.
- Définir une durée de vie et automatiser le nettoyage.
- Mettre en pause des espaces inactifs pour limiter l’utilisation de ressources.

**Le compromis**

On réduit les écarts entre les postes locaux, mais on déplace la préparation et l’exploitation vers une plateforme : cluster, accès, DNS et ressources doivent être configurés.

## Ce que j’en garde

Préparer l’environnement en amont permet de consacrer davantage de temps au contenu de l’atelier.

*Sources : transcription de l’amphi E et programme fournis. Fonctions décrites telles que présentées dans le talk, sans vérification de leur disponibilité actuelle.*
