
var video1 = document.getElementById("videoPlay1");
video1.onclick = function () {
    if (video1.paused) {
        video1.play();
    } else {
        video1.pause();
    }
}


var mySwiper = new Swiper( '.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,//自动轮播
    speed: 2000,

    pagination: '.swiper-pagination',
    paginationType: 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置
    //下面方法可以生成我们自定义的分页器到页面上
    paginationCustomRender: function ( swiper, current, total ) {
        var customPaginationHtml = "";
        for(var i = 0; i < total; i++) {
            //判断哪个分页器此刻应该被激活
            if(i == (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
            }
        }
        return customPaginationHtml;

    },
    onReachEnd: function ( swiper ) {
        console.log( '到了最后一个slide' );
    }
} );
