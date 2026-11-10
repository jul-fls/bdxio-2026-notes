# Au secours ! Mes images pourrissent mes perfs

**Antoine Caron et Mathieu Mure · Vendredi, 14 h 20 · Amphi D**

## Ouverture et fil du talk

Comprendre le coût des images sur une page web et adapter leur livraison à l’usage réel.

## Notes de déroulé et détails

La conférence part du poids des images, mais ne s’arrête pas à la compression. Une image peut ralentir parce qu’elle est trop grande, découverte trop tard, chargée sans priorité ou inutilement téléchargée alors que l’utilisateur ne la verra pas.

La distinction entre image source et image livrée permet d’organiser le problème. Une même source peut être transformée en variantes ; le navigateur doit recevoir une version cohérente avec l’affichage. Réduire une image avec du CSS n’économise pas à lui seul les octets déjà transférés.

Le lazy loading aide pour les contenus lointains dans la page. À l’inverse, appliquer la même règle à l’image principale retarde ce que l’utilisateur attend immédiatement. Il faut donc réfléchir à la position et au rôle de chaque ressource, pas activer une option uniforme sur toutes les images.

La démonstration décrit une petite chaîne de médias. Le CMS sert à gérer les sources, le stockage les conserve, imgproxy fabrique les variantes et le cache évite de refaire inutilement les transformations. Les différentes dimensions, qualités et formats sont passés dans le parcours d’URL présenté.

L’architecture peut être hébergée de plusieurs façons. L’important est d’identifier où se paient stockage, calcul de transformation et transfert. Le montage local illustre le mécanisme ; l’exploitation réelle ajoute les accès, la disponibilité et l’organisation du cache.

**Les leviers**

- **Dimensions** : envoyer une image adaptée à sa taille d’affichage.
- **Format et compression** : réduire le poids selon le contenu et le niveau de qualité nécessaire.
- **Images responsives** : fournir des variantes selon l’appareil et l’espace disponible.
- **Chargement différé** : attendre pour les images non immédiatement nécessaires.
- **Cache** : éviter de refaire les mêmes transformations ou transferts inutilement.

**Le piège du lazy loading**

Il aide pour les images plus bas dans la page, mais peut retarder une image importante visible dès l’arrivée. Il faut distinguer l’image prioritaire des contenus secondaires.

**La chaîne illustrée**

```text
Bibliothèque de médias → stockage → transformation
                      → cache → navigateur
```

La démonstration combine notamment un CMS, un stockage d’images, imgproxy pour les transformations et Varnish pour le cache. Différentes tailles et qualités sont générées à partir d’une source.

**Pourquoi une chaîne plutôt qu’un fichier unique ?**

Les mêmes sources peuvent servir à plusieurs écrans et appareils. Automatiser les variantes évite de livrer systématiquement une grande image à tous les utilisateurs.

## Ce que j’en garde

Une image performante est livrée au bon format, à la bonne taille et au bon moment ; le poids seul ne raconte pas toute l’expérience.

*Sources : transcription du vendredi en amphi D et programme fournis. Synthèse des mécanismes et de la démonstration, sans garantie chiffrée de gain.*
