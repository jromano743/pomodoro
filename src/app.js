let intervalShow;
let minutes = 25;
let seconds = 0;
let isOn = false;
let isPause = false;
let isEnd = false;
let time = document.getElementById('time');

const alarm = new Audio("../assets/sounds/pomodoro_alarm.wav");
const sound = new Audio("../assets/sounds/pomodoro_sound.wav");

alarm.loop = true;

function showPomodoro(){
    seconds--;
    if(seconds<0){
        minutes--;
        seconds = 59;
    }

    let showMinutes = minutes;
    let showSeconds = seconds;

    if(minutes < 10) showMinutes = `0${minutes}`;
    if(minutes <= 0) showMinutes = `00`;
    if(seconds < 10) showSeconds = `0${seconds}`;
    if(seconds <= 0) showSeconds = `00`;

    if(minutes < 0){
        stopPomodoro();
        alarm.play();
        isEnd = true;
        time.innerHTML = `00:00`;
    }else{
        time.innerHTML = `${showMinutes}:${showSeconds}`
    }
}

function startPomodoro(){
    sound.play();
    if(!isOn || isPause){
        intervalShow = setInterval(showPomodoro, 1000);
        isOn = true;
        isPause = false;
    }
}

function pausePomodoro(){
    sound.play();
    isPause = true;
    clearInterval(intervalShow);
}

function stopPomodoro(){
    if(!isEnd){
        sound.play();
        isOn = false;
        
        isPause = false;
        minutes = 25;
        seconds = 00;
    
        clearInterval(intervalShow);
        time.innerHTML = `25:00`;
    }else{
        isEnd = false;
        time.innerHTML = `25:00`;
        alarm.pause();
    }
}