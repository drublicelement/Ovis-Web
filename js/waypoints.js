var $dipper = $('.dipper');

   $dipper.waypoint(function(direction){
    if(direction == 'down'){
         $dipper.addClass('dipper2');
        
    }else{
          // console.log('waypoint!');
    $dipper.removeClass('dipper2');
        
    }
 
    
},{offset:'-50%'}  );

var $dipper2 = $('.ovis');

   $dipper.waypoint(function(direction){
    if(direction == 'down'){
         $dipper.addClass('ovis:after');
        
    }else{
          // console.log('waypoint!');
    $dipper.removeClass('ovis:after');
        
    }
 
    
},{offset:'50%'}  );