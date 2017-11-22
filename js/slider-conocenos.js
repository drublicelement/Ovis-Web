$(document).ready(function(){
    var imgItems = $('.slider-co li').length;//numero de slides o imagenes
     var paginacionItems = $('.paginacion-co li').length;//numero de slides o imagenes
    var imgPos = 1;
    var imgPre = 1;
   
    // Agrego la paginacion con un ciclo for
    //for(i = 1; i <=imgItems; i++){
        
      //   $('.paginacion').append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>');}
    
    
    //...............................
     
    $('.slider-co li').hide();//ocultamos los slides
    $('.slider-co li:first').show();//mostramos solo el primer slide con li:first seudoclase.
    //$('.paginacion .li1').css({'background-color': 'red'});//Damos estilos al primer item de la p paginacion
 
    //Ejecutamos las funciones
    /*$('.paginacion li').css({
                              'width': '4rem',
    'height': '4rem',
    'border-radius': '50%',
    'line-height': '4rem'});*/
    $('.paginacion-co li').click(paginacion);
    $('.right-co').click(nextSlider);
    $('.left-co').click(prevSlider);
    
    //funciones......................................................
    
    
    
    function paginacion() {
        
  var paginacionPos = $(this).index()+1;

  switch(paginacionPos) {
          
    case 1:
          
      $('.slider-co li').hide();
      $('.paginacion-co li').removeClass("active");
      $(this).addClass("active");
      $('.slider-co li:nth-child('+ paginacionPos +')').toggle('slide');
          
      break;
    case 2:
       $('.slider-co li').hide();
           $('.paginacion-co li').removeClass("active");
      $(this).addClass("active");
        $('.slider-co li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 3:
       $('.slider-co li').hide();
        $('.paginacion-co li').removeClass("active");
      $(this).addClass("active");
        $('.slider-co li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 4:
       $('.slider-co li').hide();
              $('.paginacion-co li').removeClass("active");
      $(this).addClass("active");
        $('.slider-co li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 5:
       $('.slider-co li').hide();
              $('.paginacion-co li').removeClass("active");
      $(this).addClass("active");
        $('.slider-co li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 6:
       $('.slider-co li').hide();
       $('.paginacion-co li').removeClass("active");
      $(this).addClass("active");
        $('.slider-co li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    
  }
  
}
     
    function nextSlider(){
        
        if( imgPos >= imgItems){
            
             imgPos = 1;
        }else{
                
                imgPos++;
           
        }
        
         $('.paginacion-co li').css({'background-color': '#000000'});
          $('.paginacion-co li:nth-child('+ imgPos +')').css({'background-color': '#E5B326'});
        
        $('.slider-co li').hide();
        $('.slider-co li:nth-child('+ imgPos +')').fadeIn();
    }
    
    
     function prevSlider(){
        
        if( imgPos <= 1){
            
             imgPos = imgItems;
        }else{
                
                imgPos--;
           
        }
        
        
        $('.slider-co li').hide();
        $('.slider-co li:nth-child('+ imgPos +')').fadeIn();
    }

    
});



