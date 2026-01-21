const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.portfolio-card'); // <-- correction ici

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all') {
        // Si "Tout" → on cache tout
        card.style.display = 'none';
      } else {
        // Sinon on affiche seulement la catégorie cliquée
        card.style.display =
          card.dataset.category === filter ? 'block' : 'none';
      }
    });
  });
});
