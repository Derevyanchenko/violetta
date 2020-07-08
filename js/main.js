$(document).ready(function() {

  // open mob menu

    $(".header__toggle").on("click", function(e) {
        e.preventDefault();
        $(".header-mob").slideToggle();
        $(this).toggleClass("header__toggle--active");
    });

    // add input class in focus

$(".md-form input, .md-form textarea").on("focus", function() {

  if( this.value.trim() == '' ) {
      $(this).next().addClass("active");
      $(this).addClass("active");
      $(this).siblings(".md-form__icon").addClass("active")
  }

});


// remove input class in focus

$(".md-form input, .md-form textarea").on("blur", function() {

  if( this.value.trim() == '' ) {
      $(this).next().removeClass("active");
      $(this).removeClass("active");
      $(this).siblings(".md-form__icon").removeClass("active")
  }
  
  // form field validate 

  if( this.value.trim() !== '' ) {
      $(this).parent().addClass("validate_true");
  } else {
      $(this).parent().removeClass("validate_true");
  }

});

// popup settings


function show_popup()
{
  $(".overlay_popup").fadeIn(200);
  $("body, html").css("overflow-y", "hidden");
}

function close_popup()
{
  $('.overlay_popup').fadeOut(200);
  $("body, html").css("overflow-y", "");
}


$(".add-review-js").on("click", function(e) {
  e.preventDefault();
  show_popup();
});

$(".popup__close").on("click", function() {
  close_popup();
});


$(document).mouseup(function (event) {
  if ($(".popup").is(":visible")) {
      var popup = $(".popup");
      if (!popup.is(event.target) && popup.has(event.target).length === 0) {
          close_popup();
      }
  }
});


  // banner slider

  $('.banner__slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      appendDots: $(".banner__dots"),
      prevArrow: $(".banner-prev"),
      nextArrow: $(".banner-next"),
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    }); 



});

