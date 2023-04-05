// Demander le prix HT a l'utilisateur
var prixHT = prompt("Entrez le prix HT :");

//Demander le taux de TVA a l'utilisateur
var tauxTVA = prompt("Entrez le taux de TVA");

//Calculer le prix TTC
var prixTTC = prixHT * (1 + tauxTVA / 100);


//Afficher le prix TTC dans la page HTML
var prixTTCElement = document.createElement("p");
prixTTCElement.innerHTML = "Le prix TTC est :" + prixTTC.toFixed(2);
if (prixTTC > 100) {
    prixTTCElement.style.color = "red";
    
} else {
    prixTTCElement.style.color = "green";
}

document.body.appendChild(prixTTCElement);