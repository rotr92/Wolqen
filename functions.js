document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navbarMenu = document.querySelector('.navbar-menu');

  burgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
  });

  navbarMenu.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      navbarMenu.classList.remove('active');
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
