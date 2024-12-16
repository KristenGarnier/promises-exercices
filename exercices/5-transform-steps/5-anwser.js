// Créez une promise qui permet de renvoyer la longueur et le nombre de caracteres en majuscules à la suite du mot
// sous cette forme là : mot:longueur:caracteresEnMajuscule ex :"Test" : "Test:4:1"
// Attention si le mot a un espace il doit être supprimé
// Attention a bien découper votre promise en plusieurs etapes avec une seule responsabilité par étape

export default function createChainedPromise(mot) {
	// votre code ici
	return new Promise((resolve, reject) => {
		return resolve(mot.replaceAll(' ', ''));
	})
		.then((res) => {
			return `${res}:${res.length}`;
		})
		.then((res) => {
			const mot = res.split(':')[0];
			const majs = mot.match(/[A-Z]/g); // Nous utilisons ici une regex pour matcher tous les caractères majuscule (c'est l'équivalent d'un filtre)
			return `${res}:${majs ? majs.length : 0}`;

			// Solution alternative :
			/*
			const mot = res.split(':')[0];
			const majs = mot.split('').filter((char) => char === char.toUpperCase());
			return `${res}:${majs ? majs.length : 0}`;	
			*/
		});
}
