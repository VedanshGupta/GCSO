var car, wall;
var speed, weight;
var rightEdge;

function setup() {
  createCanvas(800,400);
  speed = random(2, 10);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(700, 200, 60, height/2);
  wall.shapeColor = "red";

  rightEdge = createSprite(800, 400, 5, 5);
}

function draw() {
  background(0);  

  console.log(speed);
  console.log(weight);
  
  if (wall.x-car.x < (car.width+wall.width)) {
    var deformation = 0.5*weight*speed*speed/22509;

    if (deformation<180 && deformation<100) {
      car.shapeColor = color("white");
      car.velocityX = 0;
    }

    if(deformation<100) {
      carshapeColor = color("green");
      car.velocityX = 0;
    }

    if (deformation<180) {
      car.shapeColor = color("blue");
      car.velocityX = 0;
    }

  }

  //car.collide = (rightEdge);
  createEdgeSprites();
  drawSprites();
}