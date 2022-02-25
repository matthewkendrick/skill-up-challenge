// childrenを用いてクリックボタンによる変化を付ける

$(function () {
  $('button').on('click', function() {
    $('ul').children().css('color', 'red');
  });
});