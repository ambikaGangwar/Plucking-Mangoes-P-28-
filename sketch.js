
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5,mango6;
var tree,boy,ground;

function preload()
{
	backgroundImg=loadImage("Plucking mangoes/download.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1=new Mango(300,200,20);
    mango2=new Mango();
	Engine.run(engine);
  
}


function draw() {
	Text()
  rectMode(CENTER);
  background(backgroundImg);

  mango1.display();

  drawSprites();
 
}



