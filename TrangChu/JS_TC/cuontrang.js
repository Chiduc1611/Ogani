$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#btn-reload").fadeIn();
    }
    else{
        $("#btn-reload").fadeOut();
    }
  });
  $('#btn-reload').click(function(){
    $('html, body').animate({scrollTop: 0},500)
  })
});