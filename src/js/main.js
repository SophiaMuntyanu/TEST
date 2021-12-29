$(function() {
    $("#selectBackground ul li a").click(function() {
        $("#selectBackground ul li a").removeClass("active");         
        $(this).toggleClass("active");
    })
});

/*slider */

$(document).ready(function(){
  $('.slider').slick({
      arrows:true,
      dots:false,
      adaptiveHeight:true,
      slidesToShow:3,
      infinite:true,
      autoplay:true,
      autoplaySpeed:3000,
      pauseOnFocus:true,
      pauseOnHover:true,
      pauseOnDotsHover:true,
      variableWidth:true,
      /*prevArrow: `<svg width="15" height="12" class="prev"><use class="prev" width="15" height="12" xlink:href='img/img.svg#prev'></use></svg>`,
      nextArrow: `<svg width="15" height="12" class="next"><use xlink:href="img/img.svg#next"></use></svg>`*/
  });
});

$('.cool-input__input').on('input', function(){
    var $this = $(this);
    if ($this.val() == '') {
        $this.removeClass('cool-input__input_filled');
    } else {
        $this.addClass('cool-input__input_filled');
    }
});

$('.js-btn').click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').offset().top
    }, 200);
});