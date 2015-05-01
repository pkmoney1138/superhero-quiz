$(document).ready(function() {
	//quiz question array
	var gameQuestions = [{
		question: "Jennifer Walters a.k.a She-Hulk is related to what famous Marvel character?",
		choices: ["Peter Parker", "Reed Richards", "Bruce Banner", "Richard Rider"],
		questNumb: 0,
		correct: 2,
		},
		{
		question: "Ms/Captain Marvel, Carol Danvers, began her career by joining what organization?",
		choices: ["Airforce", "Army", "F.B.I.", "Navy"],
		questNumb: 1,
		correct: 0,
		},
		{
		question: "Emma Frost dated which original member of the X-Men....you're not even reading this, are you? Can't blame ya. The answers is Scott Summers",
		choices: ["Bobby Drake", "Charles Xavier", "Scott Summers", "Jean Grey...wait, what?!?!" ],
		questNumb: 2,
		correct: 2,
		},
		{
		question: "Which one of these women is the original (and still the most popular) Spider-Woman?",
		choices: ["Jennifer Walters", "Jean Grey", "Carol Danvers", "Jessica Drew"],
		questNumb: 3,
		correct: 3,
	}]
	//start-button code
	$('.start-button').on('click', function() {
		console.log('click');
		$('.cover-page').hide();
		$('.she-hulk-page').show();
	});
	$('.she-hulk-question .answer-buttons').on('click', function() {
		console.log('click');
		$('.she-hulk-answers').show();
	});
	$('.she-hulk-bubbles .continue-buttons').on('click', function() {
		console.log('click');
		$('.she-hulk-page').hide();
		$('.captain-marvel-page').show();
	});
	$('.captain-marvel-question .answer-buttons').on('click', function() {
		console.log('click');
		$('.captain-marvel-answers').show();
	});
	$('.captain-marvel-bubbles .continue-buttons').on('click', function() {
		console.log('click');
		$('.captain-marvel-page').hide();
		$('.emma-frost-page').show();
	});
	$('.emma-frost-question .answer-buttons').on('click', function() {
		console.log('click');
		$('.emma-frost-answers').show();
	});
	$('.emma-frost-bubbles .continue-buttons').on('click', function() {
		console.log('click');
		$('.emma-frost-page').hide();
		$('.spider-woman-page').show();
	});
})
