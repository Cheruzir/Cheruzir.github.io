let canvas = document.getElementById("myCanva")
let ctx = canvas.getContext("2d")
x = canvas.wight/2
y = canvas.height-40

let dx = 0.5
let dy = -0.5
 function mova() {
ctx.beginPath();
ctx.arc(x, y, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
x+=dx
y+=dy
}
ctx.beginPath();
setInterval(mova,5)
ctx.closePath();