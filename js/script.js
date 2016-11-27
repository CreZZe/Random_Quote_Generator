// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var html = ''; //Define the html variabel outside all functions to make it usable anywhere in the program.
var color; //Variabel used for the background color
var quotes = [ //Creates an array to store all the quotes with all the extra information.
	{ quote: 'Just when I thought I was out, they pull me back in.', source: 'Al Pacino', date: '1990', citation: 'The Godfather Part III' },
	{ quote: 'They may take our lives, but they\'ll never take our freedom!', source: 'Mel Gibson', date: '1995', citation: 'Braveheart' },
	{ quote: 'Now is the time to make justice a reality for all of God\'s Children', source: 'Martin Luther King', date: '1963-08-28', citation: 'I Have a Dream' },
	{ quote: 'Here\'s Johnny!', source: 'Jack Nicholson', date: '1980', citation: 'The Shining' },
	{ quote: 'Why so serious?', source: 'The Joker', date: '2008', citation: 'The Dark Knight' }
]


/* ---------- Functions ---------- */

//Function to create a random number between 0 and quotes.length (4 in this case). Will be used as index number in the array.
//Remove the last quote before it prints out a new one to the screen using concatenation.
function getRandomQuote() { 
	return Math.floor( Math.random() * quotes.length);
}

//Get a random number to represent a rgb color value.
function getRandomColor() {
	return Math.floor( Math.random() * 255) + 1;
}

//Calls getRandomQuote() to get a random quote, build the quoteinformation HTML and then prints the quote information (quote, source etc) to the screen using innerHTML on an already existing div id (quote-box).
//Calls getRandomColor() to get a random number later used as a representative to each color value.
function printQuote() {	
	var index = getRandomQuote();
	html = ''; 
	html += '<p class="quote">' + quotes[index].quote + '</p>';
	html += '<p class="source">' + quotes[index].source + '<span class="citation">' + quotes[index].citation + '</span><span class="year">' + quotes[index].date + '</span></p>';
	
	color = 'rgb(' + getRandomColor() + ', ' + getRandomColor() + ', ' + getRandomColor() + ')';
	document.body.style.backgroundColor = color;
	
	
	var quote = document.getElementById('quote-box');
	quote.innerHTML = html;
}

//Call the printQuote which will change quoteinformation and color every third second.
function printQuoteConstant() {
	var interval = window.setInterval(printQuote, 3000);
}