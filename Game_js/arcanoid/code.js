let canvas = document.getElementById("myCanva")
let ctx = canvas.getContext("2d")

ctx.beginPath()// начинаем чертение
ctx.rect(20,40,50,50)
ctx.fillStyle = "#FF0000"// Цвет политры
ctx.fillStyle()
ctx.lostPath()//конец чертения
//Круг чертим
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
