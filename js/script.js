
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
       
        let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/kuchnia.jpg')";
       
       
       
       let kuch = document.querySelector('.btn-kuchnie');
          kuch.addEventListener('click',function(){
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/kuchnia.jpg')";
          
              
          });
  
       
         let zabudow = document.querySelector('.btn-zabudowy');
          zabudow.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/zabudowy.jpg')";
              
          
              
          });
       
       
       
             let meble = document.querySelector('.btn-meble');
          meble.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/meble.jpg')";
              
          
              
          });
       
       
       
               let domy = document.querySelector('.btn-domy');
          domy.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/domy.jpg')";
              
          
              
          });
       
       
             let ceramika = document.querySelector('.btn-ceramika');
          ceramika.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/ceramika.jpg')";
              
          
              
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
        
   $('content').load('uslugi.html', function(){
       
        let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/kuchnia.jpg')";
       
       
       
       
       
       
       
      let kuch = document.querySelector('.btn-kuchnie');
          kuch.addEventListener('click',function(){
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/kuchnia.jpg')";
          
              
          });
  
       
         let zabudow = document.querySelector('.btn-zabudowy');
          zabudow.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/zabudowy.jpg')";
              
          
              
          });
       
       
       
             let meble = document.querySelector('.btn-meble');
          meble.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/meble.jpg')";
              
          
              
          });
       
       
       
               let domy = document.querySelector('.btn-domy');
          domy.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/domy.jpg')";
              
          
              
          });
       
       
             let ceramika = document.querySelector('.btn-ceramika');
          ceramika.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/ceramika.jpg')";
              
          
              
          }); 
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
   });
                    
                    
                   
            
            
            
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










    
