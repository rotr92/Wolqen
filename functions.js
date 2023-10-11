/*Navbar -flex_menu */
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
/*Zoom für Diagramm*/
document.addEventListener('DOMContentLoaded', function() {
  const zoomContainers = document.querySelectorAll('.Zoom');

  zoomContainers.forEach(container => {
    container.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
  });
});

/* Skalieren der Produkte-Bilder */

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth >=961) {
  const productImages = document.querySelectorAll('.product-image img');

  productImages.forEach(function(image) {
      image.addEventListener('load', function() {
          if (this.naturalHeight > this.naturalWidth) {
              this.style.height = '100%';
              this.style.width = 'auto';
          } else {
              this.style.width = '100%';
              this.style.height = 'auto';
          }
      });
  });
}});
