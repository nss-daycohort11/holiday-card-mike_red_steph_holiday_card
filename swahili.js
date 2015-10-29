var Translator = (function (translator) {

	var input = [];
	var swahili = {
		"merry": "sherehe",
		"christmas": "Krismasi",
		"and": "na",
		"happy": "furaha",
		"new": "mpya",
		"year": "mwaka"
	};

	translator.toSwahili = function (text) {
		input = text.split(" ");
		var output = [];
		console.log(input);
			for (var i = 0; i < input.length; i++){
				var englishWord	= input[i];
				var swahiliOut = swahili[englishWord];
				output.push(swahiliOut);
				// console.log(input[i]);
				// console.log(output);
			}
				var textOutput = output.join(" ");
				return textOutput;
			
	};

  return translator;

})(Translator);

