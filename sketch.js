var fixedRec, movingRec;

function setup() {
  createCanvas(800,400);
  fixedRec=createSprite(400, 200, 50, 50);
  movingRec=createSprite(400,200,50,50);

  movingRec.shapeColor="green";
  fixedRec.shapeColor="green";
}

function draw() {
  background(255,255,255);  


  movingRec.x=mouseX;
  movingRec.y=mouseY;

  if(movingRec.x-fixedRec.x < movingRec.width/2+fixedRec.width/2 &&
    fixedRec.x-movingRec.x < movingRec.width/2+fixedRec.width/2 &&
    movingRec.y-fixedRec.y < movingRec.height/2+fixedRec.height/2 &&
    fixedRec.y-movingRec.y < movingRec.height/2+fixedRec.height/2){
      movingRec.shapeColor="red";
      fixedRec.shapeColor="red";
  }
  else{
  movingRec.shapeColor="green";
  fixedRec.shapeColor="green";
  }
  drawSprites();
}