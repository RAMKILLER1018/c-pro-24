const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box1,ground,box2,pig1,log1,box3,box4,pig2,log2,box5,log3,log4;

function setup() {
  createCanvas(1200,700);
engine=Engine.create();
world=engine.world;
box1=new Box(700,650,50,50);
ground=new Ground(600,690,1200,10);
box2=new Box(900,650,50,50);
pig1=new Pig(800,650);
log1=new Log(800,600,250,PI/2);
box3=new Box(700,580,50,50);
box4=new Box(900,580,50,50)
pig2=new Pig(800,580);
log2=new Log(800,530,250,PI/2);
box5=new Box(790,510,50,50);
log3=new Log(850,490,150,-PI/7);
log4=new Log(740,490,150,PI/7);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
}