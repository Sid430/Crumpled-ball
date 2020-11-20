
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bin1,bin2,bin3
var ball1

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ball1 = new ball(100,100);
	bin1= new bin(750,380,100,25)
	bin2= new bin(805,380,100,10)
	bin3= new bin(695,380,100,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
 
}



