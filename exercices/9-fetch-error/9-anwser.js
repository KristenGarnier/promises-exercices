// Utilisez fetch pour récupérer des données depuis cette api : https://jsonplaceholder.typicode.com/posts/1
// Elle va vous envoyer des codes 400 et 500 (qui sont des erreurs), attention vous devez gérez les erreurs pour vous assurer que
// dans les deux cas elle renvoie "Oh non une erreur !"
export default function fetchAPI() {
	// votre code ici
	return fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then((res) => res.json())
		.catch(() => 'Oh non une erreur !');
}
