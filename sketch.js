 var backgroundImg
  var snow
  var engine,world;

  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  

 function preload () {
  backgroundImg = loadImage("snow3.jpg");

}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  
   snow = new Snow(500,400,30);

   Engine.run(engine);
}

function draw() {
  background(backgroundImg);  

  snow.display();

  drawSprites();
}