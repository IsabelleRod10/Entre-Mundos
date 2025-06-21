let truckX = 0;
let foodItems = [];

function setup() {
  createCanvas(900, 400);
  frameRate(60);

  // Cria alimentos em movimento
  for (let i = 0; i < 10; i++) {
    foodItems.push({
      x: random(width),
      y: 275 + random(-10, 10),
      speed: random(1, 2),
      type: random(['tomato', 'corn'])
    });
  }
}

function draw() {
  background(135, 206, 235); // Céu

  drawGround();
  drawField();
  drawCity();
  drawRoad();
  drawFoodFlow();
  drawTruck();
  drawPowerLines();
  drawTitleText();
}

// Fundo
function drawGround() {
  noStroke();
  fill(100, 200, 100);
  rect(0, height / 2, width, height / 2);
}

// Campo (lado esquerdo)
function drawField() {
  for (let i = 50; i < 400; i += 100) {
    fill(139, 69, 19);
    rect(i, 250, 20, 60);
    fill(34, 139, 34);
    ellipse(i + 10, 240, 60, 60);
  }

  for (let i = 30; i < 400; i += 30) {
    fill(255, 215, 0);
    ellipse(i, 370, 10, 25);
  }
}

// Cidade (lado direito)
function drawCity() {
  for (let i = 600; i < 860; i += 60) {
    fill(60);
    rect(i, 180, 50, 200);
    fill(255);
    for (let j = 0; j < 4; j++) {
      rect(i + 10, 200 + j * 30, 10, 15);
    }
  }
}

// Estrada
function drawRoad() {
  fill(50);
  rect(0, 310, width, 50);

  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < width; i += 40) {
    line(i, 335, i + 20, 335);
  }
  noStroke();
}

// Caminhão animado
function drawTruck() {
  fill(255, 140, 0);
  rect(truckX, 290, 60, 25);
  fill(200, 0, 0);
  rect(truckX + 40, 280, 20, 20);

  fill(0);
  ellipse(truckX + 15, 315, 15);
  ellipse(truckX + 45, 315, 15);

  truckX += 2;
  if (truckX > width + 60) {
    truckX = -80;
  }
}

// Alimentos animados fluindo do campo para a cidade
function drawFoodFlow() {
  for (let food of foodItems) {
    if (food.type === 'tomato') {
      fill(255, 0, 0);
      ellipse(food.x, food.y, 12);
    } else {
      fill(255, 255, 0);
      ellipse(food.x, food.y, 10, 20);
    }

    food.x += food.speed;
    if (food.x > width) {
      food.x = -20;
      food.y = 275 + random(-10, 10);
    }
  }
}

// Linhas de energia
function drawPowerLines() {
  stroke(0);
  strokeWeight(2);
  for (let x = 150; x <= 750; x += 200) {
    line(x, 200, x, 100);
    line(x, 100, x + 200, 100);
  }
  noStroke();
}

// Textos explicativos
function drawTitleText() {
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("Conexão entre Campo e Cidade", width / 2, 30);
  textSize(14);
  text("Alimentos, energia e tecnologia fluem entre os dois ambientes em harmonia.", width / 2, 55);
}
