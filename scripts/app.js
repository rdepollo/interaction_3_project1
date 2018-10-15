$(document).ready(function() {
  $("#site-container").hide();
  $("#sum-container").hide();
  $(".button").hide();
  var userLocation;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler, {
      enableHighAccuracy: false,
      maximumAge: 60000,
      timeout: 37000
    });
  } else {
    alert('Your browser does not support geolocation.');
  }


  // Function to get position
  function showLocation(position) {
    userLocation = position.coords.latitude + "," + position.coords.longitude;
    console.log(userLocation);
  }

  // Function for handling errors
  function errorHandler(error) {
    // Logs errors to the console
    console.log('Geolocation error : code ' + error.code + ' - ' + error.message);

    // Gives an error message to the user
    alert('An error occurred while fetching location.');
  }

  $('.button').delay(3000).fadeIn(2000);

  function getWeatherData() {
    var weatherUrl = 'https://api.darksky.net/forecast/048ed40e93473de2f3c4b4e7a89d6e9b/' + userLocation;
      
      $.ajax({
            url: "https://geoip-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {
                $('#city').html(location.city + ", " + location.state);
            }
        }); 

    $.ajax({
      url: weatherUrl,
      type: "GET",
      dataType: "jsonp",
      cache: false,
      success: function(data) {
        //        console.log('Data: '+data);
        //$('#main').html('<pre>'+JSON.stringify(data, null, 4) + '</pre>');



        /* VARIABLES RELATED TO TEMPERATURE */

        var apparentTemperature = data.currently.apparentTemperature;
        /* This is the temperature it feels like outside. in celsius  */

        var precipIntensity = data.currently.precipIntensity;
        var cloudCover = data.currently.cloudCover;
        var precipType = data.currently.precipType;
        /* These are all related to precipitation  */

        var windSpeed = data.currently.windSpeed;
        /* wind speed... ya  */

        var shitPoints = 30;
        var tempPoints = 10;
        var precipPoints = 10;
        var windPoints = 10;
        /* The variable used to keep track of points */
        var percentHalf = "0%";
        /* This is a variable that is used to convert the point numbers to percentage strings */
        /* STATEMENTS RELATED TO TEMPERATURE */
        if (apparentTemperature < 65) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < 58) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < 51) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < 44) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < 37) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < -30) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < -23) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < -16) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < -9) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature < -2) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 86.5) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 88) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 89.5) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 91) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 92.5) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 94) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 95.5) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 97) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 98.5) {
          shitPoints--;
          tempPoints--;
        }

        if (apparentTemperature > 100) {
          shitPoints--;
          tempPoints--;
        }

        /* STATEMENTS RELATED TO PRECIPITATION */
        if (precipType == "rain") {
          shitPoints -= 4;
          precipPoints -= 4;
        }

        if (precipType == "snow") {
          shitPoints -= 6;
          precipPoints -= 6;
        }

        if (precipType == "sleet") {
          shitPoints -= 5;
          precipPoints -= 5;
        }

        if (precipIntensity > 0.29) {
          shitPoints -= 2;
          precipPoints -= 2;
        }

        if (cloudCover > 0.49) {
          shitPoints -= 2;
          precipPoints -= 2;
        }

        /* STATEMENTS RELATED TO WIND SPEED */

        if (windSpeed > 4) {
          shitPoints--;
          windPoints--;
        }

        if (windSpeed > 7) {
          shitPoints--;
          windPoints--;
        }

        if (windSpeed > 10) {
          shitPoints--;
          windPoints--;
        }

        if (windSpeed > 13) {
          shitPoints--;
          windPoints--;
        }

        if (windSpeed > 16) {
          shitPoints--;
          windPoints--;
        }

        if (windSpeed > 19) {
          shitPoints--;
          windPoints--;
        }

        if (windSpeed > 22) {
          shitPoints--;
          windPoints--;
        }

        if (windSpeed > 25) {
          shitPoints -= 3;
          windPoints -= 3;
        }

        console.log(shitPoints)
        console.log(tempPoints)
        console.log(precipPoints)
        console.log(windPoints)

        var tempHolder = 10-tempPoints;
        tempHolder.toString()
        var tempPercent = tempHolder + percentHalf
        console.log(tempPercent)
        /* Converts temperature number to a string containing the percentage */

        var precipHolder = 10-precipPoints;
        precipHolder.toString()
        var precipPercent = precipHolder + percentHalf
        console.log(precipPercent)
        /* Converts precipitation number to a string containing the percentage */

        var windHolder = 10-windPoints;
        windHolder.toString()
        var windPercent = windHolder + percentHalf
        console.log(windPercent)
        /* Converts wind number to a string containing the percentage */
        var suckText;

        /* PICK A GENERAL SENTENCE FRAGMENT */
        if (shitPoints <= 30 && shitPoints >= 25) {
          suckText = "SMOKING OUTSIDE WILL DEFINITELY NOT SUCK"
        }

        if (shitPoints < 25 && shitPoints >= 20) {
          suckText = "SMOKING OUTSIDE WON'T SUCK THAT MUCH"
        }

        if (shitPoints < 20 && shitPoints >= 15) {
          suckText = "SMOKING OUTSIDE WILL KINDA SUCK"
        }

        if (shitPoints < 15 && shitPoints >= 10) {
          suckText = "SMOKING OUTSIDE WILL DEFINITELY SUCK"
        }

        if (shitPoints < 10) {
          suckText = "SMOKING OUTSIDE WILL ABSOLUTELY SUCK"
        }

        $("#conditional-header").html( suckText );
        $("#sum1").html( '<span class="head">Currently&#58;</span><br />' + data.minutely.summary );
        $("#sum2").html( '<span class="head">Later today&#58;</span><br />' + data.hourly.summary );
        $('#amt1').css("width", tempPercent);
        $('#amt2').css("width", precipPercent);
        $('#amt3').css("width", windPercent);

        /* Sets height of each bar of graph based on percentageds */

      },
      error: function(request, error) {
        console.log("Request: " + JSON.stringify(request));
      }
    });
    $("#prompt-container").fadeOut();
    $("#site-container").delay(2000).fadeIn();
    $("#sum-container").delay(2000).fadeIn();
  }

  $('.button').click(function() {
    getWeatherData();
  })

});
