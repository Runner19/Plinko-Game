const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground, division1, division2, division3, division4, division5;
var particles = [];
var plinko = [];

function setup() {
  createCanvas(1400, 637);
  engine = Engine.create();
  world = engine.world;

  for (var j = 75; j <=width; j = j+50) {
     plinko.push(new Plinko(j, 75, 10));
  }

  for (var j = 50; j <=width-1; j = j+50) {
    plinko.push(new Plinko(j, 175, 10));
  }

  for (var j = 75; j <=width; j = j+50) {
    plinko.push(new Plinko(j, 275, 10));
  }

  for (var j = 50; j <=width; j = j+50) {
     plinko.push(new Plinko(j, 375, 10));
  }

  /*Bodies*/
  ground = new Ground(width/2,height,width,20);
  division1 = new Division(700, 509, 240);
  division2 = new Division(400, 509, 240);
  division3 = new Division(100, 509, 240);
  division4 = new Division(1000, 509, 240);
  division5 = new Division(1300, 509, 240);
}

function draw() {
  background("black");
  Engine.update(engine)
  ground.display();

  for (var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  if(frameCount%40===0){
    particles.push(new Particle(random(windowWidth/2-30, windowWidth/2+30), 10, 9));
  }
 
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
}