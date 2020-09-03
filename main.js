Vue.directive('showon', {

   inserted: function (el, binding) {
      el.resizeEvent = function () {

         windowW = window.innerWidth;
         var viewportSize;

         if(windowW < 576){
            viewportSize = 'xs';
         }
         if(windowW >= 576 && windowW < 768){
            viewportSize = 'sm';
         }
         if(windowW >= 768 && windowW < 992 ){
            viewportSize = 'md';
         }
         if(windowW >= 992 && windowW < 1200){
            viewportSize = 'lg';
         }
         if(windowW >= 1200){
            viewportSize = 'xl';
         }

         size = binding.modifiers;

         if(size.xs && viewportSize =='xs' || 
            size.sm && viewportSize == 'sm' ||
            size.md && viewportSize == 'md' || 
            size.lg && viewportSize == 'lg' || 
            size.xl && viewportSize == 'xl'){

            el.style.display = "block";
         }else{
            el.style.display = "none";
         }
      }
      
      window.addEventListener('load', el.resizeEvent);
      window.addEventListener('resize', el.resizeEvent);
   }
});

var app = new Vue ({
   el: '#app',
   data:{
      message: 'Hello. vue'
   }
})