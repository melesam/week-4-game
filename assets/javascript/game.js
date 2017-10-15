
$(document).ready(function(){


var targetNumber = 1900
var counter = 0
var wins = 1
var losses = 1
var numberOptions = [800, 500, 100, 1200]
var increment = numberOptions[Math.random()];




for (var i = 0; i < numberOptions.length; i++){

	var imageGift = $("<img>");

	imageGift.addClass("gift-image");

	imageGift.attr("src", "assets/images/jewelry" + [i+1] + ".jpeg");

	imageGift.attr("data-giftvalue", numberOptions[i]);

	imageGift.attr("style", "width:317px; height:200px");

	$("#gifts").append(imageGift);
}



function startGame(){

	counter = 0;
	$("guessedNumber").text(targetNumber);

	function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min)+1);

	var guessedNumber = randomIntFromInterval(20,000);

	$(".amount").text(guessedNumber);

	$("#gifts").on('click', function(){
		counter = counter + parseInt($(this).data("num"));
		$("#total-score").text(counter);


	});	
	}					



}



startGame();

$(".gift-image").on("click", function() {
	console.log("button was clicked");

	var giftValue = ($(this).attr("data-giftvalue"));
	giftValue = parseInt(giftValue);

	counter += giftValue;

	alert("Amount spent $" + counter);

	if (counter === targetNumber) {
		 alert("Such a Sweetheart! You know the way to her heart! YOU WIN");
		 
		 $("#wins").text("Wins: " + wins); 
		 wins++ 


	}

	else if (counter < targetNumber) {
		alert("Keep trying - you're still in the dog house!!");

	}

	else if (counter > targetNumber) {
		alert("Whoa, that's a lot! You must've really messed up! YOU LOSE");
		
		$("#losses").text("Losses: " + losses); 
		losses++


		startGame()
	}


});


$("#restart").on("click", function() {
	startGame();

});




});



