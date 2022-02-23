// class属性を(追加/解除)する

$(function() {
  $('.box1').mouseover(function() {
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function() {
    $('.box1').removeClass('box1-ext');
  });
});