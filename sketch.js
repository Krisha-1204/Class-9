var ball;

function setup(){
  createCanvas(400,400)
  ball= createSprite(200,200,10,10);
}

function draw(){
  background("black")
  drawSprites();
  if (keyDown(RIGHT_ARROW)){
    ball.velocityX=3;
  
  }
  if (keyDown(LEFT_ARROW)){
    ball.velocityX=-3;
  
  }
  if (keyDown(UP_ARROW)){
    ball.velocityY=-3;
  
  }
  if (keyDown(DOWN_ARROW)){
    ball.velocityY=3;
  
  }
}




