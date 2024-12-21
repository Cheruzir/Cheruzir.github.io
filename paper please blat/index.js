let ch_player = 0 //0 - бумага, 1 - камень, 2 - ножницы
let ch_ai = 0
let win = 0
let popit = 0
let luck = 0
function paper_ch() {
    ch_player = 0
    game()   
}
function rock_ch() {
    ch_player = 1
    game()
}
function scissors_ch() {
    ch_player = 2
    game()
}
function RT(max) {
    return Math.floor(Math.random() * max);
}
function bot_ai() {
    ch_ai = RT(3)
    console.log(ch_ai)
}
function game() {
    bot_ai()
    popit+=1
    if (ch_player==0 && ch_ai==1 || ch_player==1 && ch_ai==2 || ch_player==2 && ch_ai==0) {
    if (ch_player == 0) {
    document.getElementById("bot").textContent = "Игрок: Бумага > Бот: Камень"   
    }
    else if (ch_player == 1) {
        document.getElementById("bot").textContent = "Игрок: Камень > Бот: Ножницы"   
    }
    else if (ch_player == 2) {
    document.getElementById("bot").textContent = "Игрок: Ножницы > Бот: Бумага"   
    }
    win++
    }
    else if (ch_player==0 && ch_ai==2 || ch_player==1 && ch_ai==0 || ch_player==2 && ch_ai==1) {
    if (ch_player == 0) {
    document.getElementById("bot").textContent = "Игрок: Бумага < Бот: Ножницы"   
    }
    else if (ch_player == 1) {
        document.getElementById("bot").textContent = "Игрок: Камень < Бот: Бумага"   
    }
    else if (ch_player == 2) {
    document.getElementById("bot").textContent = "Игрок: Ножницы < Бот: Камень"   
    }
    }
    document.getElementById("wins").textContent = "Побед: " + win
    document.getElementById("popit").textContent = "Игр: " + popit
    luck = win / popit
    document.getElementById("luck").textContent = "Коэффициент везучести: " + luck
}
function trash(){
popit=0
win=0
luck=0
if (trashLMao == 0) {
    document.getElementById("lol").textContent = "Сброс выполнен! (Достижения)"
    trashLMao++
}
else {
    document.getElementById("lol").textContent = "Сброс выполнен!"
}
}
function code_me() {
    alert("Внимание, это читы! Напиши для помощи /help")
    code = prompt("Напичатайте чтонибудь")
    if (code == "/exit") { 
    }
    else if (code == "/wins") { 
    win = prompt("Напишите кол-во побед(сейчас их "+ win + ")")
    }
    else if (code == "/hardmode") { 
    alert("Сложность повышена")
    hard+=1
    }
}
//АЧИВКИ
trashLMao=0
