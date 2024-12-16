
# Promises Exercises

Ce repository contient une série d’exercices visant à se familiariser avec l’utilisation des Promises en JavaScript, ainsi que l’utilisation de `async/await`. Les exercices couvrent une large gamme de cas d’utilisation, allant des Promises les plus simples (création, résolution, rejet) jusqu’aux scénarios plus avancés tels que :

- Chaînage de `.then()` et `.catch()`
- Usage de `Promise.all` et `Promise.race`
- Conversion de fonctions avec callback en Promises
- Gestion d’erreurs et de timeout
- Appels d’API externes avec `fetch`
- Contrôle de la concurrence des tâches asynchrones

L’objectif est d’aider les débutants comme les développeurs intermédiaires à mieux comprendre et maîtriser la programmation asynchrone en JavaScript.

## Structure des Exercices

Les exercices sont répartis en différents fichiers et/ou dossiers (selon la structure adoptée) et sont progressifs :

1. **Promesses de base** : Création, résolution, rejet, chaînage simple.
2. **Gestion d’erreurs** : Utilisation de `.catch()`, gestion des statuts de requêtes fetch.
3. **Promise.all / Promise.race** : Coordination de tâches asynchrones, parallélisation.
4. **Conversion de callbacks en Promises** : Migrer du style callback à un style Promise.
5. **Async/Await de base** : Réécrire du code basé sur les Promises avec `async/await`.
6. **Appels API externes** : Récupérer et traiter des données depuis des endpoints publics (JSONPlaceholder).
7. **Cas plus complexes** : Chaînage dépendant, gestion de timeout, transformation asynchrone de données et limitation de la concurrence.

Chaque exercice est accompagné d’un énoncé clair expliquant :

- L’objectif pédagogique de l’exercice.
- Les indications ou points clés à considérer.
- Les ressources ou APIs utilisées (si nécessaire).

## Comment Travailler sur les Exercices

1. **Cloner le repository** :  
   ```bash
   git clone https://github.com/KristenGarnier/promises-exercices.git
   cd promises-exercices
   ```
   
2. **Explorer les exercices** :  
   Parcourez les dossiers/fichiers d’exercices, commencez par les plus simples. Chaque exercice peut être présenté dans un fichier séparé (par exemple `exercise1.js`, `exercise2.js`, etc.) ou dans des dossiers distincts.
   
3. **Exécuter un exercice** :  
   La plupart des exercices étant simples et viennent avec des tests pour valider, vous pouvez les exécuter de deux manière :  
   ```bash
   // Lance tous les tests
   npm test 

   // Lance seulement un fichier de test
   npm test -- {n° de l exercice}.test.js
   ```
   
   Pour les exercices faisant appel à `fetch`, vous pourrez soit utiliser une version de Node.js compatible avec `fetch`, soit installer une dépendance (par exemple `node-fetch`), ou lancer votre code dans un environnement tel que le navigateur ou un outil en ligne.

4. **Modifier et Tester** :  
   Editez le code pour résoudre l’exercice. Testez différentes approches, introduisez des erreurs volontairement pour comprendre le comportement des Promises et de `async/await`.
   
5. **Comparaison et Auto-Évaluation** :  
   Comparez vos solutions avec les énoncés ou exemples donnés. N’hésitez pas à expérimenter d’autres patterns et à pousser plus loin les concepts.

## Ressources Utiles

- [MDN Web Docs - Using Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises)
- [MDN Web Docs - async/await](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Node.js documentation](https://nodejs.org/en/docs/)
- [fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

## Contribuer

Si vous souhaitez proposer d’autres exercices, ajouter des commentaires, corriger des erreurs ou améliorer le contenu existant :

- Forkez le repo
- Créez votre branche de fonctionnalités (`git checkout -b feature/improvement`)
- Faites un commit de vos modifications (`git commit -am 'Ajout d’un nouvel exercice sur les Promises'`)
- Pushez sur la branche (`git push origin feature/amélioration`)
- Créez une Pull Request

---

Amusez-vous bien avec ces exercices et n’hésitez pas à expérimenter !
