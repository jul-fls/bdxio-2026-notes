# Rust pour le développement d’applications métier haut-niveau !

**Stéphane Trebel · Jeudi, 10 h 25 · Amphi A**

## Ouverture et fil du talk

Utiliser Rust pour des applications métier courantes : formulaires, utilisateurs, traitements et base de données. Le talk insiste sur la modélisation, au-delà des usages système du langage.

## Notes de déroulé et détails

Stéphane raconte d’abord ses tentatives peu concluantes avec Rust : le vocabulaire et les exemples orientés système lui semblaient éloignés des formulaires et données qu’il manipule au quotidien. Le déclic vient de la modélisation. Le langage devient intéressant lorsqu’il aide à exprimer ce que les données signifient.

Le newtype est présenté comme une boîte ayant une forme précise. Si l’email et l’adresse postale sont deux types différents, le compilateur empêche de remplacer l’un par l’autre par inadvertance. La validation se place à l’entrée de cette boîte ; ensuite, les fonctions métier peuvent demander ce type plutôt qu’une chaîne quelconque. Cela suppose de contrôler la construction et de ne pas exposer une manière de contourner la règle.

Option et Result prolongent la même logique. L’absence d’utilisateur et l’échec d’une opération deviennent des cas explicites à examiner. Le pattern matching rend visibles les branches attendues ; il évite de découvrir trop tard qu’une valeur manquait.

La suite ouvre vers les comportements partagés, les types génériques et les contraintes de propriété. Ce n’est pas seulement une promesse de performance : les contraintes imposées au programme servent aussi à clarifier ses responsabilités. L’apprentissage reste réel, mais le talk cherche à montrer le bénéfice métier derrière les messages parfois intimidants du compilateur.

**L’idée principale**

Faire porter une partie des règles métier par les types pour empêcher certaines confusions dès la compilation.

**Les notions importantes**

| Notion | Utilité |
|---|---|
| `struct` | Regrouper les données d’une entité |
| Newtype | Créer un type distinct autour d’une valeur, par exemple un email validé |
| `enum` | Représenter explicitement plusieurs cas possibles |
| `Option<T>` | Représenter la présence ou l’absence d’une valeur |
| `Result<T, E>` | Représenter une réussite ou une erreur |
| Pattern matching | Traiter les différentes variantes d’une valeur |
| Trait | Décrire un comportement partagé par différents types |

**L’exemple du talk**

Une adresse email et une adresse postale peuvent toutes deux être stockées en chaînes de caractères. Des types distincts évitent de les intervertir. Un constructeur contrôlé valide l’email avant de produire une valeur utilisable par le domaine.

**Pourquoi cela aide**

- Rendre les cas possibles visibles dans le code.
- Réduire les vérifications dispersées et les conventions implicites.
- Faire apparaître certaines erreurs avant l’exécution.
- Exprimer les échecs attendus avec des valeurs plutôt qu’un chemin d’exécution caché.

**Le compromis**

Le système de propriété et d’emprunt demande un apprentissage. Le borrow checker vérifie des contraintes sur l’utilisation des valeurs ; il peut dérouter lorsqu’on vient d’un langage avec ramasse-miettes.

La compilation ne prouve pas que toutes les règles métier sont correctes : validation des entrées et tests restent nécessaires.

## Ce que j’en garde

Des types bien choisis permettent d’exprimer le métier et de rendre certaines erreurs impossibles à représenter.

*Sources : transcription de l’amphi A et programme fournis. Notes développées à partir de la transcription ; exemples simplifiés.*
