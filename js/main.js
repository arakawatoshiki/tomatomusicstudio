'use strict';

// ハンバーガーアイコン
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  $('#page a[href]').on('click', function(event) {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}


// ページスクロール
$(function(){
  $(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect-scroll');
      }
    });
  });
});

