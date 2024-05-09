var lat = 38.907192;
var lng = -77.036873;
var URL = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`;

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        render(data);
    })
    .catch(error => console.error('Error fetching data:', error));


function render(data) {

    // make date objects
    var nowDateObject = new Date();
    var firstLightDateObject = new Date(`${data.results.date} ${data.results.first_light}`);
    var dawnDateObject = new Date(`${data.results.date} ${data.results.dawn}`);
    var sunriseDateObject = new Date(`${data.results.date} ${data.results.sunrise}`);
    var solarNoonDateObject = new Date(`${data.results.date} ${data.results.solar_noon}`);
    var goldenHourDateObject = new Date(`${data.results.date} ${data.results.golden_hour}`);
    var sunsetDateObject = new Date(`${data.results.date} ${data.results.sunset}`);
    var duskDateObject = new Date(`${data.results.date} ${data.results.dusk}`);
    var lastLightDateObject = new Date(`${data.results.date} ${data.results.last_light}`);
    var dayStartObject = new Date(`${data.results.date} 00:00:00`);	// set dayStart to 00:00:00 (today)
    var dayEndObject = new Date(`${data.results.date} 00:00:00`);	// create dayEnd with an equal value
    dayEndObject.setDate(dayEndObject.getDate() + 1);		// finally, add 1 day to get an accurate value for dayEnd
  
     

    // get time in milliseconds (UNIX time)
    var now = nowDateObject.getTime();
    var firstLight= firstLightDateObject.getTime();
    var dawn= dawnDateObject.getTime();
    var sunrise= sunriseDateObject.getTime();
    var solarNoon = solarNoonDateObject.getTime();
    var goldenHour = goldenHourDateObject.getTime();
    var sunset = sunsetDateObject.getTime();
    var dusk = duskDateObject.getTime();
    var lastLight = lastLightDateObject.getTime();
    var dayStart = dayStartObject.getTime();
    var dayEnd = dayEndObject.getTime();   
    

    // define start and end variables
    var start;
    var end;
    var startColor;
    var middleColor;
    var endColor;
    var middleColorPosition;
    var fontColor;
    var selectedTextColor;


    // test for time periods
    if (now < firstLight) {
        // between day start and first light

        start = dayStart;
        end = firstLight;
        startColor = "#0D1724";
        middleColor = "#0D1724"; 
        endColor = "#000000";
        fontColor = "#000000";
        selectedTextColor = "rgb(47, 255, 0)";

    } else if (now < dawn) {
        
        start = firstLight;
        end = dawn;
        startColor = "#E8CDF2"; 
        middleColor = "#0D1724"; 
        endColor = "#0D1724";
        fontColor = "#000000";
        selectedTextColor = "rgb(47, 255, 0)";

    } else if (now < sunrise) {
        
        start = dawn;
        end = sunrise;
        startColor = "#FF8451"; 
        middleColor = "#69A3FB"; 
        endColor = "#E8CDF2";
        fontColor = "#000000";
        selectedTextColor = "rgb(47, 255, 0)";
    }
    
    else if (now < solarNoon) {

        start = sunrise;
        end = solarNoon;
        startColor = "#3693FF"; 
        middleColor = "#8FB0F9"; 
        endColor = "#E8CDF2";
        fontColor = "#E6E6E6";
        selectedTextColor = "rgb(47, 255, 0)";

    }else if (now < goldenHour) {

        // between solar noon and golden hour
        start = solarNoon;
        end = goldenHour;
        startColor = "#FF8451"; 
        middleColor = "#3693FF"; 
        endColor = "#8FB0F9";
        fontColor = "E6E6E6";   

    } else if (now < sunset) {

        // between golden hour and sunset
        start = goldenHour;
        end = sunset;
        startColor = "#F6BD4D"; // Example start color for this phase
        middleColor = "#FF8451"; // Example middle color for this phase
        endColor = "#3693FF";

    } else if (now < dusk ) {

        // between sunset and dusk
        start = sunset;
        end = dusk;
        startColor = "#2F3554"; // Example start color for this phase
        middleColor = "#1A4A89"; // Example middle color for this phase
        endColor = "#FF6C2F";

    } else if (now < lastLight) {

        // between dusk and last light
        start = dusk;
        end = lastLight;
        startColor = "#000000"; // Example start color for this phase
        middleColor = "#0D356B"; // Example middle color for this phase
        endColor = "#1A4A89";


    } else if (now < dayEnd) {

        // between last light and end of day
        start = lastLight;
        end = dayEnd;
        startColor = "#0000FF"; 
        middleColor = "#00FF00"; 
        endColor = "#FFFF00";
    }


    middleColorPosition = map(now, start, end, 0, 100);

    var currentPosition = map(now, start, end, 0, 100);

    document.body.style.background = `radial-gradient( ${startColor} 0%, ${middleColor} ${middleColorPosition}%, ${endColor} 100%)`;

    console.log(currentPosition);

    document.querySelector('body').style.color = fontColor;

    var style = document.createElement('style');
    style.innerHTML = `::selection { background-color: ${selectedTextColor}; }`;
    document.head.appendChild(style);

}


function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
