// JavaScript Document

//スマホの時だけ電話番号有効化

if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  $(function() {
    $('.tel').each(function() {
      var str = $(this).html();
      if ($(this).children().is('img')) {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
      } else {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
      }
    });
  });
}

//トップへ戻るボタン
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  $(function() {
	$("#page-top").hide();
  });
}
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//スマホのときだけ、トップへ戻るボタン無効化
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  $(function() {
	$("#page-top").hide();
});
}


//スムーススクロール
$(function(){
	$('nav a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

//フェードイン
$(function(){
  $(window).scroll(function (){
    $(".fade-card").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});

$(function(){
  $(window).on("load", function() {
    $(".onload-fademotion").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});

//トップタイトルフェードイン
$(window).on("load", function() {
  $('.onload-fadein').delay(300).fadeIn("slow");
});


//スライドショー
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
});


//リロード
$(function() {
  $('html,body').animate({ scrollTop: 0 }, '1');
});