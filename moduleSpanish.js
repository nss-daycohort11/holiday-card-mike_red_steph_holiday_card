var Translator = (function (translator) {
	//user input text
	var input = [];
	//dictionary output text
	//dictionary keys with values
	var spanishLexicon = {
		"merry": "feliz",
		"christmas": "navidad",
		"and": "y",
		"happy": "feliz",
		"new": "nuevo",
		"year": "año"
	};

	//dictionary 
	translator.spanishTranslate = function (text) {
		input = text.split(" "); 
		var output = [];
		console.log(input);
		//looping the text input from the user to find matching keys
		for (var i = 0; i < input.length; i++) {
			  var englishWord = input[i];
			  //pushing the value into output and replacing text input with mew key value spanishLexicon[englishWord]
              output.push(spanishLexicon[englishWord]);
			}
			var textOutput= output.join(" ");
			return textOutput;	
	};

return translator;

})(Translator);



