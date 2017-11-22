$(document).ready(function(){
    var imgItems = $('.slider-ha li').length;//numero de slides o imagenes
     var paginacionItems = $('.paginacion-ha li').length;//numero de slides o imagenes
    var imgPos = 1;
    var imgPre = 1;
   
    // Agrego la paginacion con un ciclo for
    //for(i = 1; i <=imgItems; i++){
        
      //   $('.paginacion').append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>');}
    
    
    //...............................
     
    $('.slider-ha li').hide();//ocultamos los slides
    $('.slider-ha li:first').show();//mostramos solo el primer slide con li:first seudoclase.
    //$('.paginacion .li1').css({'background-color': 'red'});//Damos estilos al primer item de la p paginacion
 
    //Ejecutamos las funciones
    /*$('.paginacion li').css({
                              'width': '4rem',
    'height': '4rem',
    'border-radius': '50%',
    'line-height': '4rem'});*/
    $('.paginacion-ha li').click(paginacion);
    $('.right-ha').click(nextSlider);
    $('.left-ha span').click(prevSlider);
    
    //funciones......................................................
    
    
    
    function paginacion() {
        
  var paginacionPos = $(this).index()+1;

  switch(paginacionPos) {
          
    case 1:
          
      $('.slider-ha li').hide();
      $('.paginacion-ha li').removeClass("active");
      $(this).addClass("active");
      $('.slider-ha li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 2:
       $('.slider-ha li').hide();
           $('.paginacion-ha li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ha li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 3:
       $('.slider-ha li').hide();
              $('.paginacion-ha li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ha li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 4:
       $('.slider-ha li').hide();
              $('.paginacion-ha li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ha li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 5:
       $('.slider-ha li').hide();
              $('.paginacion-ha li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ha li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    case 6:
       $('.slider-ha li').hide();
       $('.paginacion-ha li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ha li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    
  }
        
    
  
}
     
    function nextSlider(){
        
        if( imgPos >= imgItems){
            
             imgPos = 1;
        }else{
                
                imgPos++;
           
        }
        
         $('.paginacion-ha li').css({'background-color': '#000000'});
          $('.paginacion-ha li:nth-child('+ imgPos +')').css({'background-color': '#E5B326'});
        
        $('.slider-ha li').hide();
        $('.slider-ha li:nth-child('+ imgPos +')').fadeIn();
    }
    
    
     function prevSlider(){
        
        if( imgPos <= 1){
            
             imgPos = imgItems;
        }else{
                
                imgPos--;
           
        }
        
         $('.paginacion-ha li').css({'background-color': '#000000'});
          $('.paginacion-ha li:nth-child('+ imgPos +')').css({'background-color': '#E5B326'});
        
        $('.slider-ha li').hide();
        $('.slider-ha li:nth-child('+ imgPos +')').fadeIn();
    }

    
});









