
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  	land = new land(400,height-10,800,20);
    Stone = new  Stone(700,320,100,100);
    rubber= new Rubber(600,450,70);
    Hammer= new hammer(500,100);
    sand1= new Sand(500,400,10);
    sand2= new Sand(510,450,10);
    sand3= new Sand(515,450,10);
    ironball= new Iron(550,450,90,90);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  land.display();
  Stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  Hammer.display();
  ironball.display();
  drawSprites();
 
}



