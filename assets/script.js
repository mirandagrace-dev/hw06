// // get query url
// var queryURL =
// 	"api.openweathermap.org/data/2.5/weather?q=" +
// 	cityName +
// 	"&appid=e7a32108462aab31f968bcdc784f383c";

// dom variables
var dateEl = $("#date");
var iconEl = $("#icon");
var tempEl = $("#temp");
var humidityEl = $("#humidity");
var cityEl = $("#cityHeader");
var citySearch = $("#cityToSearch");

$(document).ready(function () {
	$(cityEl).text("Atlanta");
	console.log(citySearch);

	$("#button").click(function (e) {
		e.preventDefault();
		$(cityEl).text(citySearch);
		console.log("help");
		console.log(cityEl);
    });
    
    $.ajax

});

//js variables

//get city name from user
//use dom manipulation to create input and to pass in the city name to the queryURL

//use that input to call the queryUrl and show the results in a bootstrap card?
//put bootstrap layouts in html and give them ids
//get a blank card to show up onclick
//get something to save to local storage
//the saved cities get stored in an array
// when a stored city is deleted, remove from the array
