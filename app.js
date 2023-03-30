// thisを使って記述を省略したバージョン
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

// 省略せずに記述したバージョン
$(function(){
  $('.bg1').on('click', function(){
    $('.bg1').slideUp();
  });

  $('.bg2').on('click', function(){
    $('.bg2').slideUp();
  });

  $('.bg3').on('click', function(){
    $('.bg3').slideUp();
  });

  $('.bg4').on('click', function(){
    $('.bg4').slideUp();
  });
})
