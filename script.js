let plsec = prompt("Rock,paper,scissors");

function getComputerChoice(){
    let rn
    rn = Math.floor(Math.random() * 3);
    if (rn == 0) {
        return "Rock";
    }
    else if (rn == 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }


}

let cmsec = getComputerChoice();

function game(psec, csec){
    console.log("picked "+csec);
    if (psec == "rock" && csec == "Rock" ){
        console.log("Draw");
    } 
    else if (psec == "rock" && csec == "Paper" ){
        console.log("L");
    } 
    else if (psec == "rock" && csec == "Scissors" ){
        console.log("W");
    } 
    else if (psec == "paper" && csec == "Rock" ){
        console.log("W");
    } 
    else if (psec == "paper" && csec == "Paper" ){
        console.log("Draw");
    } 
    else if (psec == "paper" && csec == "Scissors" ){
        console.log("W")
    } 
    else if (psec == "scissors" && csec == "Rock" ){
        console.log("L")
    } 
    else if (psec == "scissors" && csec == "Paper" ){
        console.log("W")
    } 
    else{
        console.log("Draw")
    }

}

game(plsec.toLowerCase() , cmsec);