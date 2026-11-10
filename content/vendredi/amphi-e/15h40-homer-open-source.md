# Homer — D’une idée d’outil interne à un projet open source

**Cyril Beslay et Pascal Fong Kye · Vendredi, 15 h 40 · Amphi E**

## Ouverture et fil du talk

Transformer un outil utilisé dans l’entreprise en projet utilisable et maintenable par d’autres organisations.

## Notes de déroulé et détails

Cyril et Pascal retracent plusieurs années plutôt qu’un simple jour de publication. L’outil a commencé par un besoin interne autour de Slack et GitLab. Le fait qu’il soit utile dans une équipe ne garantit pas encore que quelqu’un d’extérieur puisse l’installer ou comprendre ses conventions.

Le travail de publication touche donc aux hypothèses cachées : ce qui est configuré chez ManoMano, ce que les utilisateurs savent déjà, les droits nécessaires et les comportements attendus. Les explications qui passent oralement entre collègues doivent devenir une documentation accessible.

La sécurité fait l’objet d’une passe dédiée avant l’ouverture. Il faut éviter de publier secrets, données confidentielles ou dépendances problématiques. L’autorisation de l’entreprise et le cadre de contribution font également partie du travail, au-delà des fonctionnalités.

La divergence entre version interne et version publique constitue un autre sujet central. Pendant un temps, les deux avancent différemment, ce qui crée un coût de rapprochement. Le retour à une version commune permet de limiter cette séparation, avec la configuration interne à part.

Le récit montre ainsi que l’open source n’est pas juste une visibilité GitHub. Il demande de construire une relation avec de futurs utilisateurs et contributeurs, de rendre les problèmes compréhensibles et de choisir comment maintenir le projet. Cette activité continue après l’annonce de disponibilité.

**Le projet**

Homer est présenté comme un composant TypeScript entre Slack et GitLab. Le talk retrace son développement chez ManoMano, sa publication et la convergence entre la version interne et la version publique.

**Pourquoi publier ?**

L’équipe estime que l’outil répond à un besoin partagé par d’autres entreprises utilisant les mêmes services. Le rendre public implique de sortir des conventions et connaissances propres à son équipe.

**Le travail nécessaire**

- Obtenir l’accord de l’entreprise.
- Relire le code et vérifier l’absence de secrets et données confidentielles.
- Expliquer l’installation, la configuration et le fonctionnement.
- Décrire comment contribuer et définir un cadre de collaboration.
- Remplacer les suppositions internes par une configuration explicite.

**Le point de maintenance**

Une branche interne et une branche publique peuvent diverger. Le retour d’expérience décrit le travail pour les réunir et utiliser en interne la même version que celle publiée, avec une configuration propre à l’organisation.

## Ce que j’en garde

Publier le code n’est qu’une étape : rendre un outil réellement réutilisable demande documentation, configuration et organisation de la maintenance.

*Sources : transcription du vendredi en amphi E et programme fournis. Synthèse du parcours présenté ; disponibilité actuelle du projet non vérifiée.*
