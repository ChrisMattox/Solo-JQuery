
$(document).ready(function() {

//gets the button working
  $('.color-button').on('click', function(){
    //calls the add block on a click
    addColorBlock($(this).data("color"));
    //calls the replace tracker on the click
    updateTracker($(this).data("color"));
    console.log("working");
  });

  function addColorBlock(color) {
    //appends correct color cube to container
    $('.container').append('<div class="color-cube ' + color + '"></div>');
    console.log("hello");
  }

  function updateTracker(color){
    var colorCount = 0;
    colorCount++;
    $('#'+ color).replaceWith('<p>Total ' + color + " :" + colorCount);

  }

});
