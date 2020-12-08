
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
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	ground1=new ground(300,690,701,10)

	ball1 = new ball(100,100,5);
	bin1= new bin(550,620,25,100)
	bin2= new bin(455,620,25,100)
	bin3= new bin(495,675,100,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground1.display();
  ball1.display();
  bin1.display();
  bin2.display();
  bin3.display();


  drawSprites();
  
 
}


function Boost(){

if(keyCode === SPACE){
	

ball1.velocityY = -5

}






}







