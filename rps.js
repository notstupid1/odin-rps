function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissor"];
    rand = Math.floor((Math.random() *10)) % 3;
    return choices[rand];
}

comp_choice = getComputerChoice();
console.log(comp_choice);