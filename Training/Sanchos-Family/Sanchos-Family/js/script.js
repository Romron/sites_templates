
slider_2();


function slider_2() {
   /*
      перебирает элементы в контейнере
      удаляя при этом скрывающий стиль
      для Sanchos-Family
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
         Indikator_line(offset);
         return;
      } else if (offset == 0) {
         offset = quantity_img - 1;
         arr_img[offset].classList.remove("slide-hide");
         Indikator_line(offset);
         return;
      } else if (offset < 0) {
         offset = offset * (-1);
         offset = offset - 1;
         arr_img[offset].classList.remove("slide-hide");
         Indikator_line(offset);
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
         Indikator_line(offset);
         return;
      } else if (offset >= 0 && offset < quantity_img - 1) {
         offset = offset + 1;
         arr_img[offset].classList.remove("slide-hide");
         Indikator_line(offset);
         return;
      } else if (offset >= quantity_img - 1) {
         offset = 0;
         arr_img[Math.abs(offset)].classList.remove("slide-hide");
         Indikator_line(offset);
         return;
      }

   });

}

function Indikator_line(i) {
   if (i < 0) {
      i = Math.abs(i);
   }

   let quantity_img = document.querySelectorAll('.wrap-slider-cards img').length;
   let Width_line = document.querySelector(".ind-line").offsetWidth;
   let line_active = document.querySelector(".ind-line__active");
   let offset = Width_line / quantity_img;
   let position = offset * i;
   let str_quantity_img = quantity_img;
   let inikator_right = document.querySelector(".indikator-line__right");

   line_active.style.left = position + "px";
   line_active.style.width = offset + "px";
   if (quantity_img < 10) {
      str_quantity_img = "0" + quantity_img;
   }
   inikator_right.textContent = str_quantity_img;
}