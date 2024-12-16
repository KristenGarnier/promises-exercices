// Créez une Promise qui se rejette après 1 seconde avec l'erreur "Une erreur est survenue". Gérez l'erreur avec `.catch()`.

export default function createFailingPromise() {
  // votre code ici
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Une erreur est survenue"));
    }, 1000);
  });
}
