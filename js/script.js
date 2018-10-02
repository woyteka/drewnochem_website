
$(document).ready(function(){
    $('.header-menu-hamburger').click(function(){
    $('.header-menu-resposive').css('display','flex');  
        
    });
      $('.header-menu-hamburger-exit').click(function(){
    $('.header-menu-resposive').css('display','none');  
        
    });
});



let uslugi = document.querySelector('.uslugi');
        uslugi.addEventListener('click',function(){
        
   $('content').load('uslugi.html');
 })  






let sg = document.querySelector('.sg');
        sg.addEventListener('click',function(){
        
   $('content').load('strona-glowna.html');
 })



 

 
let sgM = document.querySelector('.sgM');
        sgM.addEventListener('click',function(){
        
   $('content').load('strona-glowna.html');
            $('.header-menu-resposive').css('display','none') 
 })



let uslugiM = document.querySelector('.uslugiM');
        uslugiM.addEventListener('click',function(){
        
   $('content').load('uslugi.html');
       $('.header-menu-resposive').css('display','none')     
 }) 





let realizacjeM = document.querySelector('.realizacjeM');
        realizacjeM.addEventListener('click',function(){
        
   $('content').load('realizacje.html');
            $('.header-menu-resposive').css('display','none') 
 })

let kontaktM = document.querySelector('.kontaktM');
        kontaktM.addEventListener('click',function(){
        
   $('content').load('kontakt.html');
            $('.header-menu-resposive').css('display','none') 
 })










    
