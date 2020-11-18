const background = document.getElementById('newyear');
const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

// background newyear display
background.innerText = currentYear+ 1;

// countdown

function setCountDown(){
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

const d = Math.floor (difference / 1000 / 60 / 60 / 24);
const h = Math.floor (difference / 1000 / 60 / 60) % 24;
const m = Math.floor (difference / 1000 / 60) % 60;
const s = Math.floor (difference / 1000) % 60;

   days.innerHTML = d;
   hours.innerHTML = h < 10 ? '0' + h : h;
   minutes.innerHTML = m < 10 ? '0' + m : m;
   seconds.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(setCountDown, 1000);
