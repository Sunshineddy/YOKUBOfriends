/***************** video *****************/
//video要素の取得
var video = document.getElementById('video');
//videoボタンの取得
var video_btn = document.getElementById('video-btn');
//状態保存
var btn_status = 0;

//画面クリックで再生・ポーズ
video_btn.addEventListener('click', function () {
	if(btn_status === 0) {
	  video.play();
	  btn_status = 1;
	}else {
	  video.pause();
	  btn_status = 0;
	}
});
