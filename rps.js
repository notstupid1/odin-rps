function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let rand = Math.floor((Math.random() *10)) % 3;
    return choices[rand];
}

function playRound (comp_choice, player_choice) {
    switch (comp_choice) {
        case "Rock":
            if(player_choice === "Paper")
                return `You Win! ${comp_choice} beaten by ${player_choice}`;
            else if(player_choice === "Scissor")
                return `You Lose! ${comp_choice} beats ${player_choice}`;
            else return `You Tie! ${comp_choice} vs ${player_choice}`;
        case "Paper":
            if(player_choice === "Scissor")
                return `You Win! ${comp_choice} beaten by ${player_choice}`;
            else if(player_choice === "Rock")
                return `You Lose! ${comp_choice} beats ${player_choice}`;
            else return `You Tie! ${comp_choice} vs ${player_choice}`;
        case "Scissor":
            if(player_choice === "Rock")
                return `You Win! ${comp_choice} beaten by ${player_choice}`;
            else if(player_choice === "Paper")
                return `You Lose! ${comp_choice} beats ${player_choice}`;
            else return `You Tie! ${comp_choice} vs ${player_choice}`;
    }
}

let comp_choice = getComputerChoice();
let player_choice = "Rock";
let win_status = playRound(comp_choice, player_choice);
console.log(win_status);