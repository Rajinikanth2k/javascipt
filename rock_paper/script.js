let userInput = document.querySelectorAll(".photo");
let winnerMsg = document.querySelector("#msgContainer");

userInput.forEach((option) => {
    option.addEventListener("click", () => {
        let Uservalue = option.getAttribute("id");
        console.log(Uservalue);
        let computerValue = ComputerFunc();
        console.log(computerValue);
        scoreUpdate(winningResult(Uservalue, computerValue));
    })
})

const scoreUpdate = (winner) =>
{

    if(winner === "User")
    {
        console.log(winner);
        let scoreUpdater = (document.querySelector("#user"));
        updater = parseInt(scoreUpdater.innerText) + 1;
        winnerMsg.style.backgroundColor = "#02ccfe";
        scoreUpdater.innerText = updater;
    }
    else if(winner === "Computer")
    {
        console.log(winner);
        let scoreUpdater = document.querySelector("#comp");
        winnerMsg.style.backgroundColor = "Red";
        updater = parseInt(scoreUpdater.innerText) + 1;
        scoreUpdater.innerText = updater;
    }
}

const ComputerFunc = () => 
{
    let array = ["rock", "paper", "scissors"];
    return array[value = Math.floor(Math.random()*3)];
}

const winningResult = (Uservalue, computerValue) => 
{
    if(Uservalue === computerValue)
    {
            winnerMsg.innerText = "Hello Draw";
            winnerMsg.style.backgroundColor = "green";
            Winner = "Draw";
    }
    else if(Uservalue === "rock" && computerValue === "paper")
    {
            winnerMsg.innerText = "Computer Won";
            Winner = "Computer";
    }
    else if(Uservalue === "paper" && computerValue === "scissors")
    {
            winnerMsg.innerText = "Computer Won";
            Winner = "Computer";
    }
    else if(Uservalue === "scissors" && computerValue === "rock")
    {
            winnerMsg.innerText = "Computer Won";
            Winner = "Computer";
    }
    else if(computerValue === "rock" && Uservalue === "paper")
    {
            winnerMsg.innerText = "User Won";
            Winner = "User";
    }
    else if(computerValue === "paper" && Uservalue === "scissors")
    {
            winnerMsg.innerText = "User Won";
            Winner = "User";
    }
    else
    {
            winnerMsg.innerText = "User Won";
            Winner = "User";
             
    }
        return Winner;
}