var timer;
var ele = document.getElementById('timer');

(function (){
    // Check if the timer should be restarted
    var restartTimer = localStorage.getItem('restartTimer') === 'true';

    if (restartTimer) {
        // If the timer should be restarted, reset the flag and elapsed time
        localStorage.setItem('restartTimer', 'false');
        localStorage.setItem('elapsedTime', 0);
    }

    // Retrieve the elapsed time from localStorage
    var sec = parseInt(localStorage.getItem('elapsedTime')) || 0;
    
    timer = setInterval(() => {
        ele.innerHTML = 'TIME : ' + sec + ' sec';
        sec++;
        // Save the elapsed time to localStorage
        localStorage.setItem('elapsedTime', sec);
    }, 1000); // each 1 second
})();

