# Et si écrire du SQL redevenait cool ?

**Sébastien Ferrer · Jeudi, 13 h 55 · Amphi B**

## Ouverture et fil du talk

Retrouver le contrôle du SQL tout en évitant d’écrire à la main le code répétitif qui exécute les requêtes et récupère leurs résultats. L’outil présenté est **sqlc**, avec des exemples en Go.

## Notes de déroulé et détails

Sébastien part du plaisir d’écrire du SQL, puis du code répétitif nécessaire pour l’utiliser correctement depuis un programme. L’ORM automatise une partie de ce travail, mais impose sa représentation et son langage d’interrogation. sqlc est présenté comme une autre manière de réduire la répétition, en conservant le SQL au centre.

La génération commence avec le schéma. Les structures Go correspondent alors aux colonnes décrites. Lorsqu’on ajoute une requête, l’outil peut déterminer les paramètres et la forme du résultat. Plusieurs paramètres sont regroupés dans une structure ; un résultat partiel peut produire un type dédié plutôt qu’imposer de charger un objet complet.

Dans la démonstration, même les sélections avec étoile sont développées en colonnes explicites dans le code généré. L’idée est de garder une écriture confortable à la source et un résultat plus stable dans le code exécuté.

Le retour d’équipe ajoute un intérêt organisationnel. Les migrations peuvent être maintenues dans un dépôt spécialisé et utilisées comme entrée de génération. Cela réduit le travail manuel de synchronisation entre les représentations, à condition de régénérer et vérifier lorsque le schéma évolue.

La limite des filtres combinables n’est pas accessoire : si l’application construit énormément de variantes de recherche, il faut évaluer l’effort supplémentaire. L’approche proposée complète le paysage des ORM, elle ne les remplace pas automatiquement pour tous les usages.

**Le problème de départ**

Un ORM facilite la manipulation des données sous forme d’objets, les opérations courantes et les relations. Mais il ajoute une abstraction : le SQL généré peut devenir plus difficile à maîtriser ou à déboguer.

**L’approche SQL-first**

Le SQL devient la source de vérité. On écrit le schéma et les requêtes ; sqlc génère les structures et les fonctions correspondantes.

```text
Schéma ou migrations + requêtes SQL
                ↓
          sqlc generate
                ↓
     Structures et fonctions Go typées
```

**Les notions importantes**

- **ORM** : outil faisant le lien entre objets du programme et données relationnelles.
- **Génération de code** : produire automatiquement le code répétitif à partir du SQL.
- **Inférence des types** : déduire les types des paramètres et des résultats depuis le schéma et les requêtes.
- **Requête paramétrée** : séparer les valeurs fournies du texte de la requête, au lieu de concaténer les saisies dans le SQL.

**L’exemple du talk**

Une bibliothèque avec des auteurs et des livres. Des requêtes d’insertion et de lecture deviennent des fonctions prêtes à appeler, avec leurs paramètres et résultats typés.

**Les avantages présentés**

- Garder la main sur les requêtes exécutées.
- Réduire le code répétitif de conversion des résultats.
- Aligner le code généré sur le schéma décrit par les migrations.
- Faciliter le partage du schéma avec une équipe spécialisée dans la base de données.

**La limite importante**

Les requêtes très dynamiques, avec de nombreuses combinaisons de filtres, sont moins naturelles à gérer dans cette approche. Le choix dépend des besoins du projet.

sqlc est un outil de génération en ligne de commande ; il ne remplace pas la base de données ni le pilote utilisé pour s’y connecter.

## Ce que j’en garde

On peut écrire le SQL soi-même et automatiser le code qui l’entoure.

*Sources : transcription de l’amphi B et programme fournis. Notes développées à partir de la transcription ; exemples simplifiés.*
