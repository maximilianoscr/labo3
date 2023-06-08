document.addEventListener('DOMContentLoaded', function() {
  /*Para la barra*/
  var navbar = document.getElementById('navbar');
  var timer;
  function setNavbarOpacity(opacity) {
    navbar.style.opacity = opacity;
  }
  function resetNavbarOpacity() {
    clearTimeout(timer);
    setNavbarOpacity(1);
    timer = setTimeout(function() {
      setNavbarOpacity(0.1);
    }, 15000);
  }
  navbar.addEventListener('mouseenter', function() {
    clearTimeout(timer);
    setNavbarOpacity(1);
  });
  navbar.addEventListener('mouseleave', function() {
    resetNavbarOpacity();
  });
  resetNavbarOpacity();

});
$(document).ready(function() {
  // Al hacer clic en una estrella
  $('.star').click(function() {
    $(this).toggleClass('selected'); // Agrega o remueve la clase "selected"
    $('#guardar').show(); // Muestra el botón de "Guardar Valoración"
  });
});