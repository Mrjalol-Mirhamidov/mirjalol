$(function () {
    
    
    
    
    $(window).resize(function () {
           if($(window).width() > 768){
               $('.menu__ul').removeAttr('style');
            }
            
        });
        
        $('.logo button').click(function () {
            $('.menu__ul').fadeToggle(1000)
            
            
        });
    // $('.menu__ul').hide();
    // $('.').click( function () {
    //     $('.icon').css('color','none');
       
        
    // });
   // $('.prices__box__plans').removeClass('active').eq($(this).index()).addClass('active');
   
   class tabs {
    constructor(argument){
       
        $(argument).find('.prices__box_basic').click(function(){
            $(argument).find('.prices__box_basic').removeClass('active').eq($(this).index()).addClass('active');
           
        });
    }
}

let wrapp = $('.prices__box__plans');
for(let i of wrapp){
    i = new  tabs(i);
} 
   
   
})