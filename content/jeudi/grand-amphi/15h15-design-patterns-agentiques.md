# Les design patterns agentiques dont vous êtes le héros

**Guillaume Laforge · Jeudi, 15 h 15 · Grand Amphi**

## Ouverture et fil du talk

Choisir comment organiser des appels de modèles, des outils et des agents selon le travail à accomplir.

## Notes de déroulé et détails

Le fil conducteur est le choix de la structure avant le choix d’une bibliothèque. Guillaume montre qu’un enchaînement connu à l’avance peut rester écrit dans le programme, même si chaque étape appelle un modèle puissant ou un agent spécialisé.

La recherche sur les cannelés en est l’illustration détaillée. Un premier appel propose des sous-thèmes ; l’utilisateur peut les ajuster. Une recherche produit ensuite un rapport avec des références, puis un autre traitement en tire un résumé et une illustration. L’ordre des opérations n’a pas besoin d’être réinventé à chaque exécution.

Le contexte est un autre axe. Fournir systématiquement toute l’information peut coûter cher et distraire le modèle. Recherche documentaire et compétences chargées au besoin permettent de mettre la bonne information au moment où elle devient utile.

Le parallélisme sert aux tâches indépendantes. Il peut aussi produire plusieurs propositions qu’une étape d’évaluation compare ensuite. Cela ne transforme pas le consensus ou le verdict d’un modèle en vérité : il faut toujours définir ce qui est jugé et contrôler les résultats.

Les exemples de médias montrent enfin l’intérêt du routage : la sortie souhaitée peut mobiliser différentes étapes, sans imposer le même chemin à toutes les demandes. Le nombre d’agents n’est pas un indicateur de qualité. Une structure plus simple et explicite peut être plus facile à comprendre, tester et exploiter.

**La distinction centrale**

Quand l’ordre des étapes est connu, un workflow programmé peut suffire. Un agent devient pertinent lorsqu’il doit choisir dynamiquement ses actions à partir de ce qu’il observe.

**Les structures illustrées**

- **Séquence** : une étape produit l’entrée de la suivante.
- **Parallélisation** : lancer des travaux indépendants puis réunir les résultats.
- **Routage** : orienter une demande vers le traitement adapté.
- **Évaluation** : examiner ou comparer des propositions avant de retenir un résultat.
- **Contexte à la demande** : fournir les informations et compétences utiles au moment où elles deviennent nécessaires.

**L’exemple des cannelés**

1. Déterminer les sous-thèmes d’une recherche.
2. Faire la recherche documentaire et produire un rapport sourcé.
3. Résumer ce rapport.
4. Générer une illustration.

Dans cet exemple, l’ordre est fixé par le programme ; il n’est pas nécessaire de laisser un agent décider de toute l’orchestration.

**Les autres exemples**

Le talk montre notamment l’analyse d’une photo suivie de travaux parallèles, ainsi que la génération de plusieurs résumés soumis à évaluation.

**Les compromis**

Multiplier les appels peut améliorer l’exploration ou la vérification, mais augmente les coûts, la latence et la complexité. Les étapes connues peuvent rester dans du code, avec un contexte adapté pour les parties confiées aux modèles.

## Ce que j’en garde

Choisir une structure d’exécution selon le problème évite de confier à un agent des décisions que l’on sait déjà programmer.

*Sources : transcription du Grand Amphi et programme fournis. Regroupement pédagogique des exemples du talk ; ce n’est pas une reproduction de son plan exact.*
