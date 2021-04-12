//слайдер
var swiper = new Swiper('.swiper-container.swiper-two', {
  slidesPerView: 3,

  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,


  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});


$(document).ready(function () {
  function moveMarker() {
    var activeNav = $('.active a');
    var activewidth = $(activeNav).width();
    var activePadLeft = parseFloat($(activeNav).css('padding-left'));
    var activePadRight = parseFloat($(activeNav).css('padding-right'));
    var totalWidth = activewidth + activePadLeft + activePadRight;

    var precedingAnchorWidth = anchorWidthCounter();

    // TODO: 
    // Find the total widths of all of the anchors
    // to the left of the active anchor.

    var activeMarker = $('.active-marker');
    $(activeMarker).css('display', 'block');

    $(activeMarker).css('width', totalWidth);

    $(activeMarker).css('left', precedingAnchorWidth);

    // TODO: 
    // Using the calculated total widths of preceding anchors,
    // Set the left: css value to that number.
  }
  moveMarker();

  function anchorWidthCounter() {
    var anchorWidths = 0;
    var a;
    var aWidth;
    var aPadLeft;
    var aPadRight;
    var aTotalWidth;
    $('.main-nav li').each(function (index, elem) {
      var activeTest = $(elem).hasClass('active');
      if (activeTest) {
        // Break out of the each function.
        return false;
      }

      a = $(elem).find('a');
      aWidth = a.width();
      aPadLeft = parseFloat(a.css('padding-left'));
      aPadRight = parseFloat(a.css('padding-right'));
      aTotalWidth = aWidth + aPadLeft + aPadRight;

      anchorWidths = anchorWidths + aTotalWidth;
    });

    return anchorWidths;
  }

  $('.main-nav a').click(function (e) {
    e.preventDefault();
    $('.main-nav li').removeClass('active');
    $(this).parents('li').addClass('active');
    moveMarker();
  });
});


//slider2




