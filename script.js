

// loads page to the top on refresh - helps achieve consistent results with header
$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});

//header slide 
var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $("#horizontalH");
var currPosition = ele.position().left + 5 ;
var trackLength = 50;
$(window).scroll(function (event) {
current = $(window).scrollTop();
console.log({total:total,current:current});
console.log(current/total * 100);
var newPosition = trackLength * (current/total)
ele.css({left:currPosition+newPosition+'%'});
});


/* fade in container intersection observer*/
const fadeContainer= document.querySelectorAll(".fadeContainer")

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeUpAndIn")
    }
  })
}
const options = { 
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0
}

const myObserver = new IntersectionObserver(callback, options)

fadeContainer.forEach(container => {
  myObserver.observe(container);
});

/* skills wheels*/

const skillWheels = document.querySelectorAll('.skillsContainer');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      $('div.wheel').addClass('progress');
    } else {
      $('div.wheel').removeClass('progress');
    }
  });
});

skillWheels.forEach(wheel => {
  observer.observe(wheel);
});

/*Carousel JS*/
$(document).ready(function(){
  $('.carousel').slick({
  centerMode: true,
  slidesToShow: 3,
  centerPadding: '0', //hides edge of 1st & 5th slides
  dots: true,
  arrows: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
  });
});

//class add and removal for image transition on carousel
$(document).ready(function() {
  "use strict";
  // Invoke function here
  callMeT();
  // define function here
  function callMeT () {
    $('div.slick-slide').find('ul.crslSkills').removeClass('open');
    $('div.slick-slide').find('ul.crslSkills').addClass('notopen');
    $('div.slick-slide').find('img.crslImgs').removeClass('open');
    $('div.slick-slide').find('img.crslImgs').addClass('notopen');
    $('div.slick-slide').find('i.sourceCodeLink').removeClass('open');
    $('div.slick-slide').find('i.sourceCodeLink').addClass('notopen');
  }
  // Invoke function again within the click event here
  $('div#containerCarousel').click(callMeT);
  $('div#containerCarousel').mouseup(callMeT);
});

// adds and removes open/notopen class if slide is in center of carousel
$(document).ready(function() {
  "use strict";
  callMeTwice();
  function callMeTwice () {
    $('div.slick-center').find('ul.crslSkills').removeClass('notopen');
    $('div.slick-center').find('ul.crslSkills').addClass('open');
    $('div.slick-center').find('img.crslImgs').removeClass('notopen');
    $('div.slick-center').find('img.crslImgs').addClass('open');
    $('div.slick-center').find('i.sourceCodeLink').removeClass('notopen');
    $('div.slick-center').find('i.sourceCodeLink').addClass('open');
  }
  // Invoke function again within the click event 
  $('div#containerCarousel').click(callMeTwice);
  $('div#containerCarousel').mouseup(callMeTwice);
});

// Email & phone pop up & copy to clipbpard

// copy to clipboard
function copyToClipboard(text) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".emailOpen").on("click", function() {
  $('.popup-overlay.emailpop , .popup-content.emailpop').addClass("active");
  copyToClipboard("sam.thomas.lloyd@gmail.com");
  // fixes buggy lingering X on popup
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".emailClose").on("click", function() {
  $('.popup-overlay.emailpop , .popup-content.emailpop').removeClass("active");
  $('.closeX:hover').css('transition', 'all 0s ease-in-out 0s'); // fixes buggy lingering X on popup, removes transition time
});

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".mobileOpen").on("click", function() {
  $('.popup-overlay.mobilepop , .popup-content.mobilepop').addClass("active");
  copyToClipboard("07543 554 162");
  // fixes buggy lingering X on popup
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".mobileClose").on("click", function() {
  $('.popup-overlay.mobilepop , .popup-content.mobilepop').removeClass("active");
  $('.closeX:hover').css('transition', 'all 0s ease-in-out 0s'); // fixes buggy lingering X on popup, removes transition time
});