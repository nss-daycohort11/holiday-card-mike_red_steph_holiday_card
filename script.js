$(document).ready(function(){

	$("#translate").click(function(){
		var englishString = $("#input-text").val();
			englishString = englishString.toLowerCase();
		if ($("select option:selected").val() === "spanish") {
			// Translator.spanishTranslate(englishString);
			// console.log("spanish works");
		}
		if ($("select option:selected").val() === "finnish") {
			// console.log(englishString);

			$("#output").html(Translator.toFinnish(englishString));

		}
		if ($("select option:selected").val() === "swahili") {
			console.log("swahili works");
		}

		




	})

































});
