var leftRect, RightRect;


function setup() {
  createCanvas(400,400);
  leftRect = createSprite(0, 0, 50, 50);
  rightRect = createSprite(400, 400, 50, 50);
  leftRect.shapeColor = "blue";
  rightRect.shapeColor = "orange";
  leftRect.velocityX = 5;
  leftRect.velocityY = 5;
  rightRect.velocityX = -5;
  rightRect.velocityY = -5;
}

function draw() {
  background(0);
  
  


  if(leftRect.x-rightRect.x <= leftRect.width/2 + rightRect.width/2&&
    rightRect.x-leftRect.x <= leftRect.width/2 + rightRect.width/2&&
    leftRect.y-rightRect.y <= leftRect.height/2 + rightRect.height/2&&
    rightRect.y-leftRect.y <= leftRect.height/2 + rightRect.height/2){
    leftRect.shapeColor = "green";
    rightRect.shapeColor = "red";
    leftRect.velocityX = -(leftRect.velocityX);
    leftRect.velocityY = -(leftRect.velocityY);
    rightRect.velocityX = -(rightRect.velocityX);
    rightRect.velocityY = -(rightRect.velocityY);
  }else{
    leftRect.shapeColor = "blue";
    rightRect.shapeColor = "orange";
  }

  drawSprites();
}