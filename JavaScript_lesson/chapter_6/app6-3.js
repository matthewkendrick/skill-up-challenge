// マウスクリックイベントを設定する
$(function() {
  //.box1がクリックされた時 
  $('.box1').on('click', function() {
    $('.box1').addClass('box1-ext');
  });
  // .box1からマウスが離れた時
  $('.box1').mouseout(function() {
    $('.box1').removeClass('box1-ext');
  });
});