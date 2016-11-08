
$(document).ready(function() {
    var colorCount = 0;
  $('.color-button').on('click', function(){
    addBlockz($(this).data("color"));
    updateTracker($(this).data("color"));
  });

  function addBlockz(color) {
    $('.container').append('<div class="color-cube ' + color + '"></div>');
  }

  function updateTracker(color){
    colorCount++;
    $('#'+ color).text('Total ' + color + " :" + colorCount);
  }
});
