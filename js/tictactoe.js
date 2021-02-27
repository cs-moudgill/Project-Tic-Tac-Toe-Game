
let activePlayer='X';
let selectedSquares=[];

placeX0r0=(squareNumber)=>{
if(!selectedSquares.some(element=>element.includes(squareNumber))){
   let select=document.getElementById(squareNumber);
   if(activePlayer==='X'){
       select.style.backgroundImage="url('images/x.png')"
   }else{
    select.style.backgroundImage="url('images/o.png')"
   }
   selectedSquares.push(squareNumber+activePlayer);
   checkWinConditions();
   if(activePlayer==='X'){
       activePlayer='O';
   } else{
       activePlayer='X';
   }
   audio('./media/place.mp3');
   if(activePlayer==='O'){
       disableClick();
       setTimeout(() => {
           computersTurn()
       }, 1000);
   }
   return true;
}

computersTurn=()=>{
let success=false;
let pickASquare;
while(!success){
    pickASquare=String(Math.floor(Math.random()*9));
    if(placeX0r0(pickASquare)){
        placeX0r0(pickASquare);
        success=true;
    }
}
}
}