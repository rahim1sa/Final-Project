;(function($) {

   'use strict'

    $(function() {  

        if ( $('body').hasClass('header-sticky') ) {
                
                var hd_height = $('#Inner_Form').height();
                var div_top= $('#Inner_Form').offset().top;
                var div_bottom= $('.footer').offset().top;           
                           
            $(window).on('load scroll', function(){
                if (window.matchMedia('(min-width: 1200px) and (max-width: 2000px)').matches) {
                     if ( $(window).scrollTop() > div_top-152) {
                        $('#Inner_Form').addClass('stickk');                      
                    } else {                    
                        $('#Inner_Form').removeClass('stickk');                 
                    }
                    if ( $(window).scrollTop() > (div_bottom-hd_height)-352) {
                        $('#Inner_Form').removeClass('stickk'); 
                        $('#Inner_Form').addClass('bottomm');                      
                    } else {                    
                        $('#Inner_Form').removeClass('bottomm');                 
                    }

                } else if (window.matchMedia('(min-width: 991px) and (max-width: 1200px)').matches) {
                    if ( $(window).scrollTop() > div_top-150) {
                        $('#Inner_Form').addClass('stickk');                      
                    } else {                    
                        $('#Inner_Form').removeClass('stickk');                 
                    }
                    if ( $(window).scrollTop() > (div_bottom-hd_height)-347) {
                        $('#Inner_Form').removeClass('stickk'); 
                        $('#Inner_Form').addClass('bottomm');                      
                    } else {                    
                        $('#Inner_Form').removeClass('bottomm');                 
                    }
                }
                else if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
                    if ( $(window).scrollTop() > div_top-20) {
                        $('#Inner_Form').addClass('stickk');                      
                    } else {                    
                        $('#Inner_Form').removeClass('stickk');                 
                    }
                    if ( $(window).scrollTop() > (div_bottom-hd_height)-155) {
                        $('#Inner_Form').removeClass('stickk'); 
                        $('#Inner_Form').addClass('bottomm');                      
                    } else {                    
                        $('#Inner_Form').removeClass('bottomm');                 
                    }
                }     
                 else if (window.matchMedia('(min-width: 651px) and (max-width: 768px)').matches) {
                    if ( $(window).scrollTop() > div_top-20) {
                        $('#Inner_Form').addClass('stickk');                      
                    } else {                    
                        $('#Inner_Form').removeClass('stickk');                 
                    }
                    if ( $(window).scrollTop() > (div_bottom-hd_height)-155) {
                        $('#Inner_Form').removeClass('stickk'); 
                        $('#Inner_Form').addClass('bottomm');                      
                    } else {                    
                        $('#Inner_Form').removeClass('bottomm');                 
                    }
                }                 
               
            });            
        }   
    })

   

    // // Dom Ready
    // $(function() { 
    //     if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
    //         AppointmentFixed();
    //     }            
       
    // });

})(jQuery);


