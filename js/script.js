/* ===================================================================

 * ヘッダの余白設定

=================================================================== */
$(function() {
	// var getWindowSize = function(){
	// 	if(window.matchMedia('(min-width:767px)').matches){
	// 		var headerMarginTop = parseInt($('header').css('margin-top'), 10);
	// 		var navHeight = $('nav').outerHeight(true);
	// 		$('header').css({'margin-top':navHeight + headerMarginTop});
	// 	}
	// };
	// setInterval(getWindowSize, 0.01);

	// var smartMode = false;
	// var headerMarginTop = 0;
	// var navHeight = 0;
	// var a = 0;
	//
	// $(window).on('load resize', function(){
	//
	// 	if($(window).width() < 768){
	// 		console.log("入ってますよ")
	// 		headerMarginTop = parseInt($('header').css('margin-top'), 10);
	// 		navHeight = $('nav').outerHeight(true);
	//
	// 		if(true === smartMode) return;
	// 		smartMode = true;
	// 		console.log("navHeight : " + navHeight);
	// 		a = navHeight;
	// 		$('header').css({'margin-top':navHeight + headerMarginTop});
	// 	} else {
	// 		if(0 > headerMarginTop - a) return;
	// 		$('header').css({'margin-top':headerMarginTop - a});
	// 	}
	// });
});
