// マウス(オーバー/アウト)イベントを設定する

$(function() {
  $('.box1').mouseover(function() {
    $('.box1').css({'background-color': '#0000ff'});
  });
  $('.box1').mouseout(function() {
    $('.box1').css({'background-color': '#ff0000'});
  });
});