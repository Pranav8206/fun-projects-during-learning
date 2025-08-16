const height = document.querySelector("#height")
console.log(height);

const button = document.querySelector(".button")

const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const height = document.querySelector("#height").value
    const weight = document.querySelector("#weight").value
    console.log(height, weight);
    let ans = ((weight / (height * height )) * 10000)
    console.log(ans);
    ans = ans.toFixed(2)
    console.log(ans);
    
    document.querySelector("#result").innerHTML = `Your BMI is ${ans}`
})
