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
