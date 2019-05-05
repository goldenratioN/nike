$(document).ready(function(){



if($(window).width() > 768){


    $(".menu-toggle").click(function(){
        
        var nav_data = $(this).data("nav");
        if(nav_data=="off"){
            $(".main-menu").animate({right: '0px'});
            $(this).data("nav","on");
            return false;
        }else{

            $(".main-menu").animate({right: '-1000px'});
            $(this).data("nav","off");
            return false;

        }
        
    });


}else{
    $(".menu-toggle").click(function(){
        
        
        
            $(".main-menu").slideToggle();
           
        
        
    });
}


 


 $('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
     nav:false,
     autoplay:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:1
         },
         1000:{
             items:1
         }
     }
 })
  





 
});