$(document).ready(function(){
   $('#boton-menu').on("click", function() {        
      $("#menu-principal").toggle(500);
      $(".st0").addClass("st4");
      $(".st1").addClass("st5");
    });

 
     $('#menu-principal').on("click", function() {        
      $("#menu-principal").toggle(500);
      $(".st0").removeClass("st4");
      $(".st1").removeClass("st5");
    });

});




