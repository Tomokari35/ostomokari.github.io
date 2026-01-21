const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.portfolio-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'block'; // Tout s'affiche
      } else {
        card.style.display = card.dataset.category === filter ? 'block' : 'none';
      }
    });
  });
});
