var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4 ;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  gameObject1 = createSprite(100,100,120,120);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(300,100,120,120);
  gameObject2.shapeColor = "green";
  gameObject3= createSprite(500,100,120,120);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(700,100,120,120);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else{
   gameObject4.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}
//boolean values - true, false
function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2+object1.width/2
    && object2.x - object1.x < object2.width/2+object1.width/2
    && object1.y - object2.y < object2.height/2+object1.height/2
    && object2.y - object1.y < object2.height/2+object1.height/2){
    
      return true;
  }
  else{
      return false;
  }
}