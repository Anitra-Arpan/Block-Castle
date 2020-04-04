const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground,stick1,stick2,stick3,stick4,stick5,stick6;
var pillar1,pillar2;
var roof,flank;

function setup() {
  createCanvas(350,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Stick(200,380,400,60);
  stick1 = new Stick(80,275,20,160);
  stick2 = new Stick(105,275,20,160);
  stick3 = new Stick(130,275,20,160);
  stick4 = new Stick(155,275,20,160);
  stick5 = new Stick(180,275,20,160);
  stick6 = new Stick(205,275,20,160);
  stick7 = new Stick(230,275,20,160);
  stick8 = new Stick(255,275,20,160);

pillar1 = new Stick(40,250,50,210);
pillar2 = new Stick(295,250,50,210);
roof = new Stick(167,170,195,50);
flank = new Stick(167,100,10,90);

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  stick8.display();
  pillar1.display();
  pillar2.display();
  roof.display();
  flank.display();
  triangle(40,86,80,143,0,143);
  triangle(173,100,173,60,220,80);
  triangle(300,86,340,143,260,143);
}