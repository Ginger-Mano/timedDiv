let appBase = document.querySelector(".base")

let count = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    initiate,
    one,
    two,
    three,
    four;

let showDiv = (() => {
    let showDivMain = document.createElement("div")
    showDivMain.className = "showDiv"

    let firstCount = document.createElement('button')
    firstCount.className = "header"
    firstCount.innerHTML = count

    let secondCount = document.createElement('button')
    secondCount.className = "header"
    secondCount.innerHTML = count

    let thirdCount = document.createElement('button')
    thirdCount.className = "header"
    thirdCount.innerHTML = count

    let fourthCount = document.createElement('button')
    fourthCount.className = "header"
    fourthCount.innerHTML = count

    let start = document.createElement('button')
    start.innerHTML = "start"

    start.addEventListener("click", (evt) => {
        one = setInterval(function() {firstCount.innerHTML = count++}, 1000);
        two = setInterval(function() {secondCount.innerHTML = count2++}, 250);
        three = setInterval(function () {thirdCount.innerHTML = count3 += 5}, 1000);
        four = setInterval(function (){fourthCount.innerHTML = count4 += 5}, 500)
    })

    let reset = document.createElement('button')
    reset.innerHTML = "reset"

    reset.addEventListener("click", (evt) => {
       
    })

    let pause = document.createElement("button")
    pause.innerHTML = "pause"

    pause.addEventListener("click", (evt) => {
       
    })


    showDivMain.append(firstCount, secondCount, thirdCount, fourthCount, start, reset, pause)
    appBase.append(showDivMain)
})()