const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ground;
var box, box2;

function setup() {
  var canvas  = createCanvas( 600,600);
  engine = Engine.create();
  world = engine.world;
  box = new Box(300, 300, 50, 50)
  box2 = new Box(325, 200, 50, 50)
  ground = new Ground(300, 590, 600, 20)
}

function draw() {
  background("yellow");
  Engine.update(engine);
  box.display()
  box2.display()
  ground.display()
}