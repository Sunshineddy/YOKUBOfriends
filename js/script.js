/***************** quiz *****************/
var quiz_sum = 0;	// 全体の合計正解数
var quiz_num = 30;	// クイズ全体の数
var quiz_numper = 3;	// １人当たりのクイズの数
// りきと
var chikaarashi = 0;
var chikaarashi_q1 = false;
var chikaarashi_q2 = false;
var chikaarashi_q3 = false;
// ゆうた
var nishimura = 0;
var nishimura_q1 = false;
var nishimura_q2 = false;
var nishimura_q3 = false;
// のーちゃん
var jyo = 0;
var jyo_q1 = false;
var jyo_q2 = false;
var jyo_q3 = false;
// いずみん
var izumi = 0;
var izumi_q1 = false;
var izumi_q2 = false;
var izumi_q3 = false;
// あきら
var sasaki = 0;
var sasaki_q1= false;
var sasaki_q2= false;
var sasaki_q3= false;
// すがたく
var sugawara = 0;
var sugawara_q1 = false;
var sugawara_q2 = false;
var sugawara_q3 = false;
// たてちゃん
var tateno = 0;
var tateno_q1 = false;
var tateno_q2 = false;
var tateno_q3 = false;
// ぐちやま
var yamaguchi = 0;
var yamaguchi_q1 = false;
var yamaguchi_q2 = false;
var yamaguchi_q3 =false;
// くわちゃん
var kuwayama = 0;
var kuwayama_q1 = false;
var kuwayama_q2 = false;
var kuwayama_q3 = false;
// はんじちゃん
var hanji = 0;
var hanji_q1 = false;
var hanji_q2 = false;
var hanji_q3 = false;

/***************** video *****************/
var video = document.getElementById('video');	//video要素の取得
var video_btn = document.getElementById('video-btn');	//videoボタンの取得
var btn_status = 0;	//状態保存

//画面クリックで再生・ポーズ
video_btn.addEventListener('click', function () {
	if(btn_status == 0) {
		video.play();
		btn_status = 1;
	}else {
		video.pause();
		btn_status = 0;
	}
});
