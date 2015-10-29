var Translator = (function (translator) {
	var input = [];
	var output = [];
	var spanishLexicon = {
		"Merry": "Feliz",
		"Christmas": "Navidad"
	};

	translator.spanishTranslate = function (text) {
		input = text.split(" "); 
		console.log(input);
		for (var i = 0; i <= spanishLexicon.length; i++ ) {
			"replace(for keys inside lexinton)"
		}
	};


return translator;

})(Translator);

