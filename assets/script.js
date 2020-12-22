// dom variables
var dateEl = $("#date");
var iconEl = $("#icon");
var tempEl = $("#temp");
var humidityEl = $("#humidity");
var cityEl = $("#cityHeader");
var citySearch = $("#cityToSearch");

$(document).ready(function () {
	$("button").on("click", function () {
		console.log("clicked!");
		var cityName = "Miami";
		var queryURL =
			"https://api.openweathermap.org/data/2.5/weather?q=" +
			cityName +
			"&appid=" +
			"2c429fd1ad534c0117878a68f090d215";
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			console.log("Hello World!");
			console.log(response);
		});
	});
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
