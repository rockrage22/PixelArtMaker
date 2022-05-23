// Select color input
const sizePicker = $('#sizePicker'),
      inputHeight = $('#inputHeight'),
      inputWidth = $('#inputWidth'),
// Select size input
      colorPicker = $('#colorPicker'),
      pixelCanvas = $('#pixelCanvas');
let color = 'black';

// When size is submitted by the user, call makeGrid()
let makeGrid = (row, column) => {
  let html;
  for (let r = 0; r < row; r++) {
    html += `<tr>`;
    for (var c = 0; c < column; c++) {
      html += `<td class="pixel"></td>`
    }
    html += `</tr>`;
  }
  pixelCanvas.append(html);
}


let deleteRow = () => {
  let rowCounter = $('tr').length;
  while (rowCounter--) {
    document.getElementById('pixelCanvas').deleteRow(-1);
  }
}

colorPicker.change(() => {
  color = colorPicker.val();
});


sizePicker.submit(function(e) {
  e.preventDefault();
  let row = inputHeight.val(),
    column = inputWidth.val(),
    trs = $('tr').length;
  deleteRow();
  makeGrid(row, column);
  $('td').click(function() {
    $(this).css('background-color', color);
  })
});
