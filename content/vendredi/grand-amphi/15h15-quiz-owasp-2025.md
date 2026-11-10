# Qui veut gagner des CVE ? — Le Quiz OWASP 2025

**Florian Toulemont · Vendredi, 15 h 15 · Grand Amphi**

## Ouverture et fil du talk

Réviser des mécanismes de sécurité web par un quiz et des démonstrations de vulnérabilités.

## Notes de déroulé et détails

Le quiz alterne questions, réponses et démonstrations, avec la possibilité pour le public de choisir avant l’explication. L’objectif est de vérifier des mécanismes concrets plutôt que mémoriser uniquement les noms du classement OWASP.

La défense en profondeur ouvre le parcours. Chaque couche a ses responsabilités ; une protection peut limiter les conséquences d’une faille ailleurs, mais ne permet pas d’ignorer les autres couches. Répéter le même contrôle n’a pas nécessairement le même effet que diversifier les protections.

La SSRF fournit un exemple de déplacement de confiance : l’attaquant influence une requête émise par le serveur. Ce serveur peut joindre des ressources que le navigateur de l’attaquant ne voit pas. Le périmètre réseau et les destinations autorisées font donc partie de la conception.

Les questions suivantes reviennent sur le contrôle d’accès, les injections et les secrets. Le point commun est de ne pas considérer une information fournie ou une action demandée comme légitime avant les vérifications correspondant au contexte.

Les outils pédagogiques cités permettent de pratiquer sur une application volontairement vulnérable. Ils ne donnent pas le droit de tester un système tiers. Dans le carnet, les mécanismes comptent davantage que le numéro exact dans un Top 10 ou les réglages montrés sur une version particulière de l’environnement.

**Les notions à retenir**

- **Défense en profondeur** : protections indépendantes et complémentaires à plusieurs niveaux.
- **SSRF** : un serveur effectue une requête influencée par une entrée non fiable, pouvant atteindre des ressources qui ne devraient pas être accessibles.
- **Contrôle d’accès** : vérifier que l’identité a réellement le droit d’effectuer l’action sur la ressource.
- **Injection** : des données sont interprétées comme des instructions.
- **Hachage de mots de passe** : usage d’un mécanisme adapté, distinct d’un simple hash rapide générique.

**Le format pédagogique**

Les questions sont suivies d’explications et de démonstrations. Le talk cite des ressources OWASP pour apprendre et tester, dont des applications volontairement vulnérables et des guides pratiques.

**Les pièges mis en évidence**

- Un service interne ne devient pas sûr uniquement parce qu’il est peu exposé.
- Authentifier quelqu’un ne remplace pas l’autorisation sur chaque opération.
- Une erreur ne devrait pas révéler des informations techniques sensibles.
- Une seule protection ne couvre pas toutes les couches.

## Ce que j’en garde

Comprendre comment une faille franchit les frontières de confiance permet de placer les protections au bon endroit.

*Sources : transcription du Grand Amphi jour 2, segments 603–684 environ, et programme fournis. Synthèse thématique ; le classement exact du Top 10 et les paramètres techniques actuels ne sont pas reproduits comme références vérifiées.*
