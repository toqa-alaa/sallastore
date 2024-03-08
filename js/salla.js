const swiper = new Swiper('.swiper', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});


document.querySelector('.lang').addEventListener('click', function() {
  toggleLanguage();
});


document.addEventListener("DOMContentLoaded", function () {
  var dropDown = document.querySelector('.drop-down');
  var dropMenu = document.querySelector('.drop-menu');

  dropDown.addEventListener('click', function () {
      // Toggle the visibility of the drop-menu
      if (dropMenu.style.display === 'none' || dropMenu.style.display === '') {
          dropMenu.style.display = 'block';
      } else {
          dropMenu.style.display = 'none';
      }
  });
});
