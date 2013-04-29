$(document).ready(function(){
	'use strict';
	
	//Questions for the test
	function nerdTest(){
		
		//Variables
		var testQuestions, question, i;
		
		//For Array
		i=0;
		
		//Test Questions
		testQuestions = [ 
		'Who was Bilbo\'s newphes?', 
		'What was the name of Frodo\'s best friend?', 
		'Who was the bad guy?', 
		'What was the name of the wizard?'
		];
		
		//Randomizes test questions
		question = testQuestions.sort(function(){ 
			return Math.random()-0.5; 
		});
	
		//Returns random question
		return(question[i]);
	} 

	//Displays questions
	function showQuestion(){
		$('#testQuestion').text(nerdTest());
	}
	
	//Calls function to display questions
	showQuestion();
});






function testAnswers(){
	'use strict';
	
	var answers1, answers2, answers3, answers4;
	//Test Answer Arrays
	answers1 = ['Frodo', 'Mordor', 'Lando', 'Beiber'];
	answers2 = ['Sam', 'Tolkien', 'Boba', 'Batman'];
	answers3 = ['Sauron', 'Borg', 'Darth Maul', 'LeBron'];
	answers4 = ['Gandalf', 'Merlin', 'Yoda', 'David Blane'];
}




	