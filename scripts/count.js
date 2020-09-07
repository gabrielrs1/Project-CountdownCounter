function restart() {
    window.location.href = 'http://127.0.0.1:5500/src/main.html'
}

var local = localStorage.getItem('date').slice(-2)

var datee = new Date()
var day = datee.toLocaleDateString().slice(0, 2)

var result = local - day

function startCount(dayCheck) {
    var tDay = document.getElementById('day')
    var tHours = document.getElementById('hour')
    var tMinutes = document.getElementById('minute')
    var tSecond = document.getElementById('second')

    var days = dayCheck - 1 
    var hours = 23
    var minutes = 59 
    var seconds = 59

    setInterval(function() {
        tDay.innerHTML = (days > 9) ? ('' + days) : ('0' + days) // esse ternário para adicina o zero ao lado quando menor que 10, pra dar 2 digito
        tHours.innerHTML = (hours > 9) ? ('' + hours) : ('0' + hours)
        tMinutes.innerHTML = (minutes > 9) ? ('' + minutes) : ('0' + minutes)
        tSecond.innerHTML = (seconds > 9) ? ('' + seconds) : ('0' + seconds)

        if(seconds > 0) seconds -= 1
        else if(seconds == 0 && minutes > 0) {
            seconds = 59
            minutes -= 1
        } else if(minutes == 0 && hours > 0) {
            minutes = 60
            hours -= 1
        } else if(hours == 0 && days > 0) {
            hours = 24
            days -= 1
        }
    }, 1000)
}

startCount(result)
