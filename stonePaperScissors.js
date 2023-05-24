const stone = 0;
const scissors = 1;
const paper = 2;
let player = 0;
let computer = 0;
function getChoiceComputer(){
    let randomComputerSelect = Math.floor(Math.random()*3)
    if(randomComputerSelect === 0){
        return stone;
    } else if(randomComputerSelect === 1){
        return scissors;
    } else if(randomComputerSelect === 2){
        return paper;
    } 
}
getChoiceComputer();
let letChoicePlayer = prompt('Выберите "Камень", "Ножницы", "Бумага"');
function getPlayerChoice(){
    if(letChoicePlayer === "Камень"){
        return stone;
    } else if(letChoicePlayer === "Ножницы"){
        return scissors;
    }else if(letChoicePlayer === "Бумага"){
        return paper;
    } else if (letChoicePlayer != "Камень","Ножницы","Бумага"){
       return alert("Вы дали неправильный ответ")  
    } 
}
getPlayerChoice()
function getGameScore(){
    computerSelect = getChoiceComputer();
    playerSelect = getPlayerChoice();
    if(playerSelect === stone && computerSelect === scissors || playerSelect === scissors && computerSelect === paper || palyerSelector === paper && computerSelect === stone){
         player++;
    } else if (playerSelect === scissors && computerSelect === stone || playerSelect === paper && computerSelect === scissors || palyerSelect === stone && computerSelect === paper){
         computer++;
    } return true;
    } 
getGameScore();
function getGameResult(){
    if(player === computer){
        alert("Ничья")
    } else if(player > computer){
        alert("Вы выйграли")
    }else if(player < computer){
        alert("Вы проиграли")
    }
}
getGameResult();
console.log("Что выбрал компьютер",getChoiceComputer());
console.log("Счет компьютера", computer);
console.log("Счет игрока", player);