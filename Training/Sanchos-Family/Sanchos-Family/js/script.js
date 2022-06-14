
slider_2();


function slider_2() {
   /*
      перебирает элементы в контейнере
      удаляя при этом скрывающий стиль
   */

   let offset = 0;

   let arr_img = document.querySelectorAll('.wrap-slider-cards img');
   let quantity_img = arr_img.length

   document.querySelector('#left').addEventListener('click', function () {

      for (let i = 0; i < arr_img.length; i++) {
         arr_img[i].classList.add("slide-hide")
      }

      if (offset > 0) {
         offset = offset - 1;
         arr_img[offset].classList.remove("slide-hide");

         return;
      } else if (offset == 0) {
         offset = quantity_img - 1;
         arr_img[offset].classList.remove("slide-hide");

         return;
      } else if (offset < 0) {
         offset = offset * (-1);
         offset = offset - 1;
         arr_img[offset].classList.remove("slide-hide");

         return;
      }


   });


   document.querySelector('#right').addEventListener('click', function () {

      for (let i = 0; i < arr_img.length; i++) {
         arr_img[i].classList.add("slide-hide")
      }

      if (offset < 0) {
         offset = offset * (-1) + 1;
         arr_img[offset].classList.remove("slide-hide");

         return;
      } else if (offset >= 0 && offset < quantity_img - 1) {
         offset = offset + 1;
         arr_img[offset].classList.remove("slide-hide");

         return;
      } else if (offset >= quantity_img - 1) {
         offset = 0;
         arr_img[Math.abs(offset)].classList.remove("slide-hide");

         return;
      }

   });

}