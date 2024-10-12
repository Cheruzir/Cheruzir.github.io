let a = 72
let i = 20
let perez = 72
let e = 0

function math(pppp) {
    return Math.floor(Math.random() * pppp);
}
let mok = math(5)
function lol() {
    Make()
}
function Have() {
    a += 10
    document.getElementById("Patron").textContent ="Патроны: " + a
    if (a >= 100) {
        document.getElementById("smile").textContent = "Бог сказал, что ты не достоин 102-ух патронов"
        a = 100
        document.getElementById("Patron").textContent ="Патроны: " + a
    }
}
function Make() {
    if (a >= i) {
        a -= i
        mok = math(5)
    document.getElementById("Patron").textContent ="Патроны: " + a
    if (mok == 0) {
        document.getElementById("smile").textContent = "В яблочко!"
    }
    else if (mok == 1) {
        document.getElementById("smile").textContent = "H E A D S H O T"
    }
    else if (mok == 2) {
        document.getElementById("smile").textContent = "Отлично!"
    }
    else if (mok == 3) {
        document.getElementById("smile").textContent = "Жестка!"
    }
    else if (mok == 4) {
        document.getElementById("smile").textContent = "Прекрасно"
    }
    }
    else if (a <= i) {
        document.getElementById("Patron").textContent ="Перезарядка... "
        a = perez
    }
    }