(function( $ ){
    
    $(document).ready(function(){

       $('#help-btn').click(function() {
            $('.about').toggleClass('hidden');
            $('.leaflet-control-container').addClass('hidden');
       });

       $('.about .x').click(function(){
            $('.about').toggleClass('hidden');
            $('.leaflet-control-container').removeClass('hidden');
       }); 

    });


})( jQuery );