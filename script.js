
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let winnerShow=document.querySelector(".msg-container");
let winnermsg=document.querySelector("#msg");
let mainContainer=document.querySelector("#main-container");
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let xTurn=true;
let count=0;
boxes.forEach((box) => {
  box.addEventListener("click",()=>{
  if(xTurn){
    box.classList.add("xbutton");
    box.innerText="X";
    xTurn=false;
  }else{
    box.classList.remove("xbutton");
    box.innerText="O";
    xTurn=true;
  }
  count++;
  box.disabled=true;
  winner();
  let winning=false;
  if(count===9&&winning==false){
    winnermsg.innerText=`Game is Draw`;
    winnerShow.classList.remove("hide");
    mainContainer.classList.add("hide");
  }
 });
});
let winner=()=>{
  for(let pattern of winPatterns){
   let box1=boxes[pattern[0]].innerText;
   let box2=boxes[pattern[1]].innerText;
   let box3=boxes[pattern[2]].innerText;
   if(box1!=="" &&box1==box2&&box2==box3){
    winning=true;
    winnermsg.innerText=`${box1} is the Winner`;
    winnerShow.classList.remove("hide");
    mainContainer.classList.add("hide");
    for(let box of boxes){
      box.disabled=true;
    }
    break;
   }
}};
resetBtn.addEventListener("click",()=>{
  count=0;
  for(let box of boxes){
    box.innerText="";
    box.disabled=false;
  }
});
newBtn.addEventListener("click",()=>{
  mainContainer.classList.remove("hide");
  winnermsg.innerText="";
  winnerShow.classList.add("hide");
  count=0;
  for(let box of boxes){
    box.innerText="";
    box.disabled=false;
  }
});



