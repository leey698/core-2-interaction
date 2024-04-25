var lat = 38.907192;
var lng = -77.036873;
var URL = `https://api.sunrisesunset.io/json?lat=${ lat }&lng=${ lng }`;

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        render(data);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to render gradient
function render(data) {
    var solarNoonDateObject = new Date(`${data.results.date} ${data.results.solar_noon}`);
    var nowDateObject = new Date();
    var sunsetDateObject = new Date(`${data.results.date} ${data.results.sunset}`);
    var startSeconds = solarNoonDateObject.getTime();
    var nowSeconds = nowDateObject.getTime();
    var endSeconds = sunsetDateObject.getTime();
    console.log(startSeconds, nowSeconds, endSeconds);
    var angle = map(nowSeconds, startSeconds, endSeconds, 0, 360); // Map to 0-360 degrees
    var gradientElement = document.querySelector('.gradient');
    gradientElement.style.background = `conic-gradient(from 180deg at 50% 50%, #082245 0.035999999090563506deg, #347DDE ${angle}deg, #89BFFF 359.9639940261841deg)`;
}

// Function to map a value from one range to another
function map(value, start1, end1, start2, end2) {
    let mappedValue = start2 + (end2 - start2) * ((value - start1) / (end1 - start1));
    if (mappedValue < 0) {
        mappedValue += 360; // Ensure the mapped value is within 0 to 360 degrees
    } else if (mappedValue >= 360) {
        mappedValue %= 360; // Ensure the mapped value is within 0 to 360 degrees
    }
    console.log('Mapped value:', mappedValue); // Debug log
    return mappedValue;
}
