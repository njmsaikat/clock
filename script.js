const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 10;
let minPosition = 50;
let secPosition = 80;

var date = new Date();
console.log(date);

var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);


HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
























/*Digital clock part*/

function showTime(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    if(hr == 0){
        hr = 12;
    }
    if(hr > 12){
        hr = hr - 12;
        session = "PM";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hr + ":" + min + ":" + sec + " " + session;
    document.getElementById("digitalClock").innerText = time;
    document.getElementById("digitalClock").textContent = time;

    let today= new Date()

    //Function To Convert Day Integer to String

    function daysToSrting() {
    const daysOfWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[today.getDay()]
    }
    var day = date;
    document.getElementById("date").innerText = day;
    document.getElementById("date").textContent = day;

    setTimeout(showTime,1000);


}

showTime();
/*Digital clock part*/