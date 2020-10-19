var s1
var s2
var s3
var s4

function setup() {
  createCanvas(800,400);

  s1=createSprite(300,200,50,50)
  s2=createSprite(400,200,50,50)

  s3=createSprite(500,300,50,50)
  s4=createSprite(700,300,50,50)

  s3.velocityX=1
  s4.velocityX=-1
}

function draw() {
  background(0);  

  s1.y=World.mouseY
  s1.x=World.mouseX

  if (s2.x-s1.x < (s1.width/2)+(s2.width/2) && s1.x-s2.x < (s1.width/2)+(s2.width/2) && s2.y-s1.y < (s1.height/2)+(s2.height/2) && s1.y-s2.y < (s1.height/2)+(s2.height/2) ){
    s1.shapeColor='pink'
    s2.shapeColor='pink'
  }
  else{
    s1.shapeColor='gray'
    s2.shapeColor='gray'
  }

  if (s3.x-s4.x < (s3.width/2)+(s3.width/2) && s4.x-s3.x < (s2.width/2)+(s4.width/2)){

    s3.velocityX=s3.velocityX*-1
    s4.velocityX=s4.velocityX*-1
  }
  
  drawSprites();

}