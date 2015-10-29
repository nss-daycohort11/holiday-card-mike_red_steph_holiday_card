$(document).ready(function(){

	$("#translate").click(function(){
		var englishString = $("#input-text").val();
			englishString = englishString.toLowerCase();
		if ($("select option:selected").val() === "spanish") {
			$("#output").html(Translator.spanishTranslate(englishString));
			console.log(englishString);
		}
		if ($("select option:selected").val() === "finnish") {
			$("#output").html(Translator.toFinnish(englishString));
			console.log(englishString);
		}
		if ($("select option:selected").val() === "swahili") {
			$("#output").html(Translator.toSwahili(englishString));
			console.log(englishString);
		}
	})
});
