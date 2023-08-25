$(document).ready(function(){

    //언어 버튼
    $('.lang_btn a').click(function(){
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
        adaptiveHeight: true
    });

    //QnA탭
    $('ul.tab').on("click","li",function(){
        var tab_id = $(this).attr('data-tab');
        $('.qna_list').removeClass('active');
        $('.qna_list:first-child').addClass('active');
        $('ul.tab li').removeClass('active');
        $('.list').removeClass('active');
        $(this).addClass('active');
        $("."+tab_id).addClass('active');
    });

    //QnA내부
    $('.qna_list').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });

    //이용약관 팝업
    $('.term').click(function(){
        $('.popup_term').show();
        $('.popup_bg').show();
        $('body').addClass('hidden');
    });
    $('.popup_term button').click(function(){
        $('.popup_term').hide();
        $('.popup_bg').hide();
        $('body').removeClass('hidden');
    });

    //개인정보 처리방침 팝업
    $('.privacy').click(function(){
        $('.popup_Privacy').show();
        $('.popup_bg').show();
        $('body').addClass('hidden');
    });
    $('.popup_Privacy button').click(function(){
        $('.popup_Privacy').hide();
        $('.popup_bg').hide();
        $('body').removeClass('hidden');
    });

    //외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e) {
        const popups = [".popup_Privacy", ".popup_term"];
        
        popups.forEach(popupSelector => {
            const layerPopup = $(popupSelector);
            if (layerPopup.has(e.target).length === 0) {
                layerPopup.hide();
            }
        });
    
        $('.popup_bg').hide();
        $('body').removeClass('hidden');
    });

});
