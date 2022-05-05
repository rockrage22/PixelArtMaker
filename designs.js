// Select color input
// Select size input
var height, color, width;
// When size is submitted by the user, call makeGrid()
$('#sizepicker').submit(function (event) {
  event.preventDefault();
  heighgt = $('#inputheight').val();
  width = $('#inputweight').val();
  makeGrid(height, width);
})


function makeGrid(x, y) {
  s('tr').remove();
// Your code goes here!
  for (var i = 1; i <= x; i++) {
    $('pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (var j = 1; j <= y; j++) {
      $('#table' + i).append('<td></td>');
    }
  }
  
  // color to the cell
  $('td').click(function addColor() {
    color = $('#colorPicker'),val();
    
    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
