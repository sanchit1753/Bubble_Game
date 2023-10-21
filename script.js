var timer = 60;
var score = 0;
var Hitrn;

function increaseScore(){
    score += 10;
    document.querySelector("#Score_Val").textContent = score;
}

function getNewHit(){
    Hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hit_Val").textContent = Hitrn;
}

function makeBubble(){
    var clutter = "";

    for(var i=1;i<=168;i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#panel_bottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#Timer_Val").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panel_bottom").innerHTML = `<h1>GAME OVER!</h1>`;
        }
    },1000);
}

document.querySelector("#panel_bottom").addEventListener("click",function(dets){
    var clickNum = (Number(dets.target.textContent));
    if(clickNum === Hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();