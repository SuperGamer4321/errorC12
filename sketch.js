var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
var select_sprites = Math.round(random(1,2));
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(frameCount % 80 == 0){

    if(select_sprites == 1){
      createApples()    
      }
   else{
     createLeaves()
   }
  
  
  }
  drawSprites();

  function createApples(){
   apple = createSprite(random(50,350),40,10,10);
   appleImg.addImage("an_apple" , appleImg);
   apple.velocityY = 4;
   
     
      
   }
   function createLeaves(){
    leaf = createSprite(random(50,350),40,10,10);
    leafImg.addImage("a_leaf" , leafImg);
    leaf.velocityY = 4;
    leaf.scale = 0.4;
      
       
    }


  















}