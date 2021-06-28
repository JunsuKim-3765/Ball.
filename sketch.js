const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var bal;

var button1, button2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  button1 = createImg("up.png");
  button1.position(50, 50);
  button1.size(25, 25);
  button1.mouseClicked(vForce);

  button2 = createImg("right.png");
  button2.position(100, 50);
  button2.size(25, 25);
  button2.mouseClicked(hForce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  ball = Bodies.circle(50, 150, 25, {restitution:0.9});
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 25);
  Engine.update(engine);
}

function hForce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.04, y:0});
}

function vForce()
{
 Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.04});




}




























