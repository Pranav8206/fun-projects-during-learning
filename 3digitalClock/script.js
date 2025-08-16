const clock = document.querySelector(".clock")

setInterval(function () {
    let date = new Date().toLocaleTimeString()
    
    clock.innerHTML = date

}, 1000)
