let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let text = document.getElementById('status');
let values = [
    '😀', '😁', '😴', '😍', '😮', '🤨'
,'🤑']

//let inpSpeed = document.getElementById('inpS')

function getRandomValue(){
    return values[Math.floor(Math.random() * 7)]
}
let animationId;
function updateAnimation(newSpeed){
    if (animationId) clearInterval(animationId)
        
    animationId = setInterval(() => {
            value1.innerText = getRandomValue()
            value2.innerText = getRandomValue()
            value3.innerText = getRandomValue()
        }, 1000/newSpeed)
    }

    let start = document.getElementById('start')
    


inpSpeed.onchange = function (ev){
  

    //changing the speed variable using the value entered inside
    // the text box

    //document.documentElement -> this is the :root of the speed
    start.onclick = function(){
        text.innerHTML=""
        document.documentElement.style.setProperty('--speed', ev.target.value)
        updateAnimation(ev.target.value)
    }
}
let stop = document.getElementById('stop')
stop.onclick = function(){    
    document.documentElement.style.setProperty('--speed', 0)
    clearInterval(animationId)

    //declaring that the player has won
    let slot1 = $('#value1').text()
    let slot2 = $('#value3').text()
    let slot3 = $('#value3').text()
    
    //if the outcome comes as true then display alert to the player that player won or else lost
    if((slot1 === slot2) && (slot2 === slot3) && (slot1 === slot3)){
        text.innerHTML="Congratulations! You Have Won"
    }
    else{
        text.innerHTML="You Lose! Try Again"
    }
    
}