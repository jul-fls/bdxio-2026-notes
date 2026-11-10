# Passkeys : adieu les mots de passe, bonjour la sécurité sans friction !

**Sébastien Buchoux · Jeudi, 11 h 20 · Grand Amphi**

## Ouverture et fil du talk

Comprendre le passage du mot de passe à une authentification par clé publique, et les questions de récupération de compte qui l’accompagnent.

## Notes de déroulé et détails

La progression va du secret partagé vers la preuve cryptographique. Avec un mot de passe, le service vérifie une information que l’utilisateur connaît. Avec une passkey, le service vérifie une signature produite avec une clé privée, sans demander de transmettre cette clé.

Les deux cérémonies sont montrées séparément. À l’enregistrement, le navigateur échange avec l’authentificateur et le serveur conserve les informations nécessaires aux vérifications futures. À la connexion, un nouveau challenge est signé et la réponse est vérifiée avec l’origine, le contexte du site et la clé publique enregistrée.

Le rôle du navigateur ne se réduit pas à afficher un formulaire. Les appels WebAuthn font intervenir un authentificateur local ou un autre appareil selon la configuration. La vérification de l’utilisateur et la possession de la clé s’inscrivent dans ce parcours.

L’ajout d’une passkey ne supprime pas automatiquement les anciens accès. Si le compte reste accessible par mot de passe ou par un parcours de récupération faible, ces chemins continuent à faire partie de sa sécurité réelle. Le talk distingue donc la coexistence et un fonctionnement sans mot de passe.

La récupération est l’autre moitié du sujet. Une clé liée à un appareil et une clé synchronisée ne se perdent pas de la même manière. Prévoir plusieurs moyens indépendants évite de concentrer tous les accès sur une seule panne ou perte, sans supposer qu’un type d’appareil résout à lui seul ce risque.

**Le vocabulaire**

- **Passkey** : identifiant d’authentification reposant sur une paire de clés cryptographiques.
- **Authentificateur** : composant qui utilise la clé privée pour répondre aux demandes d’authentification.
- **WebAuthn** : interface utilisée par les applications web pour ces échanges.
- **Challenge** : donnée à signer pour prouver la possession de la clé dans un échange donné.

**Les deux étapes montrées**

1. **Enregistrement** : créer un identifiant et stocker côté serveur notamment sa clé publique.
2. **Authentification** : le serveur émet un challenge ; l’authentificateur signe ; le serveur vérifie la réponse et les informations de contexte.

La clé privée n’est pas envoyée au serveur du site pour réaliser la connexion.

**Pourquoi cela change la sécurité**

La connexion est liée au site concerné et évite de saisir un secret réutilisable sur une fausse page. Le talk montre aussi que conserver un accès alternatif par mot de passe laisse subsister les risques associés à ce chemin d’accès.

**Le point pratique : perdre son appareil**

Une passkey peut être liée à un appareil ou synchronisée selon le système utilisé. Les possibilités de récupération dépendent de cette organisation et des procédures du service. Le talk insiste sur l’intérêt de plusieurs moyens d’accès indépendants.

## Ce que j’en garde

Le mécanisme cryptographique évite l’échange d’un mot de passe, mais la conception de la récupération et des accès alternatifs reste essentielle.

*Sources : transcription du Grand Amphi et programme fournis. Notes développées à partir de la transcription du talk ; pas un guide exhaustif de configuration ni une description actualisée de tous les fournisseurs.*
