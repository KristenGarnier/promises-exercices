// Créez 4 promises qui se résolvent en 100, 200, 300 et 400
// la 100 ms doit renvoyer Je
// la 200 ms doit renvoyer Suis
// la 300 ms doit renvoyer Une
// la 400 ms doit renvoyer Promise
// Utilisez Promise.all() pour les combiner et combinez les résultat dans une chaine de caractère et renvoyez là

export default function createMultipromises() {
	// votre code ici
	return Promise.all([
		new Promise((resolve) => setTimeout(() => resolve('Je'), 100)),
		new Promise((resolve) => setTimeout(() => resolve('Suis'), 200)),
		new Promise((resolve) => setTimeout(() => resolve('Une'), 300)),
		new Promise((resolve) => setTimeout(() => resolve('Promise'), 400)),
	]).then((res) => res.join(' '));
}