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
  let pase;
  for (let r = 0; r < row; r++) {
    pase += `<tr>`;
    for (var c = 0; c < column; c++) {
      pase += `<td class="pixel"></td>`
    }
    pase += `</tr>`;
  }
  pixelCanvas.append(pase);
}

// new board
let deleteRow = () => {
  let rowSize = $('tr').length;
  while (rowSize--) {
    document.getElementById('pixelCanvas').deleteRow(-1);
  }
}

// color
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
