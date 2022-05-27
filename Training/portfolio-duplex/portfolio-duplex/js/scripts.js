
slider_1();


function slider_1() {
   /*
      проматывает все элементы с лево на право и обратно
   */

   let offset = 0;
   const sliderLine = document.querySelector('.wrap-slider-cards');
   let quantity_img = document.querySelectorAll('.wrap-slider-cards .slider-card img').length
   document.querySelector('#left').addEventListener('click', function () {
      if (offset > (quantity_img - 5) * 235) {
         return;
      }
      offset = offset + 235;
      sliderLine.style.left = -offset + 'px';
   });
   document.querySelector('#right').addEventListener('click', function () {
      if (offset < 1) {
         return;
      }
      offset = offset - 235;
      sliderLine.style.left = -offset + 'px';
   });

}