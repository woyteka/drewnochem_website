
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
          
              let tekstA =document.querySelector('.text-box-uslugi');
              tekstA.innerHTML="Wykonujemy meble kuchenne pod wymiar. Na życzenie klienta przyjeżdżamy na pomiar przygotowujemy projekt, ustalamy rodzaj materiału oraz szacujemy koszt zabudowy.";
              
              
              
              
              
              
              
              
          });
  
       
         let zabudow = document.querySelector('.btn-zabudowy');
          zabudow.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/zabudowy.jpg')";
              
          let tekstB =document.querySelector('.text-box-uslugi');
              tekstB.innerHTML="Wykonujemy różnego rodzaju zabudowy z drzwiami przesuwanymi lub rozwieranymi. Przygotowujemy także gotowe elementy do samodzielnego montażu ";
              
              
          });
       
       
       
             let meble = document.querySelector('.btn-meble');
          meble.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/meble.jpg')";
              
            let tekstC =document.querySelector('.text-box-uslugi');
              tekstC.innerHTML="Wzorujemy się na polskich meblach z lat 50-ch. Wykonane w 100% z drewna tworzą niepowtarzalny klimat.Idealnie komponują się w zarówno w starych kamienicach jaki i w nowoczesnych przestronnych wnętrzach.";
              
          });
       
       
       
               let domy = document.querySelector('.btn-domy');
          domy.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/domy.jpg')";
              
          let tekstD =document.querySelector('.text-box-uslugi');
              tekstD.innerHTML="Obtaczamy bale świerkowe lub sosnowe o średnicy od 15cm do 50cm i długości od 1 do 6m. Przygotowujemy także bale umożliwiające montaż domu z bali z frezem na siodło i zamek węgłowy. Wykonujemy małe domy z bali.";
              
          });
       
       
             let ceramika = document.querySelector('.btn-ceramika');
          ceramika.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/ceramika.jpg')";
              
          let tekstE =document.querySelector('.text-box-uslugi');
              tekstE.innerHTML="Firma współpracuje z regionalnymi artystami. Produkty z drewna i ceramiki można zakupić bezpośrednio u nas.Organizujemy zajęcia z ceramiki (lepienie z gliny) ";
              
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
          
               let tekstA =document.querySelector('.text-box-uslugi');
              tekstA.innerHTML="Wykonujemy meble kuchenne pod wymiar. Na życzenie klienta przyjeżdżamy na pomiar przygotowujemy projekt, ustalamy rodzaj materiału oraz szacujemy koszt zabudowy.";
          });
  
       
         let zabudow = document.querySelector('.btn-zabudowy');
          zabudow.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/zabudowy.jpg')";
              
          let tekstB =document.querySelector('.text-box-uslugi');
              tekstB.innerHTML="Wykonujemy różnego rodzaju zabudowy z drzwiami przesuwanymi lub rozwieranymi. Przygotowujemy także gotowe elementy do samodzielnego montażu ";
              
              
          });
       
       
       
             let meble = document.querySelector('.btn-meble');
          meble.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/meble.jpg')";
              
           let tekstC =document.querySelector('.text-box-uslugi');
              tekstC.innerHTML="Wzorujemy się na polskich meblach z lat 50-ch. Wykonane w 100% z drewna tworzą niepowtarzalny klimat.Idealnie komponują się w zarówno w starych kamienicach jaki i w nowoczesnych przestronnych wnętrzach.";
              
          });
       
       
       
               let domy = document.querySelector('.btn-domy');
          domy.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/domy.jpg')";
              
          let tekstD =document.querySelector('.text-box-uslugi');
              tekstD.innerHTML="Obtaczamy bale świerkowe lub sosnowe o średnicy od 15cm do 50cm i długości od 1 do 6m. Przygotowujemy także bale umożliwiające montaż domu z bali z frezem na siodło i zamek węgłowy. Wykonujemy małe domy z bali.";
              
              
          });
       
       
             let ceramika = document.querySelector('.btn-ceramika');
          ceramika.addEventListener('click',function(){
                   
              let obraz=document.querySelector('.content-right-img-box');
              obraz.style.backgroundImage="url('images/ceramika.jpg')";
              
          let tekstE =document.querySelector('.text-box-uslugi');
              tekstE.innerHTML="Firma współpracuje z regionalnymi artystami. Produkty z drewna i ceramiki można zakupić bezpośrednio u nas.Organizujemy zajęcia z ceramiki (lepienie z gliny) ";
              
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










    
