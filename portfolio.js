const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.portfolio-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all') {
        // Si "Tout" → afficher toutes les cartes
        card.style.display = 'block';
      } else {
        // Sinon on affiche seulement la catégorie cliquée
        card.style.display =
          card.dataset.category === filter ? 'block' : 'none';
      }
    });
  });
});
