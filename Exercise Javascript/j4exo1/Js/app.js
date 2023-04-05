// Création de l'objet film
const film = {
    titre: "Le seigneur des anneaux : La Communauté de l'anneau",
    duree: 178,
    genre: "Fantasy",
    dateSortie: "2001",
    realisateur:"Peter Jackson",
    acteurs: ["Elijah wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"],
    descriptionCourte: "Un jeune hobbit hérite d'un anneau magique et doit le détruire pour sauver le monde.",
	descriptionLongue: "Dans un village paisible de la Comté, le jeune hobbit Frodon Sacquet reçoit d'un étrange magicien un anneau magique. Cet anneau est en réalité l'Anneau Unique, un objet maléfique qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu. Avec l'aide de ses amis hobbits, Frodon décide de quitter la Comté pour se rendre au Mordor, le seul endroit où l'Anneau Unique peut être détruit. Mais leur quête est semée d'embûches et de dangers, car Sauron a envoyé ses armées pour récupérer l'anneau et empêcher sa destruction.",
    
    affiche: "https://www.allocine.fr/film/fichefilm_gen_cfilm=37141.html"
		};

        // Ajout de la méthode pour afficher le résumé
        film.affiherResume = function() {
            const resume = `${this.titre} (${this.duree} min) - ${this.genre} - ${this.descriptionCourte}`;
            document.getElementById("resume").innerText = resume;

        };

        //Ajout de la méthode pour afficher la description compléte
        film.afficherDescription = function() {
            const description = `
            <h2>${this.titre}</h2>
            <p><strong>Durée :</strong> ${this.duree} min</p>
				<p><strong>Genre :</strong> ${this.genre}</p>
				<p><strong>Date de sortie :</strong> ${this.dateSortie}</p>
				<p><strong>Réalisateur :</strong> ${this.realisateur}</p>
				<p><strong>Acteurs :</strong> ${this.acteurs.join(", ")}</p>
				<p><strong>Description :</strong> ${this.descriptionLongue}</p>
				<img src="${this.affiche}" alt="${this.titre}">
			`;
			document.getElementById("description").innerHTML = description;
		};

		// Appel des méthodes pour afficher le résumé et la description
		film.afficherResume();
		film.afficherDescription();

        



