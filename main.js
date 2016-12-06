/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
$('.alertme').click(function(){
  alert('jQuery seems easy so far!')
})

//2.
$('.clickme').click(function(){
  $('.clickme').html('I was clicked');

})

//3.
$('.addStyle').click(function(){
  $('button').addClass('buttonStyle')
})

//4.
$('.addDifferentStyle').click(function(){
  $('button.addDifferentStyle').addClass('addUniqueStyle')
})

//5.

$('.removeBtn').click(function(){
  $('button').removeClass('addUniqueStyle buttonStyle')
})
//6.
$('.clickToggle').click(function(){
$('button.clickToggle').toggleClass('buttonStyle')

})

//7.
$('.squareBtn').click(function(){
  $('.square').hide()
})


//8.
$('.circle').click(function(){
  $('.circle').hide()
})


//9.

$('.toggleRedSquare').click(function(){
  $('.redSquare').toggle(1500)
})

});  // Close: $(document).ready(function() {
