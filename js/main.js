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
		"choices": ["Airforce", "NASA", "F.B.I.", "Navy"],
		"questNumb": 1,
		"correct": 0,
		},
		{
		"question": "Emma Frost is in a relationship with which original member of the X-Men....you're not even reading this, are you? The answer is Scott Summers",
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
		var answers = $("input[type='radio']:checked").val();
		$('.she-hulk-answers').fadeIn();
		if(answers == gameQuestions[currentQuestion].correct) {
			$('.she-hulk-question').fadeOut();
			$('.she-hulk-bubbles p').text("Yes! Bruce is my cousin and also the reason I have my powers!")
			numbCorrect++
		}
		else if(answers == 0) {
			$('.she-hulk-question').fadeOut();
			$('.she-hulk-bubbles p').text("Peter Parker? Spider-Man? Good friend, yes. Am I related to him? No.");
		}
		else if(answers == 1) {
			$('.she-hulk-question').fadeOut();
			$('.she-hulk-bubbles p').text("Mr. Fantastic? I've been a part of the Fantastic Four, but Reed and I are not related.")
		}
		else if(answers == 3) {
			$('.she-hulk-question').fadeOut();
			$('.she-hulk-bubbles p').text("Nova's awesome, but no we're not relations.")
		}
		else {
			$('.she-hulk-bubbles p').text("How about actually choosing an answer?")
		};
		$("input[type='radio']").removeAttr("checked");
	});
	$('.she-hulk-bubbles .continue-buttons').on('click', function() {
		console.log('click11');
		$('.she-hulk-page').hide();
		$('.captain-marvel-page').show();
		currentQuestion++;
	});
	$('.captain-marvel-question .answer-buttons').on('click', function() {
		console.log('click2');
		var answers = $("input[type='radio']:checked").val();
		$('.captain-marvel-answers').fadeIn();
		if(answers == gameQuestions[currentQuestion].correct) {
			$('.captain-marvel-question').fadeOut();
			$('.captain-marvel-bubbles p').text("Absolutely correct. It's also during my time at the airforce that Captain Marvel saved my life and I inherited his genetic structure and my powers.")	
			numbCorrect++
		}
		else if(answers == 1) {
			$('.captain-marvel-question').fadeOut();
			$('.captain-marvel-bubbles p').text("Nope. I did work for NASA at one point, but I didn't start my career there.")
		}
		else if(answers == 2) {
			$('.captain-marvel-question').fadeOut();
			$('.captain-marvel-bubbles p').text("No, can't say I was ever in the F.B.I.")
		}
		else if(answers == 3) {
			$('.captain-marvel-question').fadeOut();
			$('.captain-marvel-bubbles p').text("I'm a fantastic pilot, not a fantastic swimmer.")
		}
		else {
			$('.captain-marvel-bubbles p').text("You know what would be cool? If you actually selected an answer before hitting the answer button!")
		}
		$("input[type='radio']").removeAttr("checked");
	});
	$('.captain-marvel-bubbles .continue-buttons').on('click', function() {
		console.log('click22');
		$('.captain-marvel-page').hide();
		$('.emma-frost-page').show();
		currentQuestion++;
	});
	$('.emma-frost-question .answer-buttons').on('click', function() {
		console.log('click3');
		var answers = $("input[type='radio']:checked").val();
		$('.emma-frost-answers').fadeIn();
		if(answers == gameQuestions[currentQuestion].correct) {
			$('.emma-frost-question').fadeOut();
			$('.emma-frost-bubbles p').text("Why do you know so much about my love life? Yes, Cyclops and I officially became an item when I was the headmistress at the Xavier Institute. What were we before that? Shut up. That's what.")
			numbCorrect++
		}
		else if(answers == 0) {
			$('.emma-frost-question').fadeOut();
			$('.emma-frost-bubbles p').text("Look, I may have strong psychic powers that can bend a man's will, but even I wouldn't be able to pull that off!");
		}
		else if(answers == 1) {
			$('.emma-frost-question').fadeOut();
			$('.emma-frost-bubbles p').text("Um. No.")
		}
		else if(answers == 3) {
			$('.emma-frost-question').fadeOut();
			$('.emma-frost-bubbles p').text("Pervert!");
		}
		else {
			$('.emma-frost-bubbles p').text("My psionic abilities are telling me that you didn't make a selection.")
		}
		$("input[type='radio']").removeAttr("checked");
	});
	$('.emma-frost-bubbles .continue-buttons').on('click', function() {
		console.log('click33');
		$('.emma-frost-page').hide();
		$('.spider-woman-page').show();
		currentQuestion++;
	});
	$('.spider-woman-question .answer-buttons').on('click', function() {
		console.log('click4');
		var answers = $("input[type='radio']:checked").val();
		$('.spider-woman-answers').fadeIn();
		if(answers == gameQuestions[currentQuestion].correct) {
			$('.spider-woman-question').fadeOut();
			$('.spider-woman-bubbles p').text("Named after Wolverine's daughter and Nancy Drew, I've survived series cancellations and overcome usurpers to my name only to remain the one, true Spider-Woman!")
			numbCorrect++;
		}
		else if(answers == 0) {
			$('.spider-woman-question').fadeOut();
			$('.spider-woman-bubbles p').text("Jennifer Walters is She-Hulk. Haven't you been paying attention?");
		}
		else if(answers == 1) {
			$('.spider-woman-question').fadeOut();
			$('.spider-woman-bubbles p').text("No. Jean Grey is one of the original X-Men.");
		}
		else if(answers == 2) {
			$('.spider-woman-question').fadeOut();
			$('.spider-woman-bubbles p').text("Nope. Why don't you go back to the second question to remind yourself who Carol Danvers actually is?")
		}
		else {
			$('.spider-woman-bubbles p').text("By now you really should know that you need to make a selection first!")
		}
		$("input[type='radio']").removeAttr("checked");
	});
	$('.spider-woman-bubbles .continue-buttons').on('click', function() {
		console.log('click44');
		$('.spider-woman-page').hide();
		$('.results p').html("Congratulations! <br> You finished the quiz and got " + numbCorrect + " out of 4 questions correct!")
		$('.last-page').show();
	});
})
