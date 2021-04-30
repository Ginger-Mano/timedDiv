let appBase = document.querySelector(".base")

let count = 0
let click = true

let showDiv = (() => {
    let showDivMain = document.createElement("div")
    showDivMain.className = "showDiv"

    // let fcDiv = document.createElement("div")
    // fcDiv.className = "btnDiv"
    let firstCount = document.createElement('button')
    firstCount.className = "header"
    firstCount.innerHTML = count

  
    firstCount.addEventListener("click", (evt) => {
        
        setInterval(function() {firstCount.innerHTML = count++}, 1000);
    })

    // let scDiv = document.createElement("div")
    // scDiv.className = "btnDiv"
    let secondCount = document.createElement('button')
    secondCount.className = "header"
    secondCount.innerHTML = count

    secondCount.onclick = () => {
        let count2 = 0
        setInterval(function() {secondCount.innerHTML = count2++}, 250);
    }

    // let tcDiv = document.createElement("div")
    // tcDiv.className = "btnDiv"
    let thirdCount = document.createElement('button')
    thirdCount.className = "header"
    thirdCount.innerHTML = count

   thirdCount.addEventListener("click", (evt) => {
        let count3 = 0 
        setInterval(function () {thirdCount.innerHTML = count3 += 5}, 1000);
    })

    // let fthcDiv = document.createElement("div")
    // fthcDiv.className = "btnDiv"
    let fourthCount = document.createElement('button')
    fourthCount.className = "header"
    fourthCount.innerHTML = count

    fourthCount.addEventListener("click", (evt) => {
        
        let count4 = 0 
        let timed = setInterval(set, 50);

        function set() {fourthCount.innerHTML = count4 += 5}
        
        if (click = !true) {
            timeStop()
        }
        
        function timeStop() {
       
          clearInterval(timed)
          
    }

    })



    // fcDiv.append(firstCount)
    // scDiv.append(secondCount)
    // tcDiv.append(thirdCount)
    // fthcDiv.append(fourthCount)
    // showDivMain.append(fcDiv, scDiv, tcDiv, fthcDiv)
    showDivMain.append(firstCount, secondCount, thirdCount, fourthCount)
    appBase.append(showDivMain)
})()