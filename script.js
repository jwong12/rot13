window.onload = function() {
	let result;
	let alphabets = "abcdefghijklmnopqrstuvwxyz";
	let button = document.getElementById('mybutton');
	let select = document.querySelector('select');
	let rot;
	
	select.onchange = function() {
		rot = parseInt(select.value.slice(3));
	}

	button.onclick = function() {
		result = "";
		rotate();
	}
	
	function rotate() {
		let inputText = document.getElementById('inputarea').value;

		for (let i = 0; i < inputText.length; i++) {
			if(alphabets.includes(inputText[i]) === true) {
				let index = alphabets.indexOf(inputText[i]);
				let letter = alphabets[(index + rot) % 26];
				result += letter;

			} else {
				result += inputText[i];
			}
		}
		let outputText = document.getElementById('outputarea');
		outputText.value = result;
 	}
}
