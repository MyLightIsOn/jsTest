$(document).ready(function(){
	"use strict";
	
//Stores all of the quesitons	
	var questions = [ 
	"Who was Bilbo's newphes?", 
	"What was the name of Frodo's best friend?", 
	"Who was the bad guy?", 
	"What was the name of the wizard?"
	];
	
	questions.sort(function(){ 
		return Math.random()-0.5; 
	}); 
	
	console.log(questions);
});




