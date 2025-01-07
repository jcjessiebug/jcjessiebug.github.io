const cards = document.querySelectorAll('.card, .about-card, .project-card');
cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * -20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 20px rgba(155, 155, 155, 0.6)`;

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    });
  });
});

let lastScrollPosition = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    navbar.classList.add("hidden"); 
  } else {
    navbar.classList.remove("hidden"); 
  }

  lastScrollPosition = currentScrollPosition;
});