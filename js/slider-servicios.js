$(document).ready(function(){
    var imgItems = $('.slider-ser li').length;//numero de slides o imagenes
     var paginacionItems = $('.paginacion-ser li').length;//numero de slides o imagenes
    var imgPos = 1;
    var imgPre = 1;
   
    // Agrego la paginacion con un ciclo for
    //for(i = 1; i <=imgItems; i++){
        
      //   $('.paginacion').append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>');}
    
    
    //...............................
     
    $('.slider-ser li').hide();//ocultamos los slides
    $('.slider-ser li:first').show();//mostramos solo el primer slide con li:first seudoclase.
    //$('.paginacion .li1').css({'background-color': 'red'});//Damos estilos al primer item de la p paginacion
 
    //Ejecutamos las funciones
    /*$('.paginacion li').css({
                              'width': '4rem',
    'height': '4rem',
    'border-radius': '50%',
    'line-height': '4rem'});*/
    $('.paginacion-ser li').click(paginacion);
    $('.right-ser').click(nextSlider);
    $('.left-ser').click(prevSlider);
    
    //funciones......................................................
    
    
    
    function paginacion() {
        
  var paginacionPos = $(this).index()+1;

  switch(paginacionPos) {
          
    case 1:
         
      $('.slider-ser li').hide();
      $('.paginacion-ser li').removeClass("active");
      $(this).addClass("active");
      $('.slider-ser li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 2:
       $('.slider-ser li').hide();
              $('.paginacion-ser li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ser li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 3:
       $('.slider-ser li').hide();
              $('.paginacion-ser li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ser li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 4:
       $('.slider-ser li').hide();
              $('.paginacion-ser li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ser li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 5:
       $('.slider-ser li').hide();
              $('.paginacion-ser li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ser li:nth-child('+ paginacionPos +')').fadeIn();
      break;
     case 6:
       $('.slider-ser li').hide();
              $('.paginacion-ser li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ser li:nth-child('+ paginacionPos +')').fadeIn();
      break;
           case 7:
       $('.slider-ser li').hide();
              $('.paginacion-ser li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ser li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    
  }
        
    
  
}
     
    function nextSlider(){
        
        if( imgPos >= imgItems){
            
             imgPos = 1;
        }else{
                
                imgPos++;
           
        }
        
         $(".st1").addClass("st5");
          $('.paginacion-ser li').removeClass("active");
         $('.paginacion-ser li').css({'background-color': '#000000'});
          $('.paginacion-ser li:nth-child('+ imgPos +')').addClass("active");
        
        $('.slider-ser li').hide();
        $('.slider-ser li:nth-child('+ imgPos +')').fadeIn();
        
      
    }
    
    
     function prevSlider(){
        
        if( imgPos <= 1){
            
             imgPos = imgItems;
        }else{
                
                imgPos--;
           
        }
         
          $(".st1").addClass("st5");
         $('.paginacion-ser li').removeClass("active");
         $('.paginacion-ser li').css({'background-color': '#000000'});
           $('.paginacion-ser li:nth-child('+ imgPos +')').addClass("active");
        
        $('.slider-ser li').hide();
        $('.slider-ser li:nth-child('+ imgPos +')').fadeIn();
    }

    
});









