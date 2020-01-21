$(document).ready(console.log("document ready!"));
	$("button").click(function() {
	    $.getJSON("http://api.icndb.com/jokes/random", function(result) {
			console.log(result);
			$("#joke").html(result.value.joke)
		});
	})