// VARABLES
// -------------------------

var key = '3d3e95fc05fc7f39e8e200548823304e';
var zip = 10011;

// API URL
// -------------------------

var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${ zip }&units=imperial&appid=${ key }`;

// FETCH REQUEST
// -------------------------

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        render(data);
    })


// RENDER FUNCTION
// -------------------------

function render(data) {

    // get html elements
    var containerElement = document.querySelector('.Container');
    var weatherVaneElement = document.querySelector('.WeatherVane');
    var infoElement = document.querySelector('.Info');

    // edit info element
    infoElement.innerHTML = `
        <p>${ zip }</p>
        <p>Temp: ${ data.main.temp } F</p>
        <p>Wind Direction: ${ data.wind.deg } deg</p>
        <p>Wind Speed: ${ data.wind.speed } mph</p>
    `;

    // edit the container
    containerElement.style.background = `hsl(${ data.main.temp }, 100%, 50%)`;

    // edit the weather
    weatherVaneElement.style.transform = `rotate(${ data.wind.deg}deg)`;

    weatherVaneElement.style.animationDuration = `${ data.wind.speed /20 }s`;

    console.log(data);
}