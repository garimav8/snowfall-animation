 
 const World = Matter.World;
 const Engine = Matter.Engine;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var background,backgroundImage;
 var boy,boyImage;
 var snowball,snowballImage;
 var santa, santaAnimation;
 var sound;
 var santa3, santa3Image;

 var snow;
 var ground;
 var engine,world;

 var num;


function preload(){
  backgroundImage = loadImage("image/snow2.jpg");
  boyImage = loadImage("image/boy.png");
  snowballImage = loadImage("image/snowball.png");
santaAnimation=loadAnimation("image/santa2.png","image/santa2.png","image/santa2.png",
"image/santa4.png","image/santa4.png","image/santa4.png");
  santa3Image = loadImage("image/santa3.png");
  sound = loadSound("christmas.mp3");


}
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  
  
  background = createSprite(600,200,10,10);
  background.addImage("snow2.jpg",backgroundImage);

 
  boy = createSprite(200,460,10,10);
  boy.addImage("boy.png",boyImage);
  boy.scale = 0.2;

  snowball = createSprite(250,445,1,1);
  snowball.addImage("snowball.png",snowballImage);
  snowball.scale = 0.04;

  santa = createSprite(700,420,5,5)
  santa.addAnimation("santa3",santaAnimation);
  santa.scale = 0.2;



  ground = new Ground(500,565,1000,15);
 


  Engine.run(engine);

  
  
}

function draw(){
 // background("white");

 Engine.update(engine);
 sound.play();

  
 drawSprites();
 
 if (frameCount%20 === 0){
  num = Math.round(random(0,1000));
  snow = new Snow (num,0)
 }
  

 if(snow){
   snow.display()}
 ground.display();
 

}
