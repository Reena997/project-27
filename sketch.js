
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,600,50);
	bob1 = new Bob(140,300,120);
	bob2 = new Bob(260,300,120);
	bob3 = new Bob(380,300,120);
	bob4 = new Bob(500,300,120);
	bob5 = new Bob(620,300,120);

	rope1 = new Rope(bob1.body,roof.body,-(480),0);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
}



