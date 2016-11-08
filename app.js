
$(document).ready(function() {
    var colorCount = 0;
//gets the button working
  $('.color-button').on('click', function(){
    //calls the add block on a click
    addBlockz($(this).data("color"));
    //calls the replace tracker on the click
    updateTracker($(this).data("color"));
  });

  function addBlockz(color) {
    //appends correct color cube to container
    $('.container').append('<div class="color-cube ' + color + '"></div>');
  }

  function updateTracker(color){
    colorCount++;
    $('#'+ color).text('Total ' + color + " :" + colorCount);

  }

});
