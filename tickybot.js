let slackButton = document.getElementById("button1")
let slackIcon = document.getElementById("slack1")

let fullDoc = document.getElementById("full-doc")

function test(){
//    console.log("offsetX: " + window.pageXOffset)
//    console.log("offsetY: " + window.pageYOffset)
    window.addEventListener(function(){
            console.log("offsetX: " + window.pageXOffset)
    console.log("offsetY: " + window.pageYOffset)
    })
}
function checkScroll(){
    if(window.pageYOffset >= 740){
        showTop()
    }else if(window.pageYOffset < 740){
        hideTop()
    }
}
function showTop(){
    let top = document.getElementById("top")
    top.style.opacity = 1;
}
function hideTop(){
    let top = document.getElementById("top")
    top.style.opacity = 0;
}