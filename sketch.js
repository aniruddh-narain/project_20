function setup() {
  createCanvas(800,400);
  wall1 = createSprite(780,50,20,90);
  wall2 = createSprite(780,180,20,90);
  wall3 = createSprite(780,310,20,90);
  car1 = createSprite(40,50,20,20);
  car1.shapeColor = color(255,255,255);
  car2 = createSprite(40,170,20,20);
  car2.shapeColor = color(255,255,255);
  car3 = createSprite(40,300,20,20);
  car3.shapeColor = color(255,255,255);

  car1.speed = random(55,90);
  car2.speed = random(55,90);
  car3.speed = random(55,90);

  car1.weight = random(400,1500);
  car2.weight = random(400,1500);
  car3.weight = random(400,1500);

  car1.velocityX = car1.speed;
  car2.velocityX = car2.speed;
  car3.velocityX = car3.speed; 

  car1.deformation = 0.5*car1.weight*car1.speed*car1.speed/(22500);
  car2.deformation = 0.5*car2.weight*car2.speed*car2.speed/(22500);
  car3.deformation = 0.5*car3.weight*car3.speed*car3.speed/(22500);

 }

var speed,weight;
var deformation;

function draw() {
  background(0,0,0); 
  
  //car1.collide(wall1);
  //car2.collide(wall2);
  //car3.collide(wall3);

  if (car1.collide(wall1)) {

  if (car1.deformation <= 100){
    car1.shapeColor = color(0,255,0);
  }

  if(car1.deformation > 100 && car1.deformation <= 180){
    car1.shapeColor = color(230,230,0);
  }

  if(car1.deformation > 180){
    car1.shapeColor = color(255,0,0);
  }
}

  if(car2.collide(wall2)){

  if (car2.deformation <= 100){
    car2.shapeColor = color(0,255,0);
  }

  if(car2.deformation > 100 && car2.deformation <= 180){
    car2.shapeColor = color(230,230,0);
  }

  if(car2.deformation > 180){
    car2.shapeColor = color(255,0,0);
  }
}

  if(car3.collide(wall3)){

  if (car3.deformation <= 100){
    car3.shapeColor = color(0,255,0);
  }

  if(car3.deformation > 100 && car3.deformation <= 180){
    car3.shapeColor = color(230,230,0);
  }

  if(car3.deformation > 180){
    car3.shapeColor = color(255,0,0);
  }
}

  drawSprites();
}