window.onload = function() {
	let alphabets = "abcdefghijklmnopqrstuvwxyz";
	let random = "aaa";
	let result = "";
	let button = document.getElementById('mybutton');
	
	// let test = "a";
	// let test1 = "bcd";
	// let text = test + test1;
	
	button.onclick = function() {
		let text = document.getElementById('mytextarea').value;
		// console.log(text);
		rot13(text);
	}
	

	

	function rot13(text) {
		for (let i = 0; i < random.length; i++) {
			if(alphabets.includes(text[i]) === true) {
				let index = alphabets.indexOf(text[i]);
				let letter = alphabets[index + 13];
				result += letter;
				// console.log(letter);
			}
		}
		console.log(result);
	}
}
