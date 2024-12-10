// Sélectionne le bouton et le paragraphe contenant le numéro de téléphone
const showNumberBtn = document.getElementById('show-number-btn');
const phoneNumber = document.getElementById('phone-number');

// Ajoute un gestionnaire d'événements pour le clic sur le bouton
showNumberBtn.addEventListener('click', () => {
  // Vérifie si le numéro est déjà visible
  if (phoneNumber.style.display === 'block') {
    // Cache le numéro
    phoneNumber.style.display = 'none';
    // Change le texte du bouton pour "Voir le numéro"
    showNumberBtn.textContent = 'Voir le numéro de téléphone';
  } else {
    // Affiche le numéro de téléphone
    phoneNumber.style.display = 'block';
    // Change le texte du bouton pour "Cacher le numéro"
    showNumberBtn.textContent = 'Cacher le numéro de téléphone';
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const overlay = document.querySelector("#overlay");

  // Ouvrir/fermer le menu et overlay
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    overlay.classList.toggle("active");
  });

  // Fermer le menu en cliquant sur l'overlay
  overlay.addEventListener("click", () => {
    nav.classList.remove("show");
    overlay.classList.remove("active");
  });
});


