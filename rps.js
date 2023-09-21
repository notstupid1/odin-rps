function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];

    let rand = Math.floor((Math.random() *10)) % 3;

    return choices[rand];
}

function playRound (comp_choice, player_choice) {

    switch (comp_choice) {

        case "Rock":
            if(player_choice === "Paper") return 1;
            else if(player_choice === "Scissor") return -1;
            else return 0;

        case "Paper":
            if(player_choice === "Scissor") return 1;
            else if(player_choice === "Rock") return -1;
            else return 0;

        case "Scissor":
            if(player_choice === "Rock") return 1;
            else if(player_choice === "Paper") return -1;
            else return 0;
    }
}

function playGame(){
    let score = [];
    let player_win = 0;
    let comp_win = 0;

    for(let i = 0; i < 5; i++) {
        let comp_choice = getComputerChoice();
        let player_choice = prompt("Enter our choice: ");

        score[i] = playRound(comp_choice, player_choice);

        (score[i] === 1) ? ++player_win : ((score[i] === -1) ? ++comp_win : (++comp_win, ++player_win));
        
        console.log(score[i]);
    }

    if (player_win > comp_win) return "You Win!";
    else if (player_win === comp_win) return "Tie!";
    else return "You Lose!";
}

let win_status = playGame();
console.log(win_status);