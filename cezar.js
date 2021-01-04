const cezarAlphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ';

const inputElement = document.querySelector('#cezar .input');
const offsetElement = document.querySelector('#cezar .offset');
const outputElement = document.querySelector('#cezar .output');

const handleCezar = () => {
	const input = inputElement.value;
	const offset = offsetElement.value;
	if (input && offset && offset > 0) {
		let output = '';
		for (let i = 0; i < input.length; i++) {
			const letter = input[i].toUpperCase();
			const letterIndex = cezarAlphabet.indexOf(letter);
			output += cezarAlphabet[(letterIndex + offset) % cezarAlphabet.length];
		}

		outputElement.value = output;
	}
};

inputElement.addEventListener('change', handleCezar);
inputElement.addEventListener('keyup', handleCezar);
offsetElement.addEventListener('change', handleCezar);
offsetElement.addEventListener('keyup', handleCezar);
