// Set the date and time for the countdown timer
var countDownDate = new Date("Apr 28, 2023 08:00:00").getTime();

// Update the countdown timer every second
var x = setInterval(function() {
  
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining until the countdown date and time
  var distance = countDownDate - now;

  // Calculate the number of days, hours, minutes, and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer in the HTML element with the ID "demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown timer has expired, clear the interval and display "EXPIRED"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);