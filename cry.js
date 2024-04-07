function help() {
    alert("Ваша задача - набрать 10 очков, их можно набрать, если ты угадаешь или 'примерно' скажешь число компа от 0 до 10")
    alert("Команда открыть - узнать число, команда подсмотреть - можно узнать какое число загадал комп, но может не повести и отобрать очко!")
    alert("бросить - это рандомная вещь, в большенстве случае ты потеряешь очко, или можешь получить даже доп. попытку!")
    alert("угадать - ты получишь  п ь я н ы й текст, в которм будет число с отличеем от числа компа")
    alert("ставка - это как открыть, но с потерей балла при неудаче, или огромный приз при угадывании.")
    alert("Совет: НЕ ИСПОЛЬЗУЙ ПОДСМОТРЕТЬ ПЕРЕД СТВАКОЙ, ИНАЧЕ БУДЕТ ПЛОХО!")
    alert("Удачи!")
    alert("p.s. пиши текст полностью малыми буквами и не ошибайся, иначе команда тупо не сработает")
}
function RT(max) {
    return Math.floor(Math.random() * max);
}
comand = ""
vnim = 0
chislo = -1
popit = 7
comp = comp = RT(11)
ball = 0
oh_no = 0
function time_game() {
    chislo = document.getElementById('chisl').value
    comand = document.getElementById('word').value
    if (popit != 0) {
    if (comand == "открыть") {
        if(chislo == comp){
            ball += 3
            popit --
            you_say("Вау, ты смог отгадать мое число! Получи 3 очка!")

        }
        else if(chislo == (comp - 1)) {
            ball ++
            popit --
            you_say("Почти! Мое число " + comp)
        }
        else if(chislo == (comp + 1)) {
            ball ++
            popit --
            you_say("Почти! Мое число " + comp)
        }
        else {
            popit --
            you_say("Ой! Неправильно, мое число " + comp + "!")
        }
    comp = RT(11)
    oh_no = 0
    }
    else if (comand == "подсмотреть") {
        vnim = RT(2)
        if (vnim == 0) {
            ball --
            popit --
            you_say("ЭЙ! НЕ СПИСЫВАЙ! С ТЕБЯ 1 ОЧКО")
        }
        else {
            popit --
            you_say("'Тссс, это " + comp + "!'")
            oh_no = 1
        }
    }
    else if (comand == "бросить") {
        vnim = RT(8)
        if (vnim == 0) {
            popit ++
            you_say("Ты получил +1 попытку")
        }
        else if (vnim == 1) {
            ball ++
            you_say("Ты получил +1 очко")
        }
        else if (vnim == 2) {
            ball += 2
            you_say("Ты получил +2 очка")
        }
        else if (vnim == 3) {
            popit --
            you_say("Ты получил -1 попытку")
        }
        else {
            ball --
            you_say("Ты получил -1 очко")
        }
    }
    else if (comand == "угадать") {
        vnim = RT(6)
        if (vnim == 0) {
            popit --
            you_say("В ы  ч у в с т в у е т е ,  ч т о  ч и с л о  " + (comp - 2))
        }
        if (vnim == 1) {
            popit --
            you_say("В ы  ч у в с т в у е т е ,  ч т о  ч и с л о  " + (comp + 2))
        }
        if (vnim == 2) {
            popit --
            you_say("В ы  ч у в с т в у е т е ,  ч т о  ч и с л о  " + (comp - chislo))
        }
        if (vnim == 3) {
            popit --
            you_say("В ы  ч у в с т в у е т е ,  ч т о  ч и с л о  " + (comp + chislo))
        }
        if (vnim == 4) {
            ball --
            popit --
            you_say("В ы  ч у в с т в у е т е ,  ч т о  в ы  р а з о з л и л и  д у х о в  - 1  о ч к о")
        }
        if (vnim == 5) {
            popit --
            you_say("В ы  ч у в с т в у е т е ,  ч т о  ч и с л о  н е  я с н о")
        }
    }
    else if (comand == "ставка") {
        if (oh_no == 0) {
            if (chislo == comp) {
                popit --
                ball += 5
                you_say("Ух ты, а ты везуч!")
            }
            else if (chislo == (comp - 1)) {
                popit --
                ball += 2
                you_say("Неидеально, но это было " + comp)
            }
            else if (chislo == (comp + 1)) {
                popit --
                ball += 2
                you_say("Неидеально, но это было " + comp)
            }
            else {
                popit --
                ball --
                you_say("Ха! НЕ ИГРАЙ В АЗАРТНЫЕ ИГРЫ! число " + comp)
            }
        }
        else {
            if (chislo == comp) {
                vnim = RT(2)
                if (vnim == 0) {
                ball = 0
                popit = 1
                you_say("НЕЛЬЗЯ ЖУЛЬНИЧАТЬ В КОРИДОРАХ!")
                }
                else {
                    popit --
                ball += 5
                you_say("Ух ты, а ты везуч!")
                }
            }
            else {
                vnim = RT(2)
                if (vnim == 0) {
                    popit --
                    ball --
                    you_say("Ха! НЕ ИГРАЙ В АЗАРТНЫЕ ИГРЫ! число " + comp)
                }
                if (vnim == 0) {
                    popit --
                    ball ++
                    you_say("Ты хоть списал, но ради шанса, получи подарок ввиде балла!")
                }
            }
        }
        comp = RT(11)
        oh_no = 0
    }
    }
    else {
        you_say("Ой! попытки закончились!")
    }
    if (ball >= 10) {
        you_say("Отлично! Ты победил!")
    }
}
function you_say(text){
    document.getElementById('message').textContent=text
    document.getElementById('pointter').textContent = "Очки - " + ball
    document.getElementById('terter').textContent = "Попытки - " + popit
}
