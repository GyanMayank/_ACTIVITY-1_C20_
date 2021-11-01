
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball1;
var ground1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var ground1Options ={
     isStatic: true
   };

   var ball1_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  ground1 = Bodies.rectangle(350, 300, 300, 30,ground1Options)
  World.add(world,ground1)

  ball1 = Bodies.circle(200, 100, 30,ball1_options)
  World.add(world, ball1)
}


function draw() 
{
  background(51);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,30);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground1.position.x,ground1.position.y,300,30);
 
}

