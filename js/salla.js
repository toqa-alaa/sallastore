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

function toggleLanguage() {
  var currentPage = window.location.href;
  var newPage;

  if (currentPage.includes('indexRTL.html')) {
    // If already in RTL page, switch to LTR
    newPage = '../index.html';
  } else {
    // If in any other page or 'index.html', switch to RTL
    newPage = '../indexRTL.html';
  }

  // Redirect to the appropriate page
  window.location.href = newPage;
}
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
