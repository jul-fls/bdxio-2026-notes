# Comment s’échapper de Spotify

**Nicolas Focqueu · Jeudi, 15 h 15 · Amphi E**

## Ouverture et fil du talk

Remplacer son usage personnel d’un abonnement de streaming par une bibliothèque de fichiers musicaux et un serveur auto-hébergé.

## Notes de déroulé et détails

Nicolas part d’une différence entre accès et collection. Un abonnement lui a permis de découvrir et d’écouter beaucoup de musique, mais il ne lui a pas constitué un dossier de fichiers qu’il puisse continuer à exploiter indépendamment du service.

Il compare son usage réel au catalogue théoriquement disponible. Il revient souvent aux mêmes morceaux, ce qui rend une bibliothèque achetée plus pertinente pour lui que pour quelqu’un qui découvre continuellement de nouveaux albums. Le raisonnement économique est personnel : il faut compter aussi le matériel, l’électricité et le temps d’administration.

La démonstration suit toute la chaîne. Un album est acheté et téléchargé, ajouté au répertoire, puis indexé par Navidrome. Les clients compatibles retrouvent ensuite la même bibliothèque. Les playlists et utilisateurs appartiennent à cette installation plutôt qu’à une plateforme externe.

L’accès distant repose sur une configuration réseau montrée avec Tailscale. Le serveur est chez lui, mais la lecture depuis la conférence dépend toujours de la connexion aux deux extrémités. Les problèmes de réseau pendant la démonstration rendent ce coût d’exploitation très visible.

Posséder les fichiers ne signifie pas posséder les droits d’auteur ni pouvoir les redistribuer librement. L’autonomie décrite porte sur l’hébergement et l’accès à sa collection dans le cadre des droits correspondants, pas sur la disparition des règles d’usage.

**Le point de départ**

Après plusieurs années d’abonnement, le conférencier constate qu’il écoute surtout les mêmes titres et souhaite conserver sa propre collection. Son calcul économique dépend de ses habitudes et ne constitue pas une comparaison universelle.

**Les briques de la démonstration**

| Élément | Rôle |
|---|---|
| Fichiers musicaux | Constituer la bibliothèque, notamment par achat de téléchargements |
| Navidrome | Indexer et servir la collection musicale |
| Applications compatibles | Lire les morceaux depuis différents appareils |
| Tailscale | Accéder à l’environnement hébergé à distance dans le montage présenté |

**Le fonctionnement**

1. Ajouter un album dans le dossier musical du serveur.
2. Lancer ou attendre son indexation par Navidrome.
3. Retrouver l’album dans l’interface web et les clients compatibles.
4. Écouter à distance et gérer des utilisateurs et playlists.

**Ce que la démonstration montre**

On peut retrouver une expérience de lecture en streaming sur sa propre collection. On ne récupère pas pour autant le catalogue complet ni tous les services d’une grande plateforme.

**Les contraintes**

Le serveur, le stockage, l’électricité et la maintenance restent à gérer. La connexion réseau et le débit affectent l’écoute à distance ; la démonstration rencontre elle-même des difficultés réseau.

## Ce que j’en garde

Auto-héberger sa musique permet de maîtriser sa bibliothèque, en prenant en charge l’infrastructure qui la rend accessible.

*Sources : transcription de l’amphi E et programme fournis. Synthèse du retour d’expérience ; prix et affirmations commerciales non repris comme données actuelles.*
