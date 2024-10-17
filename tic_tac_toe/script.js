let boxes = document.querySelectorAll("#box");
let trueO = false;
let msgContainerList = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let newBtn =  document.querySelector(".newGame");
let reBtn =  document.querySelector("#reBtn");


newBtn.addEventListener("click", () => {
    msgContainerList.classList.add("hide");
    enableCall();
    restValues();
})

reBtn.addEventListener("click", () => {
    msgContainerList.classList.add("hide");
    enableCall();
    restValues();
})

const restValues = () => {
    for(let box of boxes)
        {
            box.innerText = "";
        }
}

winningCases = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

boxes.forEach(function(box) {
        box.addEventListener("click",() =>{

            if(trueO){
                box.innerText = "O";
                trueO = false;
                winnerFunc()
            }
            else{
                box.innerText = "X";
                trueO = true;
                winnerFunc()

            }
            box.disabled = true;
            
        })
})



winnerFunc = () => {
    for(let pattern of winningCases){

        console.log(pattern[0]);
        console.log(pattern[1]);
        console.log(pattern[2]);

        posVal1 = boxes[pattern[0]].innerText;
        posVal2 = boxes[pattern[1]].innerText;
        posVal3 = boxes[pattern[2]].innerText;

        console.log(posVal1);
        console.log(posVal2);
        console.log(posVal3);

        if(posVal1 != "" && posVal2 != "" && posVal3 !="")
        {
            if(posVal1 == posVal2 && posVal2 == posVal3)
            {
                winnerCall(posVal1);                
            }

        }
            
        
    }
}

const winnerCall = (winner) => {
    
    msg.innerText = `Congragulations to winner ${winner}`;
    msgContainerList.classList.remove("hide");
    disableCall();

}

const disableCall = () => {
    for(let box of boxes)
    {
        box.disabled= true;
    }
}


const enableCall = () => {
    for(let box of boxes)
    {
        box.disabled= false;
    }
}
