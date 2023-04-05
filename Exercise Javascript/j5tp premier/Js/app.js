function isAnneeBissextile(annee) {
    if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function afficherAnneeBissextile() {
    var annee = prompt("Saisissez une année : ");
    if (isAnneeBissextile(annee)) {
        document.getElementById("js1").innerHTML = annee + " est une année bissextile";
    } else {
        document.getElementById("js1").innerHTML = annee + " n'est pas une année bissextile";
    }
}

function changerContenu() {
    document.getElementById("zone-pub").innerHTML = "Nouveau contenu";
    setTimeout(function() {
        document.getElementById("zone-pub").innerHTML = "Zone pub";
    }, 3000);
}

function enregistrerClient() {
    var civ = document.getElementById("civ").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
}

    var client = {
        civilite: civ,
        nom: nom,
        prenom: prenom,
        email: email,
    }

    // Création de l'objet client
    let client = {
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    presentation: "function"
    }

    // Récupération de la zone "Zone pub"
var zonePub = document.getElementById("zone-pub");

// Récupération de la zone "JS 2"
var js2 = document.getElementById("js2");

// Ajout d'un événement "click" sur la zone "JS 2"
js2.addEventListener("click", function() {
  // Changement du contenu de la zone "Zone pub"
  zonePub.innerHTML = "Nouveau contenu de la Zone pub !";

  // Attente de 3 secondes
  setTimeout(function() {
    // Réinitialisation du contenu de la zone "Zone pub"
    zonePub.innerHTML = "Contenu initial de la Zone pub";
  }, 3000);
});


// Sélectionne la zone JS 1
const js1 = document.getElementById('js-1');

// Ajoute un événement au clic sur la zone JS 1
js1.addEventListener('click', () => {
  // Affiche une boîte de dialogue de saisie pour l'année
  const year = prompt("Saisissez une année :");

  // Teste si l'année est bissextile
  const isLeapYear = isAnneeBissextile(year);

  // Affiche le résultat dans la zone JS 1
  const js1Result = document.getElementById('js-1-result');
  js1Result.innerHTML = `${year} ${isLeapYear ? "est une année bissextile" : "n'est pas une année bissextile"}`;
});

// Fonction qui teste si une année est bissextile
function isAnneeBissextile(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}



      