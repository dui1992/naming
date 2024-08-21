$(function () {
  $('#header').load('common/header.html');
  $('#footer').load('common/footer.html');
  
});


$(function () {
  $('.item #add-cart').click(function () {
    $('.popup').addClass('on');
  });
  $('.popup #cencel_btn').click(function () {
    $('.popup').removeClass('on');
  });
});


