/*Navbar -flex_menu */
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.navi-mobile');
  const navbarMenu = document.querySelector('.navibar-menu');

  burgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
  });

  navbarMenu.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      navbarMenu.classList.remove('active');
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Hier ändern wir die Scrollposition
      const targetPosition = targetElement.offsetTop;

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
});
