
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,roof1;
var bob2,bob3,bob4,bob5;

var string1,string2,string3,string4,string5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	roof1 = new Roof();

	bob1 = new Bob(315,400,30);
	bob2 = new Bob(330,400,30);
	bob3 = new Bob(345,400,30);
	bob4 = new Bob(360,400,30);
	bob5 = new Bob(375,400,30);

	
	
	
	string1 = new Slingshot(bob1.body,roof1.body,-60,0);
	string2 = new Slingshot(bob2.body,roof1.body,-30,0);
	string3 = new Slingshot(bob3.body,roof1.body,0,0);
	string4 = new Slingshot(bob4.body,roof1.body,30,0);
	string5 = new Slingshot(bob5.body,roof1.body,60,0);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
	roof1.display();

	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

  drawSprites();
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-15,y:0})
	
	}
}

