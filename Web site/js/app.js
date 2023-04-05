// Génère un nombre aléatoire entre 1 et 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Fixe le nombre de tentatives à 8
var remainingAttempts = 8;

// Fonction pour vérifier la supposition de l'utilisateur
function checkGuess() {
    // Obtenir l'estimation de l'utilisateur
    var guess = parseInt(document.getElementById("guess").value);

    // Vérifie si la supposition est valide
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("message").innerHTML = "Veuillez entrer un nombre valide entre 1 et 100";
        return;
    }

    // Décrémente le nombre de tentatives
    remainingAttempts--;

    // Vérifie si la supposition est correcte
    if (guess === randomNumber) {
        document.getElementById("message").innerHTML = "Toutes nos félicitations! Vous avez deviné le nombre !";
        document.getElementById("remaining").innerHTML = "";
    }
    // Vérifie si la supposition est trop élevée
    else if (guess > randomNumber) {
        document.getElementById("message").innerHTML = "Votre supposition est trop élevée. Essayer à nouveau.";
        document.getElementById("Restant").innerHTML = remainingAttempts + " attempts remaining";
    }
    // L'estimation doit être trop faible
    else {
        document.getElementById("message").innerHTML = "Votre estimation est trop faible. Essayer à nouveau.";
        document.getElementById("Restant").innerHTML = remainingAttempts + " attempts remaining";
    }

    // Vérifie si l'utilisateur a utilisé toutes ses tentatives
    if (remainingAttempts === 0) {
        document.getElementById("message").innerHTML = "Désolé, vous avez utilisé toutes vos tentatives. Le nombre était " + randomNumber;
        document.getElementById("Restant").innerHTML = "";
    }
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    remainingAttempts = 8;
    document.getElementById("message").innerHTML = "";
    document.getElementById("guess").value = "";
}

// Fonction pour basculer en mode sombre
function toggleDarkMode() {
    document.getElementById("screen").classList.remove("light");
    document.getElementById("screen").classList.add("dark");
    

}

// Fonction pour basculer en mode lumière

function toggleLightMode() {
    document.getElementById("screen").classList.remove("dark");
    document.getElementById("screen").classList.add("light");

}
