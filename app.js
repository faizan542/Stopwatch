var hr = 00
var min = 00
var sec = 00
var milsec = 00
var hour = document.getElementById('hour')
var minutes = document.getElementById('min')
var second = document.getElementById('sec')
var milisecond = document.getElementById('milisec')

var interval;
function timer(){
    milsec++
    milisecond.innerHTML = milsec
if(milsec >=100){
    sec++
    second.innerHTML = sec;
    milsec = 00;
} else if (sec >= 60) {
    min++;
    minutes.innerHTML = min;
    sec = 00;
}else if(min >= 60){
    hr++;
    hour.innerHTML = hr;
    min = 00
}
}
function start() {
    interval = setInterval(timer, 10);
    document.getElementById('btn').disabled = true;
}
function pause() {
    clearInterval(interval);
    document.getElementById('btn').disabled = false;
}   
function reset() {
    clearInterval(interval)
    hr = "00"
    min ="00";
    sec = "00";
    milsec = "00";
    minutes.innerHTML = min;
    second.innerHTML = sec;
    milisecond.innerHTML = milsec;
    hour.innerHTML = hr;
    document.getElementById('btn').disabled = false;
}