const cAlphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';

const cInputElement = document.querySelector('#cezar .input');
const cOffsetElement = document.querySelector('#cezar .offset');
const cOutputElement = document.querySelector('#cezar .output');

const handleCezar = () => {
	const input = cInputElement.value;
	const offset = cOffsetElement.value;
	if (input && offset && offset > 0) {
		let output = '';
		for (let i = 0; i < input.length; i++) {
			if (input[i] != ' ') {
				const letter = input[i].toUpperCase();
				const letterIndex = cAlphabet.indexOf(letter);
				output += cAlphabet[(letterIndex + offset) % cAlphabet.length];
			} else {
				output += ' ';
			}
		}

		cOutputElement.value = output;
	}
};

const handleDecodeCezar = () => {
	const input = cOutputElement.value;
	const offset = cOffsetElement.value;
	if (input && offset && offset > 0) {
		let output = '';
		for (let i = 0; i < input.length; i++) {
			if (input[i] != ' ') {
				const letter = input[i].toUpperCase();
				const letterIndex = cAlphabet.indexOf(letter);
				output += cAlphabet[Math.abs((letterIndex - offset) % cAlphabet.length)];
			} else {
				output += ' ';
			}
		}

		cInputElement.value = output;
	}
};

cInputElement.addEventListener('keyup', handleCezar);
cOffsetElement.addEventListener('change', handleCezar);
cOffsetElement.addEventListener('keyup', handleCezar);
cOutputElement.addEventListener('keyup', handleDecodeCezar);
