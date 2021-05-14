let appBase = document.querySelector(".base")

let count = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    initiated,
    active = false;

let showDiv = (() => {

    let showDivMain = document.createElement("div")
        showDivMain.className = "showDiv"


    let firstCount = document.createElement('button')
        firstCount.className = "header"
        firstCount.innerHTML = count

    let firstBox = () => {
        initiated = setInterval(function() {firstCount.innerHTML = count++}, 1000);
    }


    let secondCount = document.createElement('button')
        secondCount.className = "header"
        secondCount.innerHTML = count

    let secondBox = () => {
        initiated = setInterval(function() {secondCount.innerHTML = count2++}, 250);
    }


    let thirdCount = document.createElement('button')
        thirdCount.className = "header"
        thirdCount.innerHTML = count

    let thirdBox = () => {
        initiated = setInterval(function () {thirdCount.innerHTML = count3 += 5}, 1000);
    }


    let fourthCount = document.createElement('button')
        fourthCount.className = "header"
        fourthCount.innerHTML = count

    let fourthBox = () => {
        initiated = setInterval(function (){fourthCount.innerHTML = count4 += 5}, 500);
    }


    let start = document.createElement('button')
        start.innerHTML = "start"

    start.addEventListener("click", (evt) => {
        firstBox() , secondBox()
        thirdBox() , fourthBox()
    })


    let reset = document.createElement('button')
        reset.innerHTML = "reset"

    reset.addEventListener("click", (evt) => {
       if (initiated) {
        clearInterval(initiated)
        let counts = 0
        firstCount.innerHTML = counts;
        secondCount.innerHTML = counts;
        thirdCount.innerHTML = counts;
        fourthCount.innerHTML = counts;
        console.log(initiated)
           
       }
    })


    let pause = document.createElement("button")
    pause.innerHTML = "pause"

    pause.addEventListener("click", (evt) => {
       
    })


    showDivMain.append(firstCount, secondCount, thirdCount, fourthCount, start, reset, pause)
    appBase.append(showDivMain)
})()