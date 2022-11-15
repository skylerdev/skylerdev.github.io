function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startTyping() {
    let normal = document.getElementsByClassName("typable")
    let slower = document.getElementsByClassName("typableSlow")
    let faster = document.getElementsByClassName("typableFast")

    for (let i = 0; i < normal.length; i++) {
        typeOut(normal[i], 20, 0)
    }

    for (let i = 0; i < slower.length; i++) {
        typeOut(slower[i], 100, 100)
    }

    for (let i = 0; i < faster.length; i++) {
        typeOut(faster[i], 10, 3)
    }

}


async function typeOut(elem, time, variance) {
    let text = elem.innerHTML
    var newText = "_"


    for (let i = 0; i < text.length; i++) {
        var newVariance = Math.floor(Math.random() * variance);
        newVariance -= Math.floor(variance/2)
        console.log(variance, newVariance)
        newText = newText.substring(0, newText.length - 1) + text[i] + "_"
        elem.innerHTML = newText
        await sleep(time + variance)
    }

    elem.innerHTML = elem.innerHTML.substring(0, newText.length - 1)
}






        
    