
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,sand,iron;

function setup() 
{
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	plane=new Plane(600,height,1200,15)

   hammer=new Hammer(200,200);

   rubber=new Rubber(700,370,20,10);  
}


function draw() 
{
  rectMode(CENTER);

  background("lightblue");

  Engine.update(engine);

  hammer.display();
  plane.display();
  rubber.display(); 
   
}