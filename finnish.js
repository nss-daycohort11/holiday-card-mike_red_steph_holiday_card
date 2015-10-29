var Translator = (function () {
	var lexicon = { 
		"merry": "iloinen",  
		"christmas": "joulu",
		"and": "ja",
		"happy": "onnellinen",
		"new": "uusi",
		"year": "vuosi"
		};
	var input = [];
	var output = [];

	return {
		toFinnish: function (text) {
			input = text.split(" "); 
			
			for (var i = 0; i < input.length; i++ ) {
				var englishWord = input[i];
				var finnishWord = lexicon[englishWord];
				output.push(finnishWord);
				}
				var textOutput = output.join(" ");
				return textOutput;
			}
		};
})();

// var testText = "merry christmas and happy new year";

// console.log("TESTING", Translator.toFinnish(testText));


