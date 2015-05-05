$(document).ready(function() {
	//quiz question array
	var gameQuestions = [
		{
		"question": "Jennifer Walters a.k.a She-Hulk is related to what famous Marvel character?",
		"choices": ["Peter Parker", "Reed Richards", "Bruce Banner", "Richard Rider"],
		"questNumb": 0,
		"correct": 2,
		},
		{
		"question": "Ms/Captain Marvel, Carol Danvers, began her career by joining what organization?",
		"choices": ["Airforce", "Army", "F.B.I.", "Navy"],
		"questNumb": 1,
		"correct": 0,
		},
		{
		"question": "Emma Frost dated which original member of the X-Men....you're not even reading this, are you? The answer is Scott Summers",
		"choices": ["Bobby Drake", "Charles Xavier", "Scott Summers", "Jean Grey...wait, what?!?!" ],
		"questNumb": 2,
		"correct": 2,
		},
		{
		"question": "Which one of these women is the original (and still the most popular) Spider-Woman?",
		"choices": ["Jennifer Walters", "Jean Grey", "Carol Danvers", "Jessica Drew"],
		"questNumb": 3,
		"correct": 3,
		}
	]
	//global variables
	var numbCorrect = 0;
	var currentQuestion = 0;
	
	//functions
	function questionAnswers() {
		var answers = $("input[type='radio']:checked").val();
		if(answers == gameQuestions[currentQuestion].correct) {
			console.log('correct');
			numbCorrect++;
		}
		else {
			console.log('not correct');
		};
		$("input[type='radio']").removeAttr("checked");
	};
	//buttons
	$('.start-button').on('click', function() {
		console.log('click');
		$('.cover-page').hide();
		$('.she-hulk-page').show();
	});
	$('.she-hulk-question .answer-buttons').on('click', function() {
		console.log('click1');
		questionAnswers();		
		$('.she-hulk-answers').fadeIn();
		$('.she-hulk-question').fadeOut();
		
	});
	$('.she-hulk-bubbles .continue-buttons').on('click', function() {
		console.log('click11');
		$('.she-hulk-page').hide();
		$('.captain-marvel-page').show();
		currentQuestion++;
	});
	$('.captain-marvel-question .answer-buttons').on('click', function() {
		console.log('click2');
		questionAnswers();
		$('.captain-marvel-answers').fadeIn();
		$('.captain-marvel-question').fadeOut();
	});
	$('.captain-marvel-bubbles .continue-buttons').on('click', function() {
		console.log('click22');
		$('.captain-marvel-page').hide();
		$('.emma-frost-page').show();
		currentQuestion++;
	});
	$('.emma-frost-question .answer-buttons').on('click', function() {
		console.log('click3');
		questionAnswers();
		$('.emma-frost-answers').fadeIn();
		$('.emma-frost-question').fadeOut();
	});
	$('.emma-frost-bubbles .continue-buttons').on('click', function() {
		console.log('click33');
		$('.emma-frost-page').hide();
		$('.spider-woman-page').show();
		currentQuestion++;
	});
	$('.spider-woman-question .answer-buttons').on('click', function() {
		console.log('click4');
		questionAnswers();
		$('.spider-woman-answers').fadeIn();
		$('.spider-woman-question').fadeOut();
	});
	$('.spider-woman-bubbles .continue-buttons').on('click', function() {
		console.log('click44');
		$('.spider-woman-page').hide();
		$('.last-page').show();
	});
})
