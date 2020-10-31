let player = document.getElementById("character");

let block = document.getElementById("block");

var score = 0;
function jump(){
    if(player.classList!="animte"){
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate");
    },500);
}

let checkDead = setInterval(function(){
     
     var pTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
     var bLeft =parseInt(window.getComputedStyle(block).getPropertyValue("left"));
           if(bLeft<40 && bLeft>0 && pTop>=340){
                block.style.animation="none";
                block.style.display="none"
                alert("Game Over!!!");
                
           }

           else{
               score+=2;
               document.getElementById("text").innerHTML="Score: "+score;
               
           }
},10);

