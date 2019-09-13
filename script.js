window.onload = function() {
	let result;
	let alphabets = "abcdefghijklmnopqrstuvwxyz";
	let button = document.getElementById('mybutton');
	
	button.onclick = function() {
		result = "";
		rot13();
	}
	
	function rot13() {
		let inputText = document.getElementById('inputarea').value;

		for (let i = 0; i < inputText.length; i++) {
			if(alphabets.includes(inputText[i]) === true) {
				let index = alphabets.indexOf(inputText[i]);
				let letter = alphabets[(index + 13) % 26];
				result += letter;

			} else {
				result += inputText[i];
			}
		}
		let outputText = document.getElementById('outputarea');
		outputText.value = result;
 	}
}
