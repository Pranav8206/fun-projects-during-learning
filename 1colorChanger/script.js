const buttons = document.querySelectorAll(".color-button")
console.log(buttons);

const body = document.querySelector("body")

buttons.forEach((button)=>{
    const color = button.getAttribute("class").split(" ")[0]
    console.log(color)
    button.addEventListener("click", function () {
        body.style.background = color
    })
})

