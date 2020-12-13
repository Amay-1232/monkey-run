var gameState="play";
var survivalTime=0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  

  
  //creating monkey
 monkey=createSprite(79,315,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale=0.1;
   
 //creating ground
 ground=createSprite(400,350,900,10);
  ground.velocityX=-10;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
background(255);
  
  if (gameState==="play"){
     stroke("white");
     textSize(20);
     fill("white");
     text("score: " + score , 500,50);
    
    stroke("black");
     textSize(20);
     fill("black");
     survivalTime=Math.ceil(frameCount/frameRate())
     text("survival Time: " + survivalTime, 100,50);
    
    
    
  //moving ground
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  
   //making the monkey jump
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  
   //giving gravity to monkey
  monkey.velocityY=monkey.velocityY+ 0.7
  
   //making the monkey collide with the ground
  monkey.collide(ground);
  
  
  function spawnBananas(){
   
  if(frameCount%70===0){
    banana.createSprite(150,150,20,20);
    banana.addImage("banana",bananaImage);
    banana.y = Math.round(random(80,120));
    banana.velocityX =-2;
    
    
    banana.lifetime =750;
    
    
  }
  } 
  function spawnobstacle(){
  if(frameCount%120===0){
    obstacle.createSprite(150,150,20,20);
   obstacle.addImage("obstacle",obstacleImage);
    obstacle.y = Math.round(random(80,120));
    obstacle.velocityX =-2;
    
    
    banana.lifetime =750;
    
       }
    }
  drawSprites();
}
}





