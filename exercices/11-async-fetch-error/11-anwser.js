// Utilisez fetch pour récupérer des données depuis cette api : https://jsonplaceholder.typicode.com/posts/1
// Elle va vous envoyer des codes 400 et 500 (qui sont des erreurs), attention vous devez gérez les erreurs pour vous assurer que
// dans les deux cas elle renvoie "Oh non une erreur !"
// Attention, vous devez cette fois ci utilisez async/await
// vous pouvez trouver des ressources ici sur l'utilisation d'async await https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
// En video : https://www.youtube.com/watch?v=vn3tm0quoqE
export default async function fetchAPI() {
	// votre code ici
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		const json = await res.json();
		return json;
	} catch (err) {
		return 'Oh non une erreur !';
	}
}
