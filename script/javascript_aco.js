//메뉴// //아래로 한 서브메뉴씩 노출//

$(".navi li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
}).mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
});

//이미지슬라이딩(좌우)// //세로 나열 창//

var w = $(window).width() - 600; //브라우저 넓이-(헤더+배너)
var imgs = 0;
function slide() {
    if(imgs<2) {
        imgs++;
    } else {
        imgs=0;
    }
    $("#imgslide ul").animate({left:-100 * imgs + "%"},1000) //ul을 100%로 두고 li 3개가 나누어 들어올 때 왼쪽으로 -100% 이동하는 하나의 li값
}
setInterval(slide, 9000)

//모달//

$(".cc").click(function () {
    $(".modal").show( );
});
$(".button button").click(function () {
    $(".modal").hide( );
});