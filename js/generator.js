var arr2 = [1,2,3,4,5,6,7,8,9,0];
var arr3 = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arr4 = ['A','B','C','D','E','F','G','H','I','J','K','L',
'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var arr5 = ['!','@','#','$','%','^','&']

document.getElementById('param1').oninput = function (){
	document.getElementById('password-length').innerHTML = this.value;
}


document.getElementById('generator').onclick = generatePass;

function generatePass(){
	var result = [];
	if(document.getElementById('param2').checked){
		result = result.concat(arr2);
	}
	if(document.getElementById('param3').checked){
		result = result.concat(arr3);
	}
	if(document.getElementById('param4').checked){
		result = result.concat(arr4);
	}
	if(document.getElementById('param5').checked){
		result = result.concat(arr5);
	}
	result.sort(compareRandom);
	var pass = '';
	var passLength = parseInt(document.getElementById('param1').value);
	for(var i = 0; i < passLength; i++){
		pass += result[randomInteger(0, result.length - 1)];
	}
	 if(pass == ''){
	 	document.getElementById('out').innerHTML = '<h1>Укажите длину пароля!</h1>';
	 }else{
	 	document.getElementById('out').innerHTML = '<h1>' + pass + '</h1>';
	 }
	 if(passLength < 0){
	 	document.getElementById('out').innerHTML = '<h1>Укажите корректную длину!</h1>';
	 }
}

function compareRandom(a, b){
	return Math.random() - 0.5; 
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
