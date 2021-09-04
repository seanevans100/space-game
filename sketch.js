var bath_1,bath_2,brush,drink1,drink2,eat1,eat2,gym1,gym2,gym3,gym4,iss,move,move1,sleep;
var bath,brush,drink,eat,gym,iss,move,sleep;
var astronaut;
function preload(){
  iss = loadImage("iss.png")
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  sleep = loadAnimation("sleep.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1
}

function draw() {
  background(iss)
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",drink);
    astronaut.changeAnimation("moving")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }
   
  drawSprites();
}