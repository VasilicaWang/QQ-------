$(function() {
    // 头部导航
	$(".headnav li").on("click", function() {
		$(".headnav li").removeClass("headNavCurrent");
		$(this).addClass("headNavCurrent");

	})

	// banner 轮播图
	$(".bannerNav").mouseenter(function() {
		$(".courseIntro").css("display","block");
	})
	$(".bannerNav").mouseleave(function() {
		$(".courseIntro").css("display","block");
	})
})



