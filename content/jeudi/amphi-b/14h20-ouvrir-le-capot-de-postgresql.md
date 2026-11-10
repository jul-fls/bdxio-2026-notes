# Et si on ouvrait le capot de PostgreSQL ?

**Coenen Benjamin · Jeudi, 14 h 20 · Amphi B**

## Ouverture et fil du talk

Comprendre les mécanismes internes de PostgreSQL pour mieux interpréter son comportement : stockage, mémoire, concurrence, nettoyage et reprise après un crash.

## Notes de déroulé et détails

Le conférencier présente le sujet comme un apprentissage des mécanismes internes, pas comme une formation complète à l’administration. Le but est de comprendre pourquoi la base consomme de la place, pourquoi certaines opérations attendent et comment elle peut reprendre après une panne.

Les pages relient la représentation logique aux fichiers. Une ligne SQL n’est pas simplement un objet flottant en mémoire : elle est stockée dans une organisation physique, passe par des buffers et peut exister en plusieurs versions. Cette organisation explique une partie du coût des modifications.

Dans le MVCC, la visibilité dépend des transactions. Une version ancienne ne peut pas être jetée dès qu’une nouvelle apparaît : une transaction encore en cours peut en avoir besoin. Le nettoyage est donc lié à ce qui reste potentiellement visible, pas seulement à l’âge apparent des données.

VACUUM a ainsi un rôle structurel. Le gel des versions anciennes répond aussi au problème des identifiants de transaction dont l’espace est limité. Le talk relie ces mécanismes plutôt que de présenter le nettoyage comme un simple bouton pour réduire les fichiers.

La fin revient à la durabilité. Les pages ne sont pas toutes immédiatement écrites à leur emplacement définitif ; le journal permet de reconstruire les changements nécessaires. Le checkpoint fournit un repère pour cette reprise. C’est l’articulation entre mémoire, pages et journal qui rend l’ensemble compréhensible.

**La vue d’ensemble**

Une requête passe par plusieurs traitements avant son exécution. PostgreSQL combine des processus, de la mémoire partagée et des fichiers sur disque pour travailler sur les données.

**Le stockage**

- Les données sont organisées en **pages**, unités de stockage contenant notamment des versions de lignes.
- Le moteur utilise la mémoire pour limiter les accès directs au disque.
- Les index fournissent des chemins d’accès aux données ; le talk ne développe pas tous leurs détails.

**Le MVCC : plusieurs versions d’une ligne**

**MVCC** signifie contrôle de concurrence multiversion. Une modification peut créer une nouvelle version d’une ligne plutôt que remplacer immédiatement l’ancienne.

Les transactions déterminent quelles versions leur sont visibles. Cela facilite la coexistence des lectures et des écritures, sans supprimer tous les besoins de verrouillage.

### Exemple simplifié
Une transaction consulte une ligne pendant qu’une autre la modifie. Selon son instantané et son niveau d’isolation, elle peut continuer à voir la version antérieure.

**Pourquoi VACUUM est nécessaire**

Les anciennes versions occupent de la place. Quand elles ne sont plus nécessaires aux transactions, VACUUM permet de récupérer de l’espace réutilisable. Il intervient aussi dans la gestion du vieillissement des identifiants de transaction, avec le mécanisme de gel des anciennes versions.

**Le WAL et la reprise après incident**

Le **Write-Ahead Log** journalise les modifications avant l’écriture des pages de données correspondantes sur disque. Ce n’est pas une simple liste de requêtes SQL.

Les **checkpoints** établissent des points de référence pour la reprise. Après un crash, PostgreSQL peut rejouer les enregistrements du journal nécessaires pour restaurer un état cohérent.

## Ce que j’en garde

Versions de lignes, nettoyage, mémoire et journalisation fonctionnent ensemble : ils expliquent une grande partie du comportement de PostgreSQL.

*Sources : transcription de l’amphi B et programme fournis. Notes développées à partir de la transcription ; formulations orales simplifiées ou corrigées pour éviter les contresens.*
