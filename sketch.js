var speed, weight;
var car, car2,car3, car4;
var wall, wall2, wall3, wall4;
var hitpoint, hitpoint2, hitpoint

function setup() {
  createCanvas(1600,580);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  car2 = createSprite(50,350,50,50)
  car3 = createSprite(50,50,50,50)
  car4 = createSprite(50,500,50,50)
  wall = createSprite(350,280,2500,20)
  wall2 = createSprite(350,120,2500,20)
  wall3 = createSprite(350,420,2500,20)
  hitpoint = createSprite(1300,50,20,20)
  car.velocityX = 4;
  car2.velocityX = 4;
  car3.velocityX = 4;
  car4.velocityX = 4;

}


function draw() {
  background(0,0,0);  
  drawSprites();
}