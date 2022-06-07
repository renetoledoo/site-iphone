
$(document).ready(function(){
    $('.slider').bxSlider({
      mode: 'horizontal',
      auto: true,
      pager: true
    });
  });


  $(document).ready(function() {
    $('#galeria-fotos').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: false,
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,  // Duração da volta da foto 
        opener: function(element) {
          //
          return element.find('img');
        }
      }
      
    });
  });