function startCount() {
    var date = document.getElementById('date')
    var a = String(date.value)
    var b = a.slice(-2)

    var newDate = new Date()
    var day = newDate.toLocaleDateString().slice(0, 2)

    if(date.value == 0) {
        alert('Verifique os campos')
    } else if(day >= b) {
        alert('Informe uma data maior')
    } else {
        window.location.href = 'http://127.0.0.1:5500/src/count.html'
        localStorage.setItem('date', date.value)
    }
}