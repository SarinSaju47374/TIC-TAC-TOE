var a,b,c;
var win;
var dr;
var count=0;
let playerChoose = document.querySelector(".playerChoose")
let playerBoard = document.querySelector(".playerBoard")
let slider = document.querySelector(".slider");
let mainBoard = document.querySelectorAll(".mainBoard span")
let cells = document.querySelectorAll(".cell");
 
let winner = document.querySelector(".winner")
const winnerBoard = document.querySelector(".winnerBoard")
const restart = document.querySelector(".winnerBoard button");

let combos = [
   [0,1,2], 
   [3,4,5], 
   [6,7,8], 
   [0,3,6], 
   [1,4,7], 
   [2,5,8], 
   [0,4,8], 
   [2,4,6] 
]

for(let i=0;i<3;i++){
    mainBoard[i].addEventListener("click",(e)=>{
        // e.style.cursor="not-allowed";
        
        e.target.style.pointerEvents="none";
        if(win!="X" && win!="Y"){
            if(slider.style.left=="0px"){
                e.target.innerHTML="X"
                slider.style.left="58%";
            }
            else{
                 e.target.innerHTML="O"
                 slider.style.left="0";
            }   
            win = checkWinner(); 
        }
        
        setTimeout(displayWinner,2500)  
    })
}  

function startGame(e){
    playerChoose.style.transform="translate(-50%,-50%) scale(1.1,1.1)"
    // playerChoose.classList.add("scaleUp");
    playerChoose.style.display="none";
    playerBoard.style.display="flex";
    
    
    if(e.innerHTML==="PLAYER (X)"){
        slider.style.left="0px";
    }
    else{
        slider.style.left="58%";
    }
    
}
function checkWinner(){
    for(let i=0;i<8;i++){
        [a,b,c]=combos[i];
        
        if(cells[a].innerHTML=="X"&&(cells[a].innerHTML==cells[b].innerHTML)&&(cells[a].innerHTML==cells[c].innerHTML)){
            cells[a].style.backgroundColor="#ffffffd1";
            cells[b].style.backgroundColor="#ffffffd1";
            cells[c].style.backgroundColor="#ffffffd1";
            return "X";
            break;
        }
        else if(cells[a].innerHTML=="O"&&(cells[a].innerHTML==cells[b].innerHTML)&&(cells[a].innerHTML==cells[c].innerHTML)){
            cells[a].style.backgroundColor="#ffffffd1";
            cells[b].style.backgroundColor="#ffffffd1";
            cells[c].style.backgroundColor="#ffffffd1";
            console.log("SEE you")
            return "Y";
            break;
        }
    }
    //This is checked only after the combinations are checked
    if(draw()){
        return "nothing"
    }   
}
function draw(){
     return [...cells].every(ele=>{
        return ele.innerHTML == "X" || ele.innerHTML =="O"
     })
    }
           
function displayWinner(){
    if(win=="X"){
        playerBoard.style.display="none";
        winnerBoard.style.display="flex";
        winner.innerHTML="X is the WINNER";
    }
    else if(win=="Y"){
        playerBoard.style.display="none";
        winnerBoard.style.display="flex";
        winner.innerHTML="O is the WINNER";
    }
    else if(win=="nothing"){
        playerBoard.style.display="none";
        winnerBoard.style.display="flex";
        winner.innerHTML="Draw Match!";
    }
}
function restartGame(){
    for(let i=0;i<9;i++){
        cells[i].innerHTML="";
        cells[i].style.pointerEvents="fill";
    }
    cells[a].style.backgroundColor="rgba(188, 218, 245, 0.685)";
    cells[b].style.backgroundColor="rgba(188, 218, 245, 0.685)";
    cells[c].style.backgroundColor="rgba(188, 218, 245, 0.685)";
    winnerBoard.style.display="none"
    playerChoose.style.display="block";
    // playerChoose.style.display="block";
    win=""
    dr=""

}