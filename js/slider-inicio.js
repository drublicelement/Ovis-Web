$(document).ready(function(){
    var imgItems = $('.slider-ini li').length;//numero de slides o imagenes
     var paginacionItems = $('.paginacion-ini li').length;//numero de slides o imagenes
    var imgPos = 1;
    var imgPre = 1;
   
    // Agrego la paginacion con un ciclo for
    //for(i = 1; i <=imgItems; i++){
        
      //   $('.paginacion').append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>');}
    
    
    //...............................
     
    $('.slider-ini li').hide();//ocultamos los slides
    $('.slider-ini li:first').show();//mostramos solo el primer slide con li:first seudoclase.
    //$('.paginacion .li1').css({'background-color': 'red'});//Damos estilos al primer item de la p paginacion
 
    //Ejecutamos las funciones
    /*$('.paginacion li').css({
                              'width': '4rem',
    'height': '4rem',
    'border-radius': '50%',
    'line-height': '4rem'});*/
    $('.paginacion-ini li').click(paginacion);
    $('.right-ini').click(nextSlider);
    $('.left-ini').click(prevSlider);
    
    //funciones......................................................
    
    
    
    function paginacion() {
        
  var paginacionPos = $(this).index()+1;

  switch(paginacionPos) {
          
    case 1:
          
      $('.slider-ini li').hide();
      $('.paginacion-ini li').removeClass("active");
      $(this).addClass("active");

      $('.slider-ini li:nth-child('+ paginacionPos +')').fadeIn();

      $('.slider-ini li:nth-child('+ paginacionPos +')').toggle('slide');
          

      break;
    case 2:
       $('.slider-ini li').hide();
           $('.paginacion-ini li').removeClass("active");
      $(this).addClass("active");

        $('.slider-ini li:nth-child('+ paginacionPos +')').fadeIn();

        $('.slider-ini li:nth-child('+ paginacionPos +')').toggle('slide');

      break;
    case 3:
       $('.slider-ini li').hide();
              $('.paginacion li').removeClass("active");
      $(this).addClass("active");
        $('.slider-ini li:nth-child('+ paginacionPos +')').fadeIn();

        $('.slider-ini li:nth-child('+ paginacionPos +')').toggle('slide');

      break;
    case 4:
       $('.slider-ini li').hide();
              $('.paginacion-ini li').removeClass("active");
      $(this).addClass("active");

        $('.slider-ini li:nth-child('+ paginacionPos +')').fadeIn();

        $('.slider-ini li:nth-child('+ paginacionPos +')').toggle('slide');

      break;
    case 5:
       $('.slider-ini li').hide();
              $('.paginacion-ini li').removeClass("active");
      $(this).addClass("active");

        $('.slider-ini li:nth-child('+ paginacionPos +')').fadeIn();

        $('.slider-ini li:nth-child('+ paginacionPos +')').toggle('slide');

      break;
    case 6:
       $('.slider-ini li').hide();
       $('.paginacion-ini li').removeClass("active");
      $(this).addClass("active");

        $('.slider-ini li:nth-child('+ paginacionPos +')').fadeIn();
      break;
    
  }
        
    

        $('.slider-ini li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    
  }

  
}
     
    function nextSlider(){
        
        if( imgPos >= imgItems){
            
             imgPos = 1;
        }else{
                
                imgPos++;
           
        }
        
         $('.paginacion-ini li').css({'background-color': '#000000'});
          $('.paginacion-ini li:nth-child('+ imgPos +')').css({'background-color': '#E5B326'});
        
        $('.slider-ini li').hide();
        $('.slider-ini li:nth-child('+ imgPos +')').fadeIn();
    }
    
    
     function prevSlider(){
        
        if( imgPos <= 1){
            
             imgPos = imgItems;
        }else{
                
                imgPos--;
           
        }
        
         $('.paginacion-ini li').css({'background-color': '#000000'});
          $('.paginacion-ini li:nth-child('+ imgPos +')').css({'background-color': '#E5B326'});
        
        $('.slider-ini li').hide();
        $('.slider-ini li:nth-child('+ imgPos +')').fadeIn();
    }

        $('.slider-ini li:nth-child('+ imgPos +')').toggle('slide');
    }
    
  
});

