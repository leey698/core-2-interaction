var lat = 38.907192;
var lng = -77.036873;
var URL = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`;

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderGradient(data); // Call renderGradient with the fetched data
    })
    .catch(error => console.error('Error fetching data:', error));

function renderGradient(data) {
    var nowDateObject = new Date();
    console.log("Current time:", nowDateObject);

    // Debug statements to print out relevant times
    console.log("solar_noon:", new Date(`${data.results.date} ${data.results.solar_noon}`));
    console.log("sunset:", new Date(`${data.results.date} ${data.results.sunset}`));
    console.log("dusk:", new Date(`${data.results.date} ${data.results.dusk}`));
    console.log("last_light:", new Date(`${data.results.date} ${data.results.last_light}`));
    
    if (nowDateObject.getTime() < new Date(`${data.results.date} ${data.results.solar_noon}`).getTime()) {
        // Before solar noon
        startSeconds = new Date(`${data.results.date} ${data.results.golden_hour}`).getTime();
        endSeconds = new Date(`${data.results.date} ${data.results.sunset}`).getTime();
        colorStart = '#FF8451';
        colorMiddle = '#3693FF';
        colorEnd = '#8FB0F9';
    } else if (nowDateObject.getTime() < new Date(`${data.results.date} ${data.results.sunset}`).getTime()) {
        // Between sunset and dusk
        startSeconds = new Date(`${data.results.date} ${data.results.sunset}`).getTime();
        endSeconds = new Date(`${data.results.date} ${data.results.dusk}`).getTime();
        colorStart = '#F6BD4D';
        colorMiddle = '#FF8451';
        colorEnd = '#3693FF';
    } else if (nowDateObject.getTime() < new Date(`${data.results.date} ${data.results.dusk}`).getTime()) {
        // Between dusk and last light
        startSeconds = new Date(`${data.results.date} ${data.results.dusk}`).getTime();
        endSeconds = new Date(`${data.results.date} ${data.results.last_light}`).getTime();
        colorStart = '#0D1724';
        colorMiddle = '#0D1724';
        colorEnd = '#1A4A89';
    } else {
        // Between Last light and first light
        startSeconds = new Date(`${data.results.date} ${data.results.last_light}`).getTime(); // Example, adjust as needed
        endSeconds = new Date(`${data.results.date} ${data.results.first_light}`).getTime(); // Example, adjust as needed
        colorStart = '#000000';
        colorMiddle = '#000000';
        colorEnd = '#1A4A89';
    }

    console.log("Current time:", nowDateObject);
    console.log("Start time:", new Date(startSeconds));
    console.log("End time:", new Date(endSeconds));

    
    var nowSeconds = nowDateObject.getTime();
    var moving = map(nowSeconds, startSeconds, endSeconds, 0, 100); // Map to 0-100 percent
    var gradientElement = document.querySelector('body');
    gradientElement.style.background = `radial-gradient(50% 50% at 50% 50%, ${colorStart} 0%, ${colorMiddle} ${moving}%, ${colorEnd} 100%)`;
}

// Function to map a value from one range to another
function map(value, start1, end1, start2, end2) {
    let mappedValue = start2 + (end2 - start2) * ((value - start1) / (end1 - start1));
    // Ensure the mapped value is within the range of 0 to 100
    if (mappedValue < 0) {
        mappedValue = 0; // Set to 0 if below 0
    } else if (mappedValue > 100) {
        mappedValue = 100; // Set to 100 if above 100
    }
    console.log('Mapped value:', mappedValue); // Debug log
    return mappedValue;
}
