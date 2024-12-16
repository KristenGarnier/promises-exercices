// Utilisez fetch pour récupérer des données depuis cette api : https://jsonplaceholder.typicode.com/posts/1
// Elle renvoie du JSON (vous pouvez voir dans votre navigateur le json qui est envoyé)
// Trouvez comment requêter cette API avec fetch : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Parmis les données que vous récupérez, retournez le titre de l'api
export default function fetchAPI() {
	// votre code ici
	return fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then((res) => res.json())
		.then((json) => json.title);
}
