
$(document).ready(function (){

});



var targetNumber = 9600

$("number-to-guess").text(targetNumber)

var counter = 0
var numberOptions = [7000, 800, 500, 15000]

for (var i = 0; i < numberOptions.length; i++){

	var imageGift = $("<img>");

	imageGift.addClass("gift-image");

	imageGift.attr("src", "assets/images/jewelry" + [i+1] + ".jpeg");

	imageGift.attr("data-giftvalue", numberOptions[i]);

	imageGift.attr("style", "width:317px; height:200px");

	$("#gifts").append(imageGift);
}


var increment = numberOptions[Math.random()];


$(".gift-image").on("click", function() {
	console.log("button was clicked");

	var giftValue = ($(this).attr("data-giftvalue"));
	giftValue = parseInt(giftValue);

	counter += giftValue;

	alert("Amount spent $" + counter);

	if (counter === targetNumber) {
		 alert("Such a Sweetheart! You know the way to her heart!");

	}

	else if (counter < targetNumber) {
		alert("Nice try, but you're still in the dog house!!");

	}

	else if (counter > targetNumber) {
		alert("Whoa, that's a lot! You must have really messed up!!");
	}





});



