# node_modules : analyse d’une scène de crime

**Théo Gianella · Jeudi, 15 h 15 · Amphi A**

## Ouverture et fil du talk

Comprendre les attaques de chaîne d’approvisionnement logicielle : compromettre un paquet, un mainteneur ou une chaîne de publication pour atteindre ses utilisateurs.

## Notes de déroulé et détails

Le récit suit la chaîne de confiance plutôt que le seul paquet final. Un attaquant peut viser les personnes qui maintiennent une dépendance, leurs sessions, les secrets de publication ou un workflow de CI. Chaque étape donne un accès qui peut servir à franchir la suivante.

Le cache partagé fournit un cas particulièrement instructif. Une étape exécutant du contenu non fiable n’a pas forcément le droit de publier ; elle peut néanmoins contaminer un espace réutilisé par une étape plus privilégiée. Le problème est alors la frontière entre ces contextes, pas seulement la présence d’un secret dans le premier job.

La signature de la release ne corrige pas une fabrication déjà compromise. Elle atteste certains éléments de provenance, mais ne prouve pas que chaque entrée de la chaîne était saine. D’où l’importance de regarder aussi comment les dépendances et artefacts arrivent dans la publication.

La fin passe aux habitudes d’équipe : comprendre ce que change un lockfile, supprimer les dépendances inutiles et réduire les permissions. Le délai d’adoption d’une nouvelle version demande un compromis : laisser un peu de temps pour détecter une publication piégée, tout en conservant la capacité d’appliquer rapidement un correctif urgent. Les solutions présentées sont complémentaires ; aucune ne supprime seule le risque de supply chain.

**Pourquoi une petite dépendance compte**

Un paquet peut être utilisé indirectement dans de nombreux projets. Compromettre un maillon très diffusé permet d’atteindre bien plus de machines que le seul projet initial.

**Les mécanismes étudiés**

- **Ingénierie sociale et phishing** : tromper un mainteneur pour obtenir des accès.
- **Vol de secrets** : récupérer des jetons utilisables pour publier ou accéder à des ressources.
- **Compromission de CI** : faire exécuter du code dans un workflow disposant de privilèges.
- **Empoisonnement de cache** : injecter des dépendances piégées dans un cache réutilisé par un autre workflow.
- **Propagation** : utiliser les accès obtenus pour contaminer d’autres projets.

**L’exemple de cache**

Un workflow moins fiable écrit dans un cache partagé. Un workflow de publication récupère ensuite ce contenu et publie un paquet piégé. Une provenance ou une signature cohérente ne suffit alors pas à démontrer que le contenu est sain.

**Les pistes de protection discutées**

- Réduire les dépendances inutiles et les privilèges accordés aux workflows et jetons.
- Séparer les contextes non fiables des étapes de publication.
- Maîtriser les versions installées et automatiser le suivi des mises à jour.
- Examiner les modifications du lockfile : elles changent le code réellement installé.
- Utiliser une installation reproductible à partir du lockfile en CI.

**Le compromis sur les mises à jour**

Adopter immédiatement une version peut exposer à une publication malveillante récente. Attendre trop longtemps peut retarder un correctif important. Le talk insiste sur la nécessité de garder un mécanisme d’exception pour les correctifs urgents.

## Ce que j’en garde

Installer une dépendance revient à faire entrer du code et une chaîne de confiance dans son environnement ; le lockfile et la CI font partie du sujet.

*Sources : transcription de l’amphi A et programme fournis. Synthèse des mécanismes et pistes présentés ; les noms d’attaques mal transcrits, échéances et paramètres par défaut des outils ne sont pas repris comme des faits actuels vérifiés.*
