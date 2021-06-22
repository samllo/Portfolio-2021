

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
  rootMargin: '-120px',
  threshold: 0
}

const myObserver = new IntersectionObserver(callback, options)

fadeContainer.forEach(container => {
  myObserver.observe(container);
});
