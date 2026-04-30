console.log('Welcome to the Azure Demo Web App!');

document.addEventListener('DOMContentLoaded', () => {
  // Simple navigation highlight
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
