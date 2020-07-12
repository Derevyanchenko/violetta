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

(function($){				
  jQuery.fn.lightTabsMob = function(options){
      
      var createTabsMob = function(){
          tabsMob = this;
          i = 0;
          
          showPageMob = function(i){
              $(tabsMob).children("div").children("div").hide();
              $(tabsMob).children("div").children("div").eq(i).show();
              $(tabsMob).children("ul").children("li").removeClass("active");
              $(tabsMob).children("ul").children("li").eq(i).addClass("active");
          }
          
          showPageMob(0);				
          
          $(tabsMob).children("ul").children("li").each(function(index, element){
              $(element).attr("data-page", i);
              i++;                        
          });
          
          $(tabsMob).children("ul").children("li").click(function(){
            showPageMob(parseInt($(this).attr("data-page")));
          });				
      };		
      return this.each(createTabsMob);
  };	
})(jQuery);


// popup settings


function show_reversation_popup()
{
  $(".reversation-overlay").fadeIn(200);
  $("body, html").css("overflow-y", "hidden");
}

function show_review_popup()
{
  $(".reviews-overlay").fadeIn(200);
  $("body, html").css("overflow-y", "hidden");
}

function close_popup()
{
  $('.overlay').fadeOut(200);
  $("body, html").css("overflow-y", "");
}


$(".reversation-popup-js").on("click", function(e) {
  e.preventDefault();
  show_reversation_popup();
});

$(".add-reviews-js").on("click", function(e) {
  e.preventDefault();
  show_review_popup();
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

$(window).scroll(function(){
  $('header').toggleClass('fixed', $(this).scrollTop() > 0);
});


// ready


$(document).ready(function() {

  $(".tabs__content-mob").lightTabsMob();
  $(".tabs__content-pc").lightTabs();

  // burger

  $(".open-menu-js").on("click", function() {

    $(".mobileMenu-overlay").addClass("open");

  });
  

  // burger close

  $(".mobileMenu__close").on("click", function() {

    $(".mobileMenu-overlay").removeClass("open");

  });
  

// Cache selectors
var lastId,
    topMenu = $(".header, .footer, .mobileMenu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find(".header__list a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
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

$(".banner__slider").on('afterChange', function (event, slick, currentSlide) {

  console.log("slide changed");

  $(".slide-counter p").text(currentSlide<9?`0${currentSlide+1}`:currentSlide+1);
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

