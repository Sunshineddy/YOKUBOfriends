/***************** quiz *****************/
var quiz_sum = 0;	// 全体の合計正解数
var quiz_num = 30;	// クイズ全体の数
var quiz_numper = 3;	// １人当たりのクイズの数
// りきと
var chikaarashi = 0;
// ゆうた
var nishimura = 3;
// のーちゃん
var jyo = 6;
// いずみん
var izumi = 9;
// あきら
var sasaki = 12;
// すがたく
var sugawara = 15;
// たてちゃん
var tateno = 18;
// ぐちやま
var yamaguchi = 21;
// くわちゃん
var kuwayama = 24;
// はんじちゃん
var hanji = 27;

// クイズの判定
function answerJudge(name, no, quiz) {
	if(quiz == true){
		var qData = JSON.parse(sessionStorage.getItem("quizData"));

		switch(name){
			case chikaarashi: qData[chikaarashi+no-1] = true; break;
			case nishimura: qData[nishimura+no-1] = true; break;
			case jyo: qData[jyo+no-1] = true; break;
			case izumi: qData[izumi+no-1] = true; break;
			case sasaki: qData[sasaki+no-1] = true; break;
			case sugawara: qData[sugawara+no-1] = true; break;
			case tateno: qData[tateno+no-1] = true; break;
			case yamaguchi: qData[yamaguchi+no-1] = true; break;
			case kuwayama: qData[kuwayama+no-1] = true; break;
			case hanji: qData[hanji+no-1] = true; break;
			default: break;
		}
		
		sessionStorage.setItem("quizData", JSON.stringify(qData));	// 値の保持
	}
}

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
