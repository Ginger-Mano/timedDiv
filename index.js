let appBase = document.querySelector(".base")


let showDiv = (() => {
    let showDivMain = document.createElement("div")
    showDivMain.className = "showDiv"

    // let fcDiv = document.createElement("div")
    // fcDiv.className = "btnDiv"
    let firstCount = document.createElement('button')
    firstCount.className = "header"
    firstCount.innerHTML = "0"

    firstCount.addEventListener("click", (evt) => {
        console.log("count")
    })

    // let scDiv = document.createElement("div")
    // scDiv.className = "btnDiv"
    let secondCount = document.createElement('button')
    secondCount.className = "header"
    secondCount.innerHTML = "num2"

    // let tcDiv = document.createElement("div")
    // tcDiv.className = "btnDiv"
    let thirdCount = document.createElement('button')
    thirdCount.className = "header"
    thirdCount.innerHTML = "num3"

    // let fthcDiv = document.createElement("div")
    // fthcDiv.className = "btnDiv"
    let fourthCount = document.createElement('button')
    fourthCount.className = "header"
    fourthCount.innerHTML = "num4"



    // fcDiv.append(firstCount)
    // scDiv.append(secondCount)
    // tcDiv.append(thirdCount)
    // fthcDiv.append(fourthCount)
    // showDivMain.append(fcDiv, scDiv, tcDiv, fthcDiv)
    showDivMain.append(firstCount, secondCount, thirdCount, fourthCount)
    appBase.append(showDivMain)
})()