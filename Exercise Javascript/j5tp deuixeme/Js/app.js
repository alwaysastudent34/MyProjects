// prémier //
function isAnneeBissextile(annee) {
    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  document.getElementById("JS 1").addEventListener("click", function() {
    var annee = prompt("Saisissez une année :");
    if (isAnneeBissextile(annee)) {
      document.getElementById("JS 1").innerHTML = annee + " est une année bissextile";
    } else {
      document.getElementById("JS 1").innerHTML = annee + " n'est pas une année bissextile";
    }
  });
  
  // deuixieme //
  // Récupération de la zone pub et de son contenu initial
const zonePub = document.getElementById("zone-pub");
const contenuInitial = zonePub.innerHTML;

// Fonction pour changer le contenu de la zone pub
function changerContenu() {
  // Changement du contenu de la zone pub
  zonePub.innerHTML = "Nouveau contenu de la zone pub !";

  // Réinitialisation du contenu de la zone pub après 3 secondes
  setTimeout(function() {
    zonePub.innerHTML = contenuInitial;
  }, 3000);
}

// Ajout d'un événement au clic sur la zone JS 2
const zoneJS2 = document.getElementById("js2");
zoneJS2.addEventListener("click", changerContenu);


// Définition de la classe Client
class Client {
    constructor(civilite, nom, prenom, email, telephone) {
      this.civilite = civilite;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.telephone = telephone;
    }
    presentation() {
      alert(`Bonjour, je suis ${this.civilite} ${this.prenom} ${this.nom}, vous pouvez me contacter sur ${this.email} ou au ${this.telephone}.`);
    }
  }

  // Récupération du formulaire et du bloc client
  const formClient = document.getElementById('form-client');
  const blocClient = document.getElementById('client');

  // Soumission du formulaire
  formClient.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire
    const formData = new FormData(formClient);
    const client = new Client(
      formData.get('civilite'),
      formData.get('nom'),
      formData.get('prenom'),
      formData.get('email'),
      formData.get('telephone')
    );
    client.presentation(); // Affiche l'alerte de présentation
    blocClient.textContent = JSON.stringify(client, null, 2); // Affiche l'objet client dans le bloc client
  });
