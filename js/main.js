$(function () {
  $(".burger").on("click", function () {
    $(".nav").toggleClass("sosi");
  });
});
$(function () {
  $(".burger").on("click", function () {
    $(".header-btn").toggleClass("sosi");
  });
});
$(function () {
  $(".burger").on("click", function () {
    $(".how-a").toggleClass("sosi");
  });
});

function readMore() {
  var dots = document.getElementById('dots');
  var more = document.getElementById('more');
  var btn = document.getElementById('btn');
  
  if(dots.style.display === "none"){
    dots.style.display="inline";
    btn.innerHTML="Read More";
    more.style.display="none";
  } else{
    dots.style.display="none";
    btn.innerHTML="Close"
    more.style.display="inline";
  }
}
$(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            dots:false,

            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                    
                1200:{
                    items:3
                }

            }
        })

});

