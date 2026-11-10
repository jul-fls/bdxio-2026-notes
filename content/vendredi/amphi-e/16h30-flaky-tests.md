# Flaky, ces drôles de bugs qui nous empoisonnent le dev

**Antoine Céol · Vendredi, 16 h 30 · Amphi E**

## Ouverture et fil du talk

Comprendre les tests qui réussissent et échouent de façon intermittente, sans changement pertinent du code testé.

## Notes de déroulé et détails

Antoine remet les tests intermittents dans la boucle de feedback. Si le même changement est parfois accepté et parfois rejeté, l’équipe ne sait plus si le rouge indique une régression ou une mauvaise condition d’exécution. Relancer peut débloquer la livraison, mais ne rétablit pas cette confiance.

La première piste est le temps : attendre une condition vérifiable plutôt qu’espérer qu’un délai fixe suffise. Les outils de navigateur proposent déjà des mécanismes adaptés ; il faut comprendre ce qu’ils attendent et ce qu’ils réessaient réellement.

L’ordre des données fournit un piège indépendant du réseau. Sans ordre garanti par le contrat, exiger une séquence précise teste une hypothèse supplémentaire. Comparer sans ordre demande quand même de contrôler les doublons et la présence d’éléments inattendus, pas seulement vérifier quelques membres.

L’isolation est l’autre thème fort. Un test peut laisser des données qu’un autre découvre, ou deux exécutions parallèles peuvent partager une ressource. Maîtriser l’état initial et les identifiants évite de dépendre involontairement de la suite complète.

Les différences local-CI élargissent encore l’enquête : mémoire, écran, horloge, locale ou services disponibles. Le talk recommande de connaître les outils et de travailler avec d’autres personnes pour comprendre les causes. L’IA peut générer des tests, mais leur nombre ne démontre ni leur pertinence ni leur stabilité.

**Pourquoi c’est gênant**

Le signal des tests devient moins fiable : un échec peut être ignoré et un problème réel se perdre parmi les relances habituelles.

**Les causes illustrées**

- Synchronisation et attente d’un état dans les tests de navigateur.
- Ordre des résultats supposé alors que le contrat ne le garantit pas.
- Données partagées ou laissées par un autre test.
- Exécution parallèle et concurrence.
- Différences de ressources ou de configuration entre local et CI.
- Dates, fuseaux et paramètres de l’environnement.

**L’exemple des données**

Le test attend `[1, 2, 3]`, mais reçoit les mêmes éléments dans un autre ordre. Il faut décider si l’ordre fait partie du comportement attendu : le garantir dans ce cas, ou comparer sans ordre tout en vérifiant exactement le contenu dans l’autre cas.

**Les pistes de correction**

- Isoler les tests et maîtriser leurs données de départ.
- Attendre une condition observable plutôt qu’un délai arbitraire.
- Vérifier les hypothèses sur le réseau, l’horloge et l’environnement.
- Utiliser les outils de diagnostic du framework.
- Examiner les relances comme un signal à traiter, pas comme une réparation de la cause.

## Ce que j’en garde

Un test intermittent révèle souvent une dépendance implicite ; retrouver cette dépendance restaure la valeur du signal de test.

*Sources : transcription du vendredi en amphi E et programme fournis. Synthèse des exemples ; pas de garantie de correction par une stratégie unique.*
