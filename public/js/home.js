$(document).ready(function() {
  if ($(document).scrollTop() <= 50) {
    $('nav').addClass('transparent');
  }
  // special font curving
  $('h1.curve').circleType({fitText:true, radius: 2000});
});



$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').removeClass('transparent');
  } else {
    $('nav').addClass('transparent');
  }
});

