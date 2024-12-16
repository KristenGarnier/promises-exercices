// Créez une promise qui, lorsqu'elle reçoit le mot "Artichaud" en paramètre, se rejette avec l'erreur "Le mot Artichaud est interdit". Gérez l'erreur avec `.catch()`.
// pour le reste des mots ils devraient se résoudre en renvoyant le mot.

export default function createChainedPromise(mot) {
	// votre code ici
	return new Promise((resolve, reject) => {
		if (mot.toLocaleLowerCase() === 'artichaud')
			return reject(new Error('Le mot Artichaud est interdit'));
		resolve(mot);
	}).catch((err) => {
		return err.message;
	});
}
