$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup= "Current Forecast: " + data.currently.summary;
    var temp= "Current Temperature: " + data.currently.apparentTemperature;
    var tempb= "Tomorrow's Forecast: " + data.daily.data[1].summary + ": " + data.daily.data[1].temperatureMax + " / " + data.daily.data[1].temperatureMin;
    var tempc= "Two-Day Forecast: " + data.daily.data[2].summary + ": " + data.daily.data[2].temperatureMax + " / " + data.daily.data[2].temperatureMin;
    var tempd= "Three-Day Forecast: " + data.daily.data[3].summary + ": " + data.daily.data[3].temperatureMax + " / " + data.daily.data[3].temperatureMin;

    $('.current-temp').html(temp);
    $('.tomorrow-weather').html(tempb);
    $('.2day-weather').html(tempc);
    $('.3day-weather').html(tempd);
        // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
