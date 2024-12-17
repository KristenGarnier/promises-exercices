// Créez une Promise qui se résouds après 1 seconde
// elle devrait se rédoudre avec le message "Bonjour !"
// Apprennez en plus sur les promises ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Format vidéo courte: https://www.youtube.com/watch?v=RvYYCGs45L4
// Format video long: https://www.youtube.com/watch?v=DHvZLI7Db8E

export default function createFailingPromise() {
	// votre code ici
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('Bonjour !');
		}, 1000);
	});
}
