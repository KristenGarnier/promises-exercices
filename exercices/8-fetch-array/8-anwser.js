// Utilisez fetch pour récupérer des données depuis cette api : https://jsonplaceholder.typicode.com/posts
// Elle renvoie du JSON (vous pouvez voir dans votre navigateur le json qui est envoyé)
// Vous allez recevoir un tableau, calculez le nombre d'éléments présents, ainsi que la somme de la longueur de tous les elements body
// Vous devrez renvoyer le résultat sous cette forme là (les nombres dans l'exemple ne correspondent pas aux valeurs renvoyées par l'api) :
// {
//   totalBodyLength: 0,
//   totalElements: 0
//	}
export default function fetchAPI() {
	// votre code ici
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((json) => {
			return {
				totalBodyLength: json.reduce((acc, cur) => acc + cur.body.length, 0),
				totalElements: json.length,
			};
		});
}
