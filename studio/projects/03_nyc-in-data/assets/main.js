// coordinates for Brooklyn
var lat = 40.650002;
var lng = -73.949997;
var URL = `https://api.sunrisesunset.io/json?lat=${ lat }&lng=${ lng }`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		render(data);
	})

function render(data) {
	var sunriseDateObject = new Date(`${ data.results.date } ${ data.results.sunrise }`);
	var nowDateObject = new Date();
	var sunsetDateObject = new Date(`${ data.results.date } ${ data.results.sunset }`);
	var startSeconds = sunriseDateObject.getTime();
	var nowSeconds = nowDateObject.getTime();
	var endSeconds = sunsetDateObject.getTime();
	console.log(startSeconds, nowSeconds, endSeconds);
	
}