console.log('Hi!');



$(function() {   
  // fade other items on hover

  $(".circle").hover(function() {
    $(this).siblings().toggleClass('project_fade');
  });
  
  //remove circles and bring in squares

  $('#circle1').click(function() {
    $(this).addClass('goodbye');
    $('#square1').addClass('hello');
  });

  $('#circle2').click(function() {
    $(this).addClass('goodbye');
    $('#square2').addClass('hello');
  });

  $('#circle3').click(function() {
    $(this).addClass('goodbye');
    $('#square3').addClass('hello');
  });

  $('#circle4').click(function() {
    $(this).addClass('goodbye');
    $('#square4').addClass('hello');
  });

  $('#circle5').click(function() {
    $(this).addClass('goodbye');
    $('#square5').addClass('hello');
  });


  //fade other squares on hover
  $(".square").hover(function() {
    console.log('working');
    $(this).siblings().toggleClass('project_fade');
  });

  //bring back circle and remove square - adding circle in first place
  $('#square1').click(function(){
    $(this).removeClass('hello');
    $('#circle1').removeClass('goodbye');
      $('.circle').siblings().removeClass('first');
    $('#outercircle1').addClass('first');

  })

   $('#square2').click(function(){
    $(this).removeClass('hello');
    $('#circle2').removeClass('goodbye');
      $('.circle').siblings().removeClass('first');
    $('#outercircle2').addClass('first');
  })


   $('#square3').click(function(){
    $(this).removeClass('hello');
    $('#circle3').removeClass('goodbye');
      $('.circle').siblings().removeClass('first');
    $('#outercircle3').addClass('first');
  })


   $('#square4').click(function(){
    $(this).removeClass('hello');
    $('#circle4').removeClass('goodbye');
    $('.circle').siblings().removeClass('first');
    $('#outercircle4').addClass('first');
  })


   $('#square5').click(function(){
    $(this).removeClass('hello');
    $('#circle5').removeClass('goodbye');
      $('.circle').siblings().removeClass('first');
    $('#outercircle5').addClass('first');
  })



});