const filterLinks = document.querySelectorAll('#filters a');
const products = document.querySelectorAll('.product');

for (let link of filterLinks) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Ajouter la classe "active" au lien cliqué et la retirer des autres
    for (let otherLink of filterLinks) {
      otherLink.classList.remove('active');
    }
    this.classList.add('active');
    
    // Filtrer les produits affichés
    const filter = this.getAttribute('data-filter');
    for (let product of products) {
      if (filter === 'all' || product.classList.contains(filter)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  });
}
