
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);

	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var ground_options ={
		isStatic:true,
	}
	

	engine = Engine.create();
	world = engine.world;

	ball= Matter.Bodies.circle(20,40,20,ball_options)
    World.add(world,ball)
	//Create the Bodies Here.
	ground= Matter.Bodies.rectangle(350,780,700,10,ground_options)
    World.add(world,ground)

	leftGround= new Ground(700,720,20,120);
	rightGround= new Ground(900,720,20,120);

	Engine.run(engine);
	ellipseMode(RADIUS);

	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//   groundObj.display();
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,900,10);
  leftGround.show();
  rightGround.show();

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}



