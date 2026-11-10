# La beauté et la joie de coder avec une seule variable

**Olivier Azeau · Jeudi, 16 h 30 · Amphi A**

## Ouverture et fil du talk

Séparer les calculs de l’application de ses entrées-sorties grâce à un cœur fonctionnel et une petite couche impérative.

## Notes de déroulé et détails

Le choix de Snap! est pédagogique : les blocs permettent de voir l’organisation des opérations sans se perdre dans la syntaxe d’un langage. Le conférencier vient à cet outil après l’avoir utilisé pour l’Advent of Code et s’en sert ici pour rendre le découplage visible.

Le jeu de la vie fournit deux problèmes distincts. Calculer les cellules de la génération suivante peut se faire à partir des valeurs actuelles. Les afficher dans le navigateur est un effet sur le monde extérieur. Mélanger les deux rend le calcul plus difficile à vérifier isolément.

La démonstration va plus loin en représentant aussi les instructions d’entrée-sortie sous forme de données. Le programme décrit ce qu’il voudrait faire ; un interpréteur se charge de le réaliser. Pour tester, on peut dérouler ces instructions et vérifier leur séquence au lieu d’ouvrir réellement une base ou de modifier l’affichage.

Le changement de source des motifs montre l’intérêt du montage : ajouter une lecture dans le stockage du navigateur modifie l’interpréteur, sans réécrire toute la logique. Le nom de free monad arrive surtout comme piste pour approfondir ce style. Le conférencier ne prétend pas avoir donné toute sa théorie ni une architecture immédiatement adaptée à n’importe quelle grande application.

**Le principe : functional core, imperative shell**

- **Cœur fonctionnel** : transforme des valeurs sans modifier un état caché ni réaliser directement des entrées-sorties.
- **Couche impérative** : réalise les effets, comme afficher une cellule ou lire une base de données.
- **État explicite** : représente la situation de l’application à un instant donné.

**Le vocabulaire**

- **Fonction pure** : son résultat dépend de ses entrées, sans effet de bord observable.
- **Immutabilité** : produire de nouvelles valeurs plutôt que modifier les valeurs existantes.
- **Interpréteur** : exécuter des instructions décrites comme des données.
- **Continuation** : représenter la suite du calcul à effectuer.

**La démonstration**

Le conférencier utilise Snap!, un environnement visuel à blocs, pour construire une application autour du jeu de la vie. La logique calcule les cellules et les évolutions ; l’affichage et la récupération de motifs sont traités à la périphérie.

**Pourquoi décrire les effets ?**

Le cœur peut produire une description des opérations à réaliser. Un interpréteur les exécute. Cela permet de tester la logique et les instructions attendues sans déclencher tous les effets réels.

**L’exemple à retenir**

La récupération des cellules d’un motif est ajoutée via une base locale du navigateur. L’interpréteur évolue pour effectuer cette lecture, tandis que le programme principal reste identique dans la démonstration.

**Pourquoi « une seule variable » ?**

Le défi consiste à concentrer la mutation dans l’état global piloté par la couche impérative. Il ne signifie pas que le programme ne manipule qu’une seule valeur : le cœur calcule de nombreuses valeurs sans les modifier en place.

**Les limites**

Le talk simplifie volontairement le problème. Cette démonstration illustre un découplage ; elle ne constitue pas une obligation d’appliquer exactement la même architecture à toute application.

## Ce que j’en garde

Séparer ce qui calcule de ce qui agit rend les effets visibles et facilite les tests et l’évolution des entrées-sorties.

*Sources : transcription de l’amphi A et programme fournis. Notes développées à partir de la transcription ; termes techniques expliqués et démonstration reformulée.*
