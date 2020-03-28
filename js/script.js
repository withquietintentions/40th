// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "3. 'True____American' (plural)",
					answer: "blues",
					position: 3,
					orientation: "across",
					startx: 11,
					starty: 2
				},
			 	{
					clue: "5. Mexican Beer for Beachside",
					answer: "corona",
					position: 5,
					orientation: "across",
					startx: 9,
					starty: 4
				},
				{
					clue: "6. programming language/free software for environment statistical computing and graphics",
					answer: "r",
					position: 6,
					orientation: "across",
					startx: 8,
					starty: 5
				},
				{
					clue: "7. living in the ___________ moment (plural)",
					answer: "presents",
					position: 7,
					orientation: "across",
					startx: 4,
					starty: 6
				},
				{
					clue: "9. Female Sheep",
					answer: "ewe",
					position: 9,
					orientation: "across",	
					startx: 14,
					starty: 7
				},
				{
					clue: "11. “king of precious stones” in Sankrit (plural)",
					answer: "rubies",
					position: 11,
					orientation: "across",
					startx: 1,
					starty: 8
				},
				{
					clue: "12. Rumi's poems are thought to be about this",
					answer: "love",
					position: 12,
					orientation: "across",
					startx: 9,
					starty: 8
				},

				{
					clue: "1. Your April Fools Day",
					answer: "anniversary",
					position: 1,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "2. due to",
					answer: "because",
					position: 2,
					orientation: "down",
					startx: 14,
					starty: 1
				},
				{
					clue: "4. Rain Checking",
					answer: "postponing",
					position: 4,
					orientation: "down",
					startx: 10,
					starty: 3
				},
				{
					clue: "6. Color made from Mexican Bug, hoarded by the church in the 15th Century",
					answer: "red",
					position: 6,
					orientation: "down",
					startx: 8,
					starty: 5
				},
				{
					clue: "8. Millenial Slang word for 'you don't say!?'",
					answer: "really",
					position: 8,
					orientation: "down",
					startx: 12,
					starty: 7
				},
				{
					clue: "10. Tiny and Scottish",
					answer: "wee",
					position: 10,
					orientation: "down",
					startx: 15,
					starty: 7
				},
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
