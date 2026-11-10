# La lucidité comme architecture

**Bastien Jaillot et Joël Gomez Caballe · Vendredi, 14 h 20 · Amphi B**

## Ouverture et fil du talk

Regarder honnêtement les problèmes d’un système et les capacités de l’équipe avant d’ajouter de nouvelles solutions techniques.

## Notes de déroulé et détails

Le retour montre comment une équipe peut s’habituer à l’inconfort. Lorsque les problèmes durent, chaque symptôme reçoit une explication et finit par sembler inévitable. Reprendre l’architecture commence alors par admettre que ce fonctionnement n’est pas une fatalité.

Le cas détaillé sépare la consultation de l’action qui apporte de la valeur. Une grande partie des lectures mobilise les mêmes ressources que l’authentification et la commande. Réduire cette pression par un cache approprié ne rend pas toute la stack parfaite, mais libère de la capacité et du temps pour travailler autrement qu’en urgence.

La représentation des couches fait aussi voir les coûts cumulés : copies, transformations et attentes s’empilent entre le frontend et les systèmes distants. Chaque composant a peut-être eu une justification locale ; leur combinaison mérite encore d’être regardée comme un tout.

Les changements de livraison et de test impliquent des peurs légitimes. Une pratique plus simple n’est utile que si l’équipe peut comprendre comment elle vérifie et maîtrise son fonctionnement. Simplifier demande donc du dialogue autant que du code.

L’arrivée des agents prolonge ce raisonnement. Écrire plus vite ne décide ni de la pertinence d’une demande ni de son coût futur. Le rôle professionnel consiste à examiner ce qu’il faut faire, ce qu’il faut refuser et ce que l’on accepte de porter après la livraison.

**Le problème décrit**

Les difficultés d’un projet peuvent finir par paraître normales : lenteur, complexité, instabilité ou procédures pénibles. Trouver des excuses à chaque symptôme empêche de remettre en question l’ensemble.

**L’exemple du talk**

Un système de commande comporte de nombreuses couches et traitements. L’ajout ciblé d’un cache HTTP réduit la pression sur l’application et permet de sortir d’une partie de l’urgence. Cela ne résout pas toute l’architecture, mais rend possible la suite du travail.

**La démarche à retenir**

- Identifier les opérations réellement importantes pour l’activité.
- Comprendre les trajets des requêtes et les traitements qui s’accumulent.
- Choisir une intervention adaptée au problème observé.
- Simplifier progressivement au lieu de changer tout simultanément.
- Faire évoluer les pratiques de livraison et de test avec l’équipe.

**Ce que les agents changent**

Produire du code devient plus rapide, mais cela ne détermine pas ce qu’il faut construire. Le talk insiste sur la vision technique, les arbitrages et la responsabilité humaine face aux résultats.

## Ce que j’en garde

La valeur d’une décision d’architecture vient aussi de la capacité à reconnaître le vrai problème et à choisir ce qu’il ne faut pas ajouter.

*Sources : transcription du vendredi en amphi B et programme fournis. Synthèse des arguments et du cas présenté ; pas une recommandation universelle de cache ou d’architecture.*
