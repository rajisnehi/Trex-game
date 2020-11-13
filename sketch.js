var trex, ground, trexrunning, groundimage, invisibleground,cloudimage;

function preload() {
  trexrunning = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundimage = loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
}

function setup() {
  createCanvas(400, 400);
  trex = createSprite(50, 350, 20, 50)
  trex.scale = 0.5
  trex.addAnimation("running", trexrunning)
  ground = createSprite(200, 380, 400, 10)
  ground.addImage("still", groundimage)
  invisibleground = createSprite(200, 390, 400, 10);
  invisibleground.visible=false        
}

function draw() {
  background(180);
  if (keyDown("space")&&trex.y>=361) {
    trex.velocityY = -12;
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(invisibleground);
  //console.log(trex.y)
  ground.velocityX=-3
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnCloud();
  drawSprites();
}
function spawnCloud(){
  if(frameCount%60===0){
    var cloud=createSprite(400,200,10,10)
    cloud.addImage(cloudimage)
    cloud.velocityX=-5
    var rand=random(180,220)
    cloud.y=rand
}
}