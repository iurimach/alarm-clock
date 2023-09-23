
let alarmTime;
let alarmInterval;

const currentTimeDisplay = document.getElementById('current-time');
const alarmInput = document.getElementById('alarm-input');
const setAlarmButton = document.getElementById('set-alarm-button');
const disableAlarmButton = document.getElementById('disable-alarm-button');
const deleteAlarmButton = document.getElementById('delete-alarm-button');
const alarmStatus = document.getElementById('alarm-status');

// Update the current time display every second
setInterval(updateCurrentTime, 1000);

function updateCurrentTime() {
    const now = new Date();
    const currentHour = String(now.getHours()).padStart(2, '0');
    const currentMinute = String(now.getMinutes()).padStart(2, '0');
    const currentSecond = String(now.getSeconds()).padStart(2, '0');
    currentTimeDisplay.textContent = `Current Time: ${currentHour}:${currentMinute}:${currentSecond}`;
}

setAlarmButton.addEventListener('click', () => {
    const inputTime = alarmInput.value;
    if (!inputTime) {
        alert('Please enter a valid time.');
        return;
    }

    alarmTime = inputTime;
    alarmStatus.textContent = `Alarm set for ${alarmTime}`;
    startAlarm();
});

disableAlarmButton.addEventListener('click', () => {
    stopAlarm();
    alarmStatus.textContent = 'Alarm disabled';
});

deleteAlarmButton.addEventListener('click', () => {
    stopAlarm();
    alarmInput.value = '';
    alarmStatus.textContent = 'Alarm deleted';
    stopmusik();
});

function startAlarm() {
    if (alarmInterval) {
        return;
    }

    alarmInterval = setInterval(() => {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        if (currentTime === alarmTime) {
            playmusik();
            
            alarmStatus.textContent = 'Alarm ringing';
        }
    }, 1000);
}

function stopAlarm() {
    clearInterval(alarmInterval);
    alarmInterval = null;
}

function playmusik(){
   
    var musik=document.getElementById("musik")
    
    musik.play();
}

function stopmusik(){
    var musik=document.getElementById("musik")
    musik.pause();
     musik.currentTime = 0; 
}


