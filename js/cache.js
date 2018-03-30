// クイズのデータ
var quiz_data = Array(30);

// 一度だけのコンストラクタ
var dataInit = function(){

	var counter=0;
	for(var i=0; i<quiz_data.length; i++) {

		if(quiz_data[i] == undefined) {
			counter++;
		}
	}
	if(counter == quiz_data.length){
		quiz_data.fill(false);
		sessionStorage.setItem("quizData", JSON.stringify(quiz_data));

		return function(){
			return ;
		}
	}	
}