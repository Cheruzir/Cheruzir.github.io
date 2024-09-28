let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ballRadius = 10 // радиус БОЛЛА
let x = canvas.width/2; // Коор 1
let y = canvas.height-30;
let dx = 1;
let dy = -1;
let ballRadius2 = 22 // радиус 2-ого БОЛЛА
let dx2 = 0.70;
let dy2 = -1.80;
let x2 = canvas.width/8;// Коор 2
let y2 = canvas.height-200;
function RT(max) {
    return Math.floor(Math.random() * max - 2);
}
function drawBall() { // рисуем
    ctx.beginPath(); // начало
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); // ШАР
    ctx.fillStyle = "#0095DD"; // Цвет
    ctx.fill();
    ctx.closePath();// конец
    ctx.beginPath(); // начало
    ctx.arc(x2, y2, ballRadius2, 0, Math.PI*2); // ШАР
    ctx.fillStyle = "#a91c94"; // Цвет
    ctx.fill();
    ctx.closePath();// конец
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(x + dx >= canvas.width-ballRadius || x + dx <= ballRadius) {
        dx+=0.05
        dx = -dx
    }
    if(y + dy >= canvas.height-ballRadius || y + dy <= ballRadius) {
        dy+=0.05
        dy = -dy
    }
    if(x2 + dx2 >= canvas.width-ballRadius2 || x2 + dx2 <= ballRadius2) {
        dx2+=0.05
        dx2 = -dx2
    }
    if(y2 + dy2 >= canvas.height-ballRadius2 || y2 + dy2 <= ballRadius2) {
        dy2+=0.05
        dy2 = -dy2
    }
    x+=dx
    y+=dy
    x2+=dx2
    y2+=dy2
}
setInterval(draw, 10);