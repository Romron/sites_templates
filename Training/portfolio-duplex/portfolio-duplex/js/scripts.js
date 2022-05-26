
// slider_1();
slider_2();



function slider_2() {
   let arr_slides = document.querySelectorAll('.wrap-slider-cards .slider-card');
   console.log(arr_slides);

   array.forEach(element => {
      768
   });



}








function slider_1() {

   let offset = 0;
   const sliderLine = document.querySelector('.wrap-slider-cards');


   document.querySelector('#left').addEventListener('click', function () {
      offset = offset + 235;
      if (offset > 470) {
         offset = -470;
      }
      sliderLine.style.left = -offset + 'px';

      console.log('#left  offset = ' + offset);
   });

   document.querySelector('#right').addEventListener('click', function () {
      offset = offset - 235;
      if (offset < 0) {
         offset = 450;
      }
      sliderLine.style.left = -offset + 'px';
   });



}