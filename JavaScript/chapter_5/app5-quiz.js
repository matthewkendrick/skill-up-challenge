// 1. 要素を上から下へスライド
// 2. 赤色正方形　→青色長方形(W:200px, H:100px)
// 3. 1.の後に下から上にスライド

$(function () {
  $('.box1').slideDown(function () {
    $('.box1').css
    ({
      'background-color': '#0000ff', 
      'width'           : '200px',
      'height'          : '100px'
    }).slideUp();
  });
});