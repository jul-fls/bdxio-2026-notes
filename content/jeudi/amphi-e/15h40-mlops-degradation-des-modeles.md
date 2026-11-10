# MLOps — Comprendre et répondre à la dégradation des modèles de machine learning en production

**Simon Poulet · Jeudi, 15 h 40 · Amphi E**

## Ouverture et fil du talk

Un modèle peut bien fonctionner au déploiement puis perdre en pertinence parce que les données et les usages évoluent.

## Notes de déroulé et détails

Le modèle de recommandation de la plateforme fictive Streamflix sert de fil conducteur. Au moment de l’entraînement, il apprend des relations dans un catalogue et une population donnés. Lorsque de nouveaux contenus et de nouveaux comportements apparaissent, ces relations peuvent moins bien décrire la situation.

Il faut distinguer l’alerte et le diagnostic. Une différence statistique dans les entrées ne prouve pas automatiquement que les recommandations sont devenues mauvaises. Inversement, l’absence d’un changement grossier ne garantit pas que le lien entre données et cible soit resté identique.

L’observation directe suppose une vérité de référence disponible. Pour une prévision de ventes, on peut attendre le résultat réel puis comparer. Pour une recommandation, la notion de bonne réponse est moins immédiate : retours, clics et autres signaux doivent être interprétés dans le contexte.

La supervision peut comparer distributions d’entrée et de sortie, suivre des métriques et générer des alertes. Mais la décision d’agir demande encore de comprendre la cause : changement normal de population, donnée défectueuse, modèle devenu inadapté ou autre effet produit.

La correction n’est pas toujours un simple réentraînement automatique. Il faut choisir les données, tester la nouvelle version et organiser son introduction. Le talk insiste sur cette capacité de mise à jour dès le début du projet, plutôt que découvrir après la mise en production qu’aucune boucle de suivi n’existe.

**Le vocabulaire**

- **Entraînement** : apprendre à partir d’un jeu de données.
- **Inférence** : utiliser le modèle pour produire une prédiction.
- **Data drift** : changement de distribution des données d’entrée.
- **Concept drift** : changement de la relation entre les entrées et ce que l’on cherche à prédire.
- **Labels** : résultats de référence permettant de confronter prédictions et réalité.

**L’exemple du talk**

Une plateforme fictive de streaming recommande des contenus. Le catalogue se renouvelle et les comportements de visionnage changent : les relations apprises auparavant peuvent devenir moins pertinentes.

**Comment surveiller**

- Comparer les distributions de données, avec des tests statistiques adaptés. Le test de Kolmogorov-Smirnov est cité.
- Mesurer directement la performance lorsque les résultats de référence sont disponibles.
- Observer des signaux indirects : retours utilisateurs, distributions des prédictions et indicateurs métier.
- Utiliser des outils de suivi ; Evidently est montré comme exemple.

Un changement de distribution constitue un signal à examiner, pas une preuve automatique de baisse de qualité. Une métrique métier peut aussi varier pour d’autres raisons.

**Comment réagir**

1. Comprendre la cause du changement.
2. Réentraîner sur des données adaptées ou revoir le modèle.
3. Évaluer la nouvelle version.
4. Redéployer progressivement avec une stratégie de validation, par exemple A/B testing ou exécution en parallèle sans impact sur les réponses servies.

## Ce que j’en garde

Le monitoring et la possibilité de faire évoluer le modèle doivent être pensés dès le début du projet.

*Sources : transcription de l’amphi E et programme fournis. Notes développées à partir de la transcription ; définitions pédagogiques simplifiées.*
