const vTab = [];
const vAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const vInputElement = document.querySelector('#vigenere .input');
const vKeyElement = document.querySelector('#vigenere .key');
const vOutputElement = document.querySelector('#vigenere .output');

const initVTab = () => {
	for (let i = 0; i < vAlphabet.length; i++) {
		let vTabElement = [];
		for (let j = 0; j < vAlphabet.length; j++) {
			vTabElement.push(vAlphabet[(j + i) % vAlphabet.length]);
		}
		vTab.push(vTabElement);
	}
};
initVTab();

const handleVigenere = () => {
	const input = vInputElement.value;
	const key = vKeyElement.value;
	let output = '';
	let coded = '';
	let keyIndex = 0;

	for (let i = 0; i < input.length; i++) {
		if (input[i] != ' ') {
			output += key[keyIndex % key.length];
			keyIndex++;
		} else {
			output += ' ';
		}
	}

	for (let i = 0; i < input.length; i++) {
		if (input[i] != ' ') coded += vTab[vAlphabet.indexOf(input[i].toUpperCase())][vAlphabet.indexOf(output[i].toUpperCase())];
		else coded += ' ';
	}

	vOutputElement.value = coded;
};

vInputElement.addEventListener('change', handleVigenere);
vInputElement.addEventListener('keyup', handleVigenere);
vKeyElement.addEventListener('change', handleVigenere);
vKeyElement.addEventListener('keyup', handleVigenere);
