// イベントが発生した要素だけに変化をつける
// $(function() {
//   $('.bg1').on('click', function() {
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function() {
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function() {
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function() {
//     $('.bg4').slideUp();
//   });
// });

// thisを用いた上記の処理
$(function() {
  $('.box1').on('click', function() {
    $(this).slideUp();
  });
});