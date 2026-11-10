# Claude Code, mode pro : sortir de l’autocomplétion en 5 patterns

**Pierre Andrieux · Jeudi, 13 h 55 · Amphi D**

## Ouverture et fil du talk

Passer de l’IA qui propose du code à un agent réalisant une tâche avec des consignes, des outils et des vérifications.

## Notes de déroulé et détails

Le talk est très court et se présente comme un passage de l’assistant d’autocomplétion vers un travail agentique supervisé. Pierre insiste sur deux mesures complémentaires : combien de temps l’agent travaille sans intervention, et quelle qualité il livre. Une longue exécution autonome n’a pas d’intérêt si le besoin n’est pas satisfait.

La configuration est pensée au niveau de l’équipe. Le fichier d’instructions représente une mémoire commune du projet ; il faut l’entretenir et éviter d’y accumuler des informations inutiles. Les méthodes détaillées ont plutôt leur place dans des compétences spécialisées, mobilisées selon les tâches.

Le contraste entre skills et hooks structure une partie de l’explication. Une méthode décrite au modèle guide son comportement, mais reste interprétée par un système probabiliste. Un script exécuté à une étape du workflow apporte un contrôle concret : il peut constater un échec et empêcher de considérer une étape comme terminée.

La vérification séparée vise à sortir du contexte de celui qui a construit la solution. L’idée est de faire challenger les décisions et le résultat, sans supposer qu’un autre agent devient automatiquement infaillible. Il faut lui donner des critères et examiner ce qu’il contrôle réellement.

Dernier élargissement : partager cet ensemble avec l’équipe et déclencher des traitements depuis la chaîne de développement. Les outils évoluent vite ; les méthodes proposées demandent donc une maintenance, pas une configuration écrite une fois pour toutes.

**Le vocabulaire**

- **Prompt** : demande avec objectif, contraintes et critères de réussite.
- **Contexte** : informations utiles pour accomplir la tâche.
- **Harness** : logiciel autour du modèle permettant d’utiliser des outils et d’enchaîner des actions.
- **Boucle agentique** : essayer, observer, corriger et recommencer.

**Les leviers présentés**

| Élément | Utilité |
|---|---|
| `CLAUDE.md` | Conserver les instructions communes du projet |
| Skills | Décrire des méthodes de travail réutilisables |
| Hooks | Exécuter des scripts à des étapes précises |
| Agent vérificateur | Examiner le résultat avec un contexte distinct |
| Plugins et CI | Partager la configuration et intégrer les agents au travail de l’équipe |

**La distinction importante**

Les instructions au modèle restent probabilistes. Un script apporte une vérification plus systématique. Le fichier d’instructions doit rester concis et évoluer avec le projet.

**Exemple d’application**

Définir le résultat attendu et les contraintes ; confier la réalisation à l’agent ; évaluer le résultat avec des contrôles et une revue distincte.

## Ce que j’en garde

Mesurer la qualité du résultat compte autant que l’autonomie de l’agent.

*Source : transcription et programme fournis. Ces notes restitue le talk ; les fonctionnalités citées peuvent évoluer.*
