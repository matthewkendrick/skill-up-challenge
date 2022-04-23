$function() {
  $('#back a').on('click',function(event){
    $('back, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
}