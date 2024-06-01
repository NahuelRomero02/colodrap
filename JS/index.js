document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3800, // Cambia la imagen cada 2 segundos
      ride: 'carousel'
    });
  
    // Opcional: agregar control manual
    document.querySelector('.carousel-control-next').addEventListener('click', function () {
      carousel.next();
    });
  
    document.querySelector('.carousel-control-prev').addEventListener('click', function () {
      carousel.prev();
    });
  });
  