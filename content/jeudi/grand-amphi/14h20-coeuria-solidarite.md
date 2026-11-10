# CœurIA : et si on refaisait ChatGPT au service de la SolidarIT ?

**Julien Briault · Jeudi, 14 h 20 · Grand Amphi**

## Ouverture et fil du talk

Construire une plateforme d’IA adaptée aux besoins des Restos du Cœur, en combinant infrastructure, outils existants et gouvernance.

## Notes de déroulé et détails

Le projet se comprend d’abord à travers l’organisation qu’il sert. Une plateforme d’IA doit être utilisable par des bénévoles avec des habitudes et niveaux techniques différents, tout en restant exploitable par les équipes qui la maintiennent.

La gateway rassemble plusieurs responsabilités qui seraient autrement dispersées : déterminer quel utilisateur accède à quel modèle, suivre les consommations, gérer des quotas et choisir un chemin d’exécution. Le retour d’expérience évoque aussi la continuité de service en cas d’indisponibilité d’un composant.

Le choix d’un RAG répond à une question simple : pourquoi réentraîner un modèle pour des informations qu’il peut consulter ? Les documents changent, et maintenir une recherche sur des sources disponibles peut être plus adapté qu’intégrer leur contenu aux poids. Cela ne dispense pas de travailler l’ingestion et la qualité des documents.

OCR et transcription vocale élargissent les informations exploitables. Les serveurs MCP connectent d’autres outils, notamment ceux de l’infrastructure. L’interface de chat est choisie aussi pour sa familiarité, pas seulement pour ses possibilités techniques.

La fin revient à l’utilité et à la gouvernance : une infrastructure qui fonctionne ne prouve pas que l’outil aide effectivement. Les règles sur les données sensibles et la décision humaine doivent se traduire dans les usages, les droits et le suivi. Le choix d’une stack open source ne fournit pas ces garanties automatiquement.

**Le problème**

Mettre un modèle à disposition ne suffit pas : il faut des données exploitables, des accès maîtrisés, une interface accessible et des usages utiles aux équipes et bénévoles.

**Les briques présentées**

- **Inférence** : exécuter les modèles sur une infrastructure GPU.
- **Gateway** : centraliser le routage, les droits, les quotas et l’observation des consommations.
- **RAG** : chercher les informations dans les documents plutôt que tout réapprendre au modèle.
- **OCR** : extraire le contenu de documents numérisés.
- **Reconnaissance vocale** : transcrire des réunions.
- **MCP** : connecter les outils internes à l’assistant.
- **Interface de chat** : offrir un usage familier aux utilisateurs.

Le talk cite notamment vLLM, Qdrant et LibreChat dans l’architecture retenue à ce moment-là.

**Deux choix à comprendre**

**Soigner les données** : leur ingestion et leur qualité conditionnent l’utilité du système.

**Adapter le traitement au besoin** : certaines demandes peuvent obtenir une réponse par un accès direct à une information, sans déclencher inutilement un traitement lourd.

**La gouvernance**

Le retour d’expérience insiste sur la protection des informations sensibles, les contrôles d’accès et le maintien de la décision humaine. Ces objectifs ne sont pas garantis par le seul choix d’un modèle ou d’un hébergement.

## Ce que j’en garde

Une IA utile en organisation est un système de données, d’outils, d’exploitation et de règles d’usage, au-delà du modèle lui-même.

*Sources : transcription du Grand Amphi et programme fournis. Architecture et choix restitués comme ceux du projet présenté, sans vérification de leur état actuel.*
