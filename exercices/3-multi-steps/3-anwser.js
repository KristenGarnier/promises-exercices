// Créez une Promise qui se résout avec le nombre 5, puis utilisez `.then()` pour multiplier ce nombre par 2, puis par 3. Affichez le résultat final.

export default function createChainedPromise() {
	// votre code ici
	return new Promise((resolve) => {
		resolve(5);
	})
		.then((number) => number * 2)
		.then((number) => number * 3);
}
