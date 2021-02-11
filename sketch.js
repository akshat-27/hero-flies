const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plank;
var bg;
var m1, m2;
var h1;
var rope;
var b1, b2, b3, b4, b5, b6;

function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
  plank = new Ground(500, 500, 1500, 10)
  h1 = new hero(450, 450, 100);
  rope = new fly(h1.body,{x:450, y:50});
  b1 = new box(800, 0, 50, 50);
  b2 = new box(800, 0, 50, 50);
  b3 = new box(800, 0, 50, 50);
  b4 = new box(800, 0, 50, 50);
  b5 = new box(800, 0, 50, 50);
  b6 = new box(800, 0, 50, 50);

  Engine.run(engine);
}

function draw() {
  background(bg);
  plank.display();
  h1.display();
  rope.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
}

