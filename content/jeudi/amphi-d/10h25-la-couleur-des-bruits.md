# La couleur des bruits

**Sébastien Ferrer · Jeudi, 10 h 25 · Amphi D**

## Ouverture et fil du talk

Comment fabriquer des bruits sur ordinateur et comprendre leurs différences sonores.

## Notes de déroulé et détails

Le point de départ est personnel : Sébastien cherche un fond sonore qui lui convienne, puis veut comprendre comment le fabriquer. La vidéo qu’il écoute sous l’étiquette « bruit blanc » ne correspond pas exactement à cette définition. C’est cette différence entre le nom courant et la nature du signal qui lance l’exploration.

Pour passer au numérique, on ne stocke pas le son lui-même, mais des valeurs d’amplitude relevées à intervalles réguliers. La démonstration ajoute des points jusqu’à rendre la forme du signal reconnaissable. Il faut distinguer la fréquence du son et la fréquence d’échantillonnage : la première décrit les oscillations, la seconde le rythme des mesures.

La suite change de point de vue : regarder les fréquences plutôt que seulement la courbe dans le temps. La transformée de Fourier permet de décomposer le signal ; une transformation inverse permet de le reconstruire. Le filtrage devient alors une façon de modifier l’importance de certaines fréquences.

Autre démonstration : calculer chaque nouvelle valeur en conservant une part de la précédente. Dans l’exemple de lissage, 80 % de la valeur précédente sont combinés à 20 % de la valeur courante. Les variations rapides sont atténuées, le son devient plus étouffé. Ce filtre illustre le traitement, sans suffire à définir à lui seul tous les bruits colorés.

La parenthèse sur les casques distingue enfin deux idées : masquer un son par un fond sonore et atténuer un bruit extérieur par opposition de phase. Ce sont des mécanismes différents.

**Les bases**

- **Amplitude** : liée à l’intensité du son.
- **Fréquence (Hz)** : nombre d’oscillations par seconde. Basse = grave ; élevée = aigu.
- **Échantillonnage** : représenter le son par des mesures successives de son amplitude. À 44 100 Hz, on conserve 44 100 mesures par seconde.

**Les couleurs**

La couleur décrit la répartition de la puissance entre les fréquences.

| Bruit | Répartition | Impression |
|---|---|---|
| Blanc | Même puissance par bande de fréquence de même largeur | Souffle aigu, parasites de télévision |
| Rose | Même puissance par octave ; moins d’aigus que le blanc | Souffle plus doux |
| Brun / rouge | Davantage de graves | Grondement lointain |

**Comment les produire**

Des valeurs aléatoires permettent de générer un bruit blanc. Le filtrage modifie la répartition des fréquences. L’analyse de Fourier permet de visualiser les fréquences présentes dans le signal.

**L’exemple du talk**

Le conférencier raconte comment la recherche d’un bruit pour masquer ses acouphènes l’a amené à explorer le traitement du signal. Il s’agit de son expérience personnelle.

## Ce que j’en garde

Changer la structure fréquentielle d’un bruit change ce que l’on entend.

*Source : transcription et programme fournis. Notes développées à partir de la transcription, sans citations littérales.*
