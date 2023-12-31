$(document).ready(function () {
  //알람
  $('.alert').click(function () {
    $('.alert_popup').toggleClass('active');
  });
  $('.alert_popup_close').click(function () {
    $('.alert_popup').removeClass('active');
    $('body').removeClass('hidden');
  });

  //언어 버튼
  $('.lang_btn a').click(function () {
    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');
  });

  //슬라이더
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  //faq 탭
  $('ul.tab').on('click', 'li', function () {
    let tab_id = $(this).attr('data-tab');
    $('.qna_list').removeClass('active');
    $('.que').removeClass('active');
    if ($('ul.tab').hasClass('mytab') == false) {
      $('.qna_list .ans').removeClass('active');
      $('.qna_list:first-child .que').addClass('active');
      $('.qna_list:first-child .ans').addClass('active');
    } else {
      $('.qna_list .ans').removeClass('active');
    }
    $('ul.tab li').removeClass('active');
    $('.list').removeClass('active');
    $(this).addClass('active');
    $('.' + tab_id).addClass('active');
  });

  //lang 버튼
  $('.lang_btn.on').click(function () {
    $(this).siblings('.lang_btn.off').toggleClass('active');
  });

  //faq 내부
  $('.qna_list .que').click(function () {
    $(this).parent('.qna_list').siblings().children('.que').removeClass('active');
    $(this).toggleClass('active');
    $(this).parent('.qna_list').siblings().children('.ans').removeClass('active');
    $(this).siblings('.ans').toggleClass('active');
  });

  //이용약관 팝업
  $('.term').click(function () {
    $('.popup_term').show();
    $('.popup_bg').show();
    $('body').addClass('hidden');
  });
  $('.popup_term button').click(function () {
    $('.popup_term').hide();
    $('.popup_bg').hide();
    $('body').removeClass('hidden');
  });

  //개인정보 처리방침 팝업
  $('.privacy').click(function () {
    $('.popup_Privacy').show();
    $('.popup_bg').show();
    $('body').addClass('hidden');
  });
  $('.popup_Privacy button').click(function () {
    $('.popup_Privacy').hide();
    $('.popup_bg').hide();
    $('body').removeClass('hidden');
  });

  //외부영역 클릭 시 팝업 닫기
  // $(document).mouseup(function (e) {
  //   const popups = ['.popup_Privacy', '.popup_term'];

  //   popups.forEach((popupSelector) => {
  //     const layerPopup = $(popupSelector);
  //     if (layerPopup.has(e.target).length === 0) {
  //       layerPopup.hide();
  //     }
  //   });

  //   $('.popup_bg').hide();
  //   $('body').removeClass('hidden');
  // });

  //로그인 버튼
  $('.login button').click(function () {
    $(this).siblings('ul').toggleClass('active');
  });

  //로그인 페이지
  $('.login_close').click(function () {
    $('#loginId').val('');
  });

  //모바일
  //헤더 모바일메뉴
  $('.mobile_menu_btn').click(function () {
    $('.head_contents').addClass('active');
    $('body').addClass('hidden');
  });
  $('.close_mobile_btn').click(function () {
    $('.head_contents').removeClass('active');
    $('body').removeClass('hidden');
  });
  //모바일 알람
  $('.mobile_alert').click(function () {
    $('.alert_popup').addClass('active');
    $('body').addClass('hidden');
  });
});
