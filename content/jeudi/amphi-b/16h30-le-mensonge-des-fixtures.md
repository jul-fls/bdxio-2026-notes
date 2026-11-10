# Le mensonge des fixtures : scénariser plutôt que générer

**Nicolas Guérinet · Jeudi, 16 h 30 · Amphi B**

## Ouverture et fil du talk

Créer des situations métier réalistes et reproductibles pour développer et tester une application, au lieu de simplement remplir ses tables avec des données.

## Notes de déroulé et détails

Le problème n’est pas de fabriquer beaucoup de lignes, mais d’obtenir un dossier dans un état précis avec les bons acteurs, fichiers et événements passés. Une demande avancée peut nécessiter de nombreuses actions préalables ; les rejouer manuellement ralentit autant les développeurs que les testeurs.

Le moteur de scénarios appelle les services métier. Cette décision est importante : créer une demande produit aussi les statuts, l’historique et les autres effets prévus par l’application. Insérer directement les objets aurait demandé de reproduire à la main toutes ces relations.

Les fichiers joints ne sont pas seulement des enregistrements. Le testeur doit pouvoir cliquer et télécharger un vrai fichier. Un document de contenu très simple suffit pour certains cas, à condition d’être au bon endroit et correctement associé à la demande.

L’horloge contrôlée permet de reconstruire une chronologie sans attendre plusieurs semaines. Le YAML garde les acteurs, les dates et les actions significatives ; les valeurs par défaut prennent en charge les détails qui ne changent pas le scénario.

Le système finit aussi par produire une documentation à destination des personnes qui n’utilisent pas le dépôt au quotidien. Les scénarios deviennent un support commun, versionné avec le projet. L’exécution détecte des régressions, mais ne remplace pas à elle seule les assertions nécessaires ni les vérifications de l’interface.

**Le problème de départ**

Sur une plateforme de demandes d’agrément, un dossier traverse de nombreux états, avec plusieurs intervenants, des pièces jointes et un historique. Pour travailler sur une étape avancée, rejouer tout le parcours à la main est trop long.

**Le changement d’approche**

Une fixture doit représenter une **situation métier**, avec son histoire. On utilise les services métier de l’application pour produire les données et leurs effets associés, plutôt que créer directement chaque objet en base.

**Les briques mises en place**

- Des utilisateurs aux rôles et périmètres cohérents : demandeur, instructeur, superviseur.
- Un registre de références pour retrouver les objets créés.
- Des pièces jointes de test réellement présentes et téléchargeables.
- Une horloge contrôlée pour rejouer les événements aux dates voulues.
- Des scénarios YAML décrivant les acteurs, les actions et leur chronologie.
- Des valeurs par défaut pour éviter de répéter les détails sans intérêt pour le cas testé.

**Exemple simplifié de scénario**

1. Un demandeur crée un dossier sur un territoire donné.
2. Il joint les documents et dépose la demande.
3. Un superviseur affecte un instructeur compétent sur ce territoire.
4. L’instructeur demande un complément.
5. Le demandeur ajoute une pièce ; l’instructeur poursuit le traitement.

Le scénario passe par les actions métier : les changements d’état et l’historique sont produits par l’application.

**Les bénéfices**

- Préparer rapidement les états nécessaires aux développeurs et testeurs.
- Rejouer les mêmes situations de façon prévisible.
- Détecter des régressions lors de l’exécution des scénarios.
- Versionner les scénarios dans le projet.
- Produire une documentation des cas accessible à l’équipe.

**Les limites**

Cette infrastructure est surtout utile pour un cycle de vie complexe. Elle peut être disproportionnée pour une application très simple. Elle ne remplace pas les tests unitaires ni les tests du parcours dans l’interface. L’adaptation aux microservices est évoquée comme piste, sans retour d’expérience direct dans ce talk.

## Ce que j’en garde

Une bonne fixture raconte comment une situation métier a été atteinte ; elle ne se limite pas à des lignes en base.

*Sources : transcription de l’amphi B et programme fournis. Notes développées à partir de la transcription ; scénario simplifié.*
