# Hacker-Proof : renforcez la sécurité de votre code en 15 minutes

**Khadija Abdelouali · Vendredi, 13 h 55 · Grand Amphi**

## Ouverture et fil du talk

Reconnaître plusieurs familles d’attaques web et intégrer la sécurité dans la conception et le développement.

## Notes de déroulé et détails

La conférence parcourt plusieurs menaces courantes pour montrer comment des détails de développement deviennent des points d’entrée. Le titre annonce un format rapide ; il ne signifie pas qu’un audit complet peut être remplacé par quinze minutes de conseils.

L’injection SQL illustre la séparation entre données et instructions. Construire une requête par concaténation permet à une entrée de modifier sa structure ; les paramètres servent à garder la valeur dans son rôle. La validation métier reste utile, mais ne remplace pas ce mécanisme.

CSRF et XSS demandent de ne pas confondre deux scénarios. Dans le premier, une action peut être déclenchée en profitant du contexte d’authentification. Dans le second, du code actif est exécuté dans le contexte d’une page. Le choix des protections dépend donc de ce qui est effectivement attaqué.

La session et les permissions relient ces exemples. Une identité reconnue ne doit accéder qu’aux opérations prévues ; les réglages des cookies, les contrôles d’origine et les jetons adaptés s’inscrivent dans ce système. Aucun attribut isolé ne couvre toutes les attaques.

La partie cycle de développement présente les analyses de code, tests sur l’application et contrôles des composants comme complémentaires. L’intérêt du shift-left est de repérer plus tôt les défauts et les mauvaises hypothèses, tout en poursuivant le suivi après le déploiement.

**Les menaces abordées**

- **Déni de service** : submerger le service ou épuiser ses ressources.
- **Injection SQL** : des données non fiables modifient la structure d’une requête.
- **CSRF** : provoquer une action non voulue depuis le contexte authentifié d’un utilisateur.
- **XSS** : faire exécuter un contenu actif malveillant dans une page.

**Les protections discutées**

- Séparer les valeurs du code des requêtes avec des requêtes paramétrées.
- Valider les entrées et les règles métier côté serveur.
- Vérifier les autorisations et limiter les privilèges.
- Adapter les protections de session et contre les requêtes intersites.
- Encoder les sorties selon leur contexte et maîtriser les contenus actifs.

**La démarche**

Le **shift-left** consiste à traiter la sécurité tôt dans le cycle de développement. Le talk évoque l’analyse statique, les tests dynamiques, l’examen des dépendances et les tests de pénétration comme contrôles complémentaires.

**La nuance**

Les différentes protections ne sont pas interchangeables. Par exemple, un cookie HttpOnly limite son accès par JavaScript sans empêcher à lui seul toutes les conséquences d’une XSS.

## Ce que j’en garde

Chaque menace demande des contrôles adaptés ; combiner conception, validation et tests est plus solide qu’un correctif isolé.

*Sources : transcription du Grand Amphi jour 2, segments 468–509 environ, et programme fournis. Notes développées à partir de la transcription, sans prétendre rendre une application invulnérable ni constituer un audit de sécurité.*
