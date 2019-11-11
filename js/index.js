$(document).ready(function() {
  var $docEl = $('html, body, .menu'),
    $wrap = $('.content'),
    scrollTop;

  $('.information').click(function(e) {
    overlayOpen();
    e.preventDefault();
  });

  $('.close-button').click(function(e) {
    overlayClose();
    e.preventDefault();
  });
  
  var overlayClose = function() {
    $.unlockBody();
    $('body').removeClass('overlay-open');
    $('.menu').removeClass('info-gone'); 
  }
  var overlayOpen = function() {
    $('body').addClass('overlay-open');
    $('.menu').addClass('info-gone');
    $.lockBody();
  }

  

  $.lockBody = function() {
    if(window.pageYOffset) {
      scrollTop = window.pageYOffset;
      
      $wrap.css({
        top: - (scrollTop)
      });
    }

    $docEl.css({
      height: "100%",
      overflow: "hidden"
    });
  }

  $.unlockBody = function() {
    $docEl.css({
      height: "",
      overflow: ""
    });

    $wrap.css({
      top: ''
    });

    window.scrollTo(0, scrollTop);
    window.setTimeout(function () {
      scrollTop = null;
    }, 0);

  }
});


var switchContainer = $('.switch-container');

switchContainer.on('click', function() {
  var overlay      = $('.overlay');
  var overlayWork      = $('.overlay-work');
  var body         = $('html');
  var link         = $('a');
  var detail         = $('li');
  var para         = $('p');
  var face         = $('.me-face');
  var boney         = $('.boney');
  var lightface   = $('.me-light-face'),
      onSwitch  = $('.switch');
     // container = $('.container');
  
  $(this).toggleClass('on-indicator');
  onSwitch.toggleClass('switched-on');
  overlay.toggleClass('night-mode');
  overlayWork.toggleClass('night-mode-text');
  overlayWork.toggleClass('night-mode-work');
  overlay.toggleClass('night-mode-text');
  body.toggleClass('night-mode');
  body.toggleClass('night-mode-text');
  link.toggleClass('night-mode-text');
  detail.toggleClass('night-mode-text');
  para.toggleClass('night-mode-text');
  face.toggleClass('face-gone');
  boney.toggleClass('face-gone');
  lightface.toggleClass('lightface-on');
  
});

