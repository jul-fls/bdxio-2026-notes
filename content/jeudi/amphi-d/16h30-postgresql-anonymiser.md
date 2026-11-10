# Respectons (enfin) l’article 25 du RGPD avec PostgreSQL Anonymiser

**Nicolas Guilhem · Jeudi, 16 h 30 · Amphi D**

## Ouverture et fil du talk

Utiliser des données pour des tests ou des analyses tout en réduisant l’exposition des informations personnelles.

## Notes de déroulé et détails

Le fil du talk part du besoin d’utiliser des données sans exposer inutilement les personnes. Le premier travail est de préciser l’usage : un environnement de test, un analyste et un export n’ont pas forcément besoin des mêmes informations ni de la même précision.

L’exemple d’une personne travaillant dans l’informatique dans une petite commune montre pourquoi retirer le nom n’est pas une preuve d’anonymat. Une combinaison d’attributs peut suffire à isoler quelqu’un. Les sources extérieures ajoutent d’autres possibilités de rapprochement ; les relations entre lignes peuvent également révéler des informations.

L’extension propose une approche déclarative : les règles accompagnent le modèle de données. Cela rend la politique plus visible qu’une série de transformations manuelles oubliées dans un script d’export. Le talk montre aussi la généralisation : remplacer une valeur précise par une tranche adaptée à l’analyse.

Le choix entre statique, dynamique et export déplace le coût. La transformation statique se paie avant l’exploitation et modifie les valeurs de la base concernée. Le masquage dynamique se paie à la consultation et dépend du rôle utilisé. L’export supporte le coût lors de sa production, puis circule avec les valeurs déjà transformées.

Point à noter : la protection ne vient pas du seul nom de l’outil. Il faut contrôler les accès, les champs restants, la cohérence et le risque de réidentification. Un remplacement déterministe utile aux tests peut encore relever de la pseudonymisation.

**La distinction centrale du talk**

- **Pseudonymisation** : remplacer certains identifiants en conservant une possibilité de rattachement aux personnes.
- **Anonymisation** : rendre les données non attribuables aux personnes concernées.

Supprimer les noms ne suffit pas : métier rare, petite commune et tranche d’âge peuvent permettre de retrouver quelqu’un.

**Trois risques présentés**

| Risque | Signification |
|---|---|
| Singularisation | Isoler une personne dans un ensemble |
| Recoupement | Relier les données à d’autres sources |
| Inférence | Déduire une information sensible |

**Le fonctionnement de l’outil**

Les règles de masquage sont déclarées dans PostgreSQL, au plus près du schéma des données.

**Trois stratégies**

- **Statique** : transformer les données stockées ; coût lors de la transformation. Cette opération détruit les valeurs d’origine sur la base concernée.
- **Dynamique** : masquer les valeurs à la consultation selon les règles et le rôle utilisé ; coût à chaque requête.
- **Export transformé** : produire un export masqué ou anonymisé pour un autre environnement ; coût lors de l’export.

**L’exemple à comprendre**

Pour une analyse statistique, une tranche d’âge ou un département peuvent suffire. Donner la date de naissance et l’adresse exacte expose davantage d’informations que nécessaire.

## Ce que j’en garde

Adapter les données au besoin et examiner les possibilités de réidentification : appliquer un masque ne prouve pas, à lui seul, que les données sont anonymes.

*Source : transcription et programme fournis. Notes développées à partir de la transcription du talk, sans citations littérales.*
