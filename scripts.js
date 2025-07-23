// Reveal elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100; // how early to trigger

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
