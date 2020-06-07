var paper,ground,zone1,zone2,zone3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	paper = createSprite(100,650,50, options)


	engine = Engine.create();
	world = engine.world;

	
	
	zone1 = new Ground(650,640,200,20)
	zone2 = new Ground(750,600,20,100)
	zone3 = new Ground(550,600,20,100)

	paper = new Paper(100,200, 25, 25)

//zone1 = Bodies.rectangle(400,600,75,20,{isStatic:true} )
//world.add(world,zone1)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //var pos = paper.body.position

	 //paper = Bodies.circle(pos.x,pos.y,50)
	 //World.add(world,paper)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  zone1.display();
 
  drawSprites();

  zone1.display();	
  zone2.display();
  zone3.display();

  paper.display();

  function keyPressed() {

if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}



  }

  
 
}





