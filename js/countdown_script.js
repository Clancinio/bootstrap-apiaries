/******* 2.4.6.a - Use of variables, arithmetic, comparison and logical operators, subroutines, functions, arrays, conditional statements, conditional operators, running time commands with system clock. ********/
/*******2.4.6.b - Use of system date (example: clock, countdown timer to an event) on your web site. *********/

var theCountdownDate = new Date("Jan 1, 2020, 14:00:00").getTime();

var theIntervalFunction = setInterval(function() {

        var theNowTimeDate = new Date().getTime();

        var theDistance = theCountdownDate - theNowTimeDate;
        var seconds = Math.floor(theDistance / 1000);
        var mins = Math.floor(seconds / 60);
        var hours = Math.floor(mins / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        mins %= 60;
        seconds %= 60;

        hours = (hours < 10) ? "0" + hours : hours;
        mins = (mins < 10) ? "0" + mins : mins;
        seconds = (seconds < 10) ? "0" + seconds : seconds;



        document.getElementById("countdown-clock").innerHTML = "Days: " + days + " | " + " Hours: " + hours + " | " + " Minutes: " + mins + " | " + " Seconds: " + seconds;

        if (theDistance = 0) {
            clearInterval(theIntervalFunction);
            document.getElementById("countdown-clock").innerHTML = "THIS IS A BIG ANNOUNCMENT!"
        }
    },
    1000);