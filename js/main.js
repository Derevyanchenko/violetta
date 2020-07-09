$(document).ready(function() {


  (function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});

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

// gallery show

$(".gallery__switch").on("click", function() {

  let box = $(".gallery__wrapper .row");

  if ( box.hasClass("open") ) {

    box.removeClass("open");
    $(this).removeClass("open");
    $(this).find("span").text("Ещё фото");

  } else {

    box.addClass("open");
    $(this).addClass("open");
    $(this).find("span").text("Скрыть");

  }


});


  // banner slider

  $('.banner__slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      appendDots: $(".banner__dots"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    }); 

    $('.reviews__slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      appendDots: $(".reviews__dots"),
      responsive: [

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

