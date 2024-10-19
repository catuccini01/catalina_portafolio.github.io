window.onload = (event) => {
  let myAlert = document.querySelector('.toast');
  let bsAlert = new bootstrap.Toast(myAlert);
  bsAlert.show();
  var option = {
    delay : 5000
  }
};




var vid = document.getElementById("myVideo");
vid.volume = 0.0;
function setNoVolume() { 
  vid.volume = 0.0;
} 
function setFullVolume() { 
  vid.volume = 0.3;
} 


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



AOS.init();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    
      300:{
          items:1
      },
      993:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

Fancybox.bind('[data-fancybox="gallery"], [data-fancybox="gallery2"]', {
  Image: {
    zoom: false,
  },
});


const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar'
})


