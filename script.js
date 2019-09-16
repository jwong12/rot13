window.onload = function() {
	const MOD_26 = 26;
	const alphabets = "abcdefghijklmnopqrstuvwxyz";
	const alphabets_caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const button = document.getElementById('convertButton');
	const select = document.querySelector('select');

	let createOptions = () => {
		for(let i = 1; i <= MOD_26; i++) {
			const option = document.createElement('option');
			option.value = "rot" + i;
			option.textContent = "Rot" + i;
			select.appendChild(option);
		}
	}

	createOptions();
	select.selectedIndex = 12;
	let rot = parseInt(select.value.slice(3));
	const title = document.querySelector('h1')
	title.textContent = "Rot" + rot + "  Mod26";

	select.onchange = function() {
		rot = parseInt(select.value.slice(3));
		title.textContent = "Rot" + rot + "  Mod26";
	}

	button.onclick = function() {
		let result = "";
		rotate(result);
	}
	
	function rotate(result) {
		let inputText = document.getElementById('inputarea').value;

		for (let i = 0; i < inputText.length; i++) {
			if(alphabets.includes(inputText[i]) === true) {
				let index = alphabets.indexOf(inputText[i]);
				let letter = alphabets[(index + rot) % MOD_26];
				result += letter;

			} else if(alphabets_caps.includes(inputText[i]) === true) {
				let index = alphabets_caps.indexOf(inputText[i]);
				let letter = alphabets_caps[(index + rot) % MOD_26];
				result += letter;

			} else {
				result += inputText[i];
			}
		}
		let outputText = document.getElementById('outputarea');
		outputText.value = result;
 	}
}
