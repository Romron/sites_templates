
slider_1();
tabs_1();




function tabs_1() {
   const tabs = document.querySelectorAll('.wrap-tabs>div');
   const title_tabs = document.querySelectorAll('.wrap-title-tabs>div');
   document.querySelector('.wrap-title-tabs').addEventListener('click', (e) => {
      for (let i = 0; i < tabs.length; i++) {
         tabs[i].className = "tab-hide";
         title_tabs[i].className = "title-tab";
      }
      document.querySelector('#tab-' + e.target.id).className = "tab-active";
      e.target.classList.add("title-tab-active");
   });
}

function slider_1() {
   /*
      проматывает все элементы с лево на право и обратно
   */

   let offset = 0;
   const sliderLine = document.querySelector('.wrap-slider-cards');
   let quantity_img = document.querySelectorAll('.wrap-slider-cards .slider-card').length
   // console.log("quantity_img = " + quantity_img);

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