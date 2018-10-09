
$(document).ready(function(){
    $('.header-menu-hamburger').click(function(){
    $('.header-menu-resposive').css('display','flex');  
        
    });
      $('.header-menu-hamburger-exit').click(function(){
    $('.header-menu-resposive').css('display','none');  
        
    });
});



 






let sg = document.querySelector('.sg');
        sg.addEventListener('click',function(){
        
   $('content').load('strona-glowna.html');
 })

         

let uslugi = document.querySelector('.uslugi');
      uslugi.addEventListener('click',function(){
  
   $('content').load('uslugi.html', function(){
       let kuch = document.querySelector('.btn-kuchnie');
          kuch.addEventListener('click',function(){
              let obraz=document.querySelector('.content-right-img-box');
            obraz.childNodes.removeChild;
              obraz.style.backgroundColor="red";
          
              
          });
   });
      

})



let realizacje = document.querySelector('.realizacje');
        realizacje.addEventListener('click',function(){
        
   $('content').load('realizacje.html');
 })

let kontakt = document.querySelector('.kontakt');
        kontakt.addEventListener('click',function(){
        
   $('content').load('kontakt.html');
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










    
