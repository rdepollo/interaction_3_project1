// Simple Timer
var timer = {
  seconds: null,
  minutes: null,
  hour: null,
  date: null,
  month: null,
  year: null,
  meridiem: null,
  day: null,
  get: function(type) {
    return timer[type];
  },
  update: function() {
    var now = new Date();
    timer.seconds = now.getSeconds();
    timer.minutes = now.getMinutes();
    timer.hour = now.getHours();
    timer.date = now.getDate();
    timer.month = now.getMonth();
    timer.year = now.getFullYear();
    timer.day = now.getDay();
    if (timer.hour > 11) {
      timer.meridiem = "PM";
    } else {
      timer.meridiem = "AM";
    }
  },
  start: function() {
    window.console.log("Timer started");
    timer.update();
    setInterval(timer.update, 1000);
  }
};
timer.start();