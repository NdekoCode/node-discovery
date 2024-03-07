# Apprendre Node.js

A rechercher:

- Comment utiliser import/export dans node.js
- Activer le système de module dans node.js
- Traitement des formulaires avec nodejs
 pnpm install --save-dev @babel/core @babel/cli @babel/preset-ev
- Verifier le fichier app.js sur le serveur

## NPM

- `package-lock.json` : C'est un lock file, à chaque que le dossier node_modules ou le fichier package.jsn est modifier par `npm` ce fichier lockfile est mise à jour, ce fichier est tres important car il garantie que les memes dependances est installer sur votre machine y compris toutes les dependances transitives qui existent sur differentes machines dans le temps, car il n'y a rien de plus embetant que de travailler sur un projet et de pouvoir le compilter ou le faire fonctionner alors que votre collegue vous dit, `"mais ça marche sur ma machine ?"`, ce fichier lockfile permet d'eviter de vous retrouver dans cette situation, c'est donc l'une de raison pour lesquel vous devez l'ajouter à votre repos, mais il y aussi une autre raison est que, sans ce fichier vous ne pouvez pas executer la commande `npm ci`, cette commande est similaire à la commande `npm install` à la differente que `npm ci` est faite pour etre executer dans un environnement automatiser telle que dans un environnement d'integration continus, elle permet d'effectuer une installation propre de toute les dependances d'un projet en se basant sur le lockfile, cette commande `npm ci` echouera si elle detecte des incoherence entre votre lockfile et votre `package.json` et de cette manière vous pouvez vous assurez que l'application que vous envoyer en production est la meme que celle qui tourne sur votre machine.
Étant donné que les packages sont régulièrement mise à jour, l'objectif du `package.lock.json` est de bloquer toute mise à jour automatique dont vous ne voulez pas, cela veut dire aussi que vous devrez gerer les mises à jour des packages vous même.

### Mettre à jour un paquet

Pour vérifier si on a des mises à jour des paquets dans notre projet node.js il faut taper la commande `npm outdated`, il va vous lister dans un tableau les versions et la description significative de votre package.
Dans ce tableau on peut voir deux couleurs differentes:

- Le jaune veut dire qu'une nouvelle version existe, mais qu'elle ne fait pas partie des versions autoriser et spécifier dans votre fichier `package.json`.
- Le rouge veut dire que la nouvelle version proposer est autoriser par votre package.json et vous devriez pouvoir l'installer en toute securité et pour mettre à jour ces paquets en rouge il faut faire la commande `npm update`.

Qu'est-ce que ça veut dire quand on dit que la mise à jour fait partie d'un intervalle de version autoriser et comment est-ce que l'on peut vérifier cela ?
Les versions de package comportent trois numéros séparer par des points précédant d'une convention qu'on appelle la gestion sémantique des versions, comme `^3.3.1` ou `~3.3.1` ou `3.3.1`,... La gestion semantique des versions est un systeme qui permet de mitiger le risque lier à l'utilisation des bibliotheque externe et qui s'exprime à l'aide d'une notation à trois numero dont:

- La version majeure(le premier numéro) : Si ce numéro change vous pouvez vous attendre à des changements impactant votre code, cela veut dire qu'il y a du code dans votre application qu'il va falloir modifier.
- La version mineure(le deuxième numéro, le numéro du milieu): Un changement de ce numero signifie que des fonctionnalités ont été ajouter, votre code devrait encore fonctionner et en generale vous devrez accepter ce mise à jour sans problème
- La version patch (le troisième numéro): Si ce numero change cela veut dire que un changement a resoud un problème et il faut evidement accepter ce mise à jour

Il y a 3 caracteres speciaux qui expriment le type de mise à jour autoriser

- `^` : Veut dire que vous autoriser les mises à jours `"mineures"` et `"patch"` et que vous interdisez les mises à jour majeurs
- `~` :Veut dire que vos autorisez uniquement les mises à jour `patch`, cela est utile pour les package critique comme les compilateurs, les linters, ..., il faut aussi noter que quand on ajoute une nouvelle fonctionnalité on est forcer de changer le code.
- `Laisser le numero de la version`: càd comme `3.3.1` et cela veut dire que vous ne voulez pas changer de version
Si vous voulez toujours accepter les mises à jour existantes, vous pouvez le faire avec en mettant sur le numero majeure le caractère `*` c-à-d comme `*.3.1`
Et coté `npm` pour installer la dernière version disponible d'un paquet il faut faire `npm install paquetAinstaller@latest` et pour voir ce qui a changer dans une version majeure il faut voir le fichier `CHANGELOG` sur `Github` ou `GitLab` ou encore `GitBucket` pour voire ce que vous devez vite mettre à jour.

Soyez prudent ete tester toujours votre code après une mise à jour pour vous assurer que tout fonctionne toujours bien.
