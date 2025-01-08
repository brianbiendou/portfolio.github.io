function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleCategory(categoryId, element) {
  // Masquer toutes les catégories
  const categories = document.querySelectorAll('.project-container');
  categories.forEach(category => category.classList.remove('active'));

  // Supprimer la classe active des onglets
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Afficher la catégorie sélectionnée
  document.getElementById(categoryId).classList.add('active');
  element.classList.add('active');
}

// Activer une catégorie par défaut au chargement
document.addEventListener('DOMContentLoaded', () => {
  toggleCategory('iot-communicating-systems', document.querySelector('.category-tab.active'));
});


