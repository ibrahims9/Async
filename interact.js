// Tâche 01 : Itération avec Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
        console.log(value);
    }
}

// Tâche 02 : En attente d'un appel
async function waitCall() {
    try {
        // Simuler la récupération de données à partir d'une API avec un délai de 2 secondes
        await new Promise(resolve => setTimeout(resolve, 2000));
        const data = { message: "Données récupérées depuis l'API" };
        console.log(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
}

// Exemple d'utilisation
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

waitCall();
