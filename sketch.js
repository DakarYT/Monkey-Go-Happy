
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var ground 
var score

function preload(){
  
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  

  

}



function setup() {
  createCanvas(400,400)


  
monkey = createSprite(40,350) 
monkey.addAnimation("monkey", monkey_running) 
monkey.scale = 0.1

ground = createSprite(200,355,400,10);
ground.x = ground.width /2;  
ground.velocityX= -3
ground.scale = 2.0

obstacle = createSprite(200,325)
obstacle.addImage("obstacle", obstaceImage )
obstacle.scale = 0.1


}



score = 0;




function draw() {
background(220)

text("Survival Time: "+ score, 150,100);

if (ground.x < 0){
      ground.x = ground.width/2;
}
  
monkey.collide(ground)

  
if(keyDown("space")&& monkey.y >= 100) {
monkey.velocityY = -12;

}
  
monkey.velocityY = monkey.velocityY + 0.6  

  
if(keyDown("left")) {
monkey.velocityX = -5;

}  

  
if(keyDown("right")) {
monkey.velocityX = 5;

}  
  

 if(foodGroup.isTouching(monkey)){
  foodGroup.destroyEach(); 
 }
  
  
score = score + Math.round(getFrameRate()/60);  
  
drawSprites();
  
}


function createFood(){


if (frameCount % 80 === 0){
   var banana = createSprite(200,200);
   banana.y = Math.round(random(380,200));
   banana.velocityX = -6
   banana.scale= 0.1

}

foodGroup.add(banana)

}