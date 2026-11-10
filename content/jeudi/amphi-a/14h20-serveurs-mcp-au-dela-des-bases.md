# Serveurs MCP au-delà des bases : bonnes pratiques, choix de conception et leurs conséquences

**Horacio Gonzalez (LostInBrittany) · Jeudi, 14 h 20 · Amphi A**

## Ouverture et fil du talk

Concevoir des outils MCP utilisables par un agent sans supposer qu’il possède toutes les conventions et connaissances implicites d’un développeur humain.

## Notes de déroulé et détails

Le talk s’appuie sur des opérations qui semblent évidentes à un humain habitué à l’API. Changer une variable peut demander un redémarrage ; obtenir une réponse positive peut seulement confirmer que l’action a été programmée. Si cette connaissance n’apparaît pas dans le contrat, l’agent doit la deviner.

La difficulté est moins la connexion MCP que le design des capacités exposées. Une documentation OpenAPI complète sur le plan syntaxique peut encore laisser des trous sur les dépendances, les effets secondaires et l’achèvement réel des opérations.

La démarche proposée examine chaque fonctionnalité : conserver l’appel, enrichir son contrat ou construire une autre opération. Elle ne demande pas de réécrire toute l’API avant de commencer. Il faut en revanche repérer les points dont une mauvaise utilisation aurait un impact important.

L’exemple du diagnostic illustre l’outil orienté intention. Au lieu d’exposer seulement des engrenages élémentaires, fournir une opération qui rassemble les informations dans le bon ordre. Le code prend en charge ce qui est déjà connu et déterministe ; le modèle intervient sur l’interprétation.

L’amélioration des modèles ne règle pas toute la question. Une erreur plus rare peut rester inacceptable si sa conséquence est catastrophique. Les indications de danger sont utiles, mais les garde-fous doivent être réels dans le système qui exécute l’action.

**Le problème central**

Transformer automatiquement tous les endpoints d’une API en outils ne suffit pas. Il peut manquer l’ordre des opérations, leurs conséquences ou la façon de constater leur achèvement.

**Quatre questions par fonctionnalité**

| Question | Exemple |
|---|---|
| Dépendances | Faut-il redémarrer après avoir changé une configuration ? |
| Réversibilité | Peut-on annuler l’opération ? |
| Rayon d’impact | Quelles autres ressources seront affectées ? |
| Achèvement | Un succès signifie-t-il « terminé » ou seulement « accepté » ? |

**Trois décisions de conception**

- **Envelopper l’existant** lorsque le contrat est clair et les conséquences maîtrisées.
- **Adapter la fonctionnalité** pour expliciter les informations et comportements manquants.
- **Reconcevoir l’outil exposé** lorsque l’opération brute n’est pas adaptée à un agent.

**L’exemple du talk**

Diagnostiquer une application nécessite de récupérer des identifiants, des déploiements, des logs et des métriques dans un certain ordre. Un outil « diagnostiquer l’application » peut réaliser cette orchestration connue et rendre une synthèse, plutôt que demander au modèle de redécouvrir la procédure.

**Le point de vigilance**

Les annotations indiquant qu’une opération est destructive ou en lecture seule sont des indications ; elles ne remplacent pas les contrôles effectifs de l’application.

Un modèle plus performant peut faire moins d’erreurs, mais cela ne supprime pas la nécessité de limiter les conséquences possibles d’une erreur.

## Ce que j’en garde

Concevoir des outils autour des intentions et rendre explicites les effets des opérations aide davantage qu’exposer mécaniquement toute une API.

*Sources : transcription de l’amphi A et programme fournis. Synthèse de conception ; exemples simplifiés, sans guide d’API à jour.*
