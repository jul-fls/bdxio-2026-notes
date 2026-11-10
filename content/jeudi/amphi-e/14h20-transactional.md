# @Transactional : facile à utiliser, difficile à maîtriser

**Benoit Martin · Jeudi, 14 h 20 · Amphi E**

## Ouverture et fil du talk

Comprendre les paramètres de gestion des transactions dans Spring : propagation, isolation et rollback.

## Notes de déroulé et détails

Le virement sert à poser l’enjeu : deux opérations techniquement distinctes doivent respecter un même engagement métier. L’annotation donne un cadre transactionnel, mais ses paramètres deviennent importants lorsque les méthodes se décomposent en plusieurs services.

Le premier axe est la propagation. Une méthode peut rejoindre le travail en cours, demander une transaction indépendante, refuser une transaction existante ou exiger d’en trouver une. Ce choix change notamment ce qui sera annulé lorsqu’une partie échoue.

Il faut bien séparer la transaction indépendante du point de sauvegarde. Dans le premier cas, une validation peut être autonome ; dans le second, une réussite locale reste inscrite dans la transaction globale. La formulation orale du talk peut laisser confondre ces cas : les notes retiennent la distinction conceptuelle.

Le second axe concerne les accès concurrents. Avec l’hôtel et les réservations, le conférencier fait varier les observations entre deux lectures. Un même code peut rencontrer un autre état si une transaction extérieure est passée entre-temps. Les garanties dépendent du niveau choisi et du moteur.

Enfin, le rollback dépend aussi de ce que le framework considère comme un échec. Les paramètres d’exceptions et de durée complètent le dispositif, mais ne remplacent pas la compréhension des appels et du comportement de la base. Une transaction plus longue n’est pas automatiquement plus sûre.

**La base**

Une transaction regroupe des opérations qui doivent être validées ou annulées ensemble. Le talk utilise notamment un virement bancaire : débit et crédit doivent rester cohérents.

**La propagation**

Elle décrit comment une méthode participe au contexte transactionnel existant.

| Mode | Comportement à retenir |
|---|---|
| `REQUIRED` | Réutiliser la transaction existante ou en créer une |
| `REQUIRES_NEW` | Suspendre l’existante et ouvrir une transaction indépendante |
| `NESTED` | Utiliser des points de sauvegarde dans une transaction, si pris en charge |
| `SUPPORTS` | Utiliser l’existante ; sinon exécuter sans transaction |
| `MANDATORY` | Exiger une transaction existante |
| `NOT_SUPPORTED` | Exécuter sans transaction en suspendant l’existante |
| `NEVER` | Refuser l’exécution si une transaction existe |

`NESTED` n’est pas équivalent à `REQUIRES_NEW` : une validation locale dans la transaction imbriquée reste dépendante de la validation globale.

**L’isolation**

Elle encadre ce qu’une transaction peut observer pendant que d’autres travaillent. Les anomalies discutées incluent :
- **Dirty read** : lire une modification non validée.
- **Lecture non répétable** : relire une donnée et obtenir une valeur différente.
- **Lecture fantôme** : une requête sur un ensemble retrouve des lignes différentes.
- **Lost update** : une mise à jour en écrase une autre.

**Les autres paramètres**

- `rollbackFor` : préciser des exceptions devant entraîner une annulation.
- `noRollbackFor` : préciser les exceptions exclues du rollback.
- `timeout` : fixer une limite de durée, selon la prise en charge du gestionnaire transactionnel.

## Ce que j’en garde

L’annotation seule ne définit pas toute la cohérence : il faut comprendre les frontières des transactions et les accès concurrents.

*Sources : transcription de l’amphi E et programme fournis. Certaines formulations orales sont rectifiées pour éviter de confondre transaction indépendante et points de sauvegarde. Carnet de notes, pas guide exhaustif de configuration.*
