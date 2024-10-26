var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
let monkey = Math.PI*2
var dx = 2.2;
var dy = -2.1;
var paddleHeight = 10;
var paddleWidth = 120;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 8; // кол-во плит в столбце
var brickColumnCount = 8; // кол-во столбцов
var brickWidth = 75; // ширина кирпича
var brickHeight = 20; // высота кирпича
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
let papa = 0

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}
function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            alert("ПРИСВЯТОЙ ОГУРЕЦ, КАК ТЫ СМОГ?!?!?");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, monkey);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
      else if(bricks[c][r].status == 0) {
      if (dx <= 0) {
        dx -= 0.00001
      }
      else {
        dx += 0.00001
      }
      if (dy <= 0) {
        dy -= 0.00001
      }
      else {
        dy += 0.00001
      }
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+ score + " Факт: Чем дольше играешь, чем быстрее мяч", 8, 20);
  if (score == 10 && papa == 0) {
    papa++
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  collisionDetection();

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      alert("GAME OVER");
      document.location.reload();
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 10;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 10;
  }
  x += dx;
  y += dy;
}
// Кнопачки )))))
function buy_ball() {
  if (score >= 10) {
  score-=10
  if (dx <= 0) {
    dx-=1.5
  }
  else {
    dx+=1.5
  }
  if (dy <= 0) {
    dy-=1.5
  }
  else {
    dx+=1.5
  }
  }
  else {
  document.getElementById("SK").textContent = "IDI nahui"
  }
}
function buy_plat() {
  if (score >= 5) {
  score-=5
  paddleWidth += 40
  }
}
function buy_AAA() {
  if (score >= 12) {
  score-=12
  ballRadius*=3
  }
}
function ii() {
  score++
}
setInterval(draw, 10);