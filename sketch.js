const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
// plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8 ,plinko9 ,plinko10 ,plinko11 ,plinko12 ,plinko13 ,plinko14 ,plinko15 ,plinko16 ,plinko17 ,plinko18 ,plinko19 ,plinko20  
var world
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
engine = Engine.create();
world = engine.world;
ground1 = new Ground(200, 790, 1200, 20)
for (var k = 0; k <=width; k = k +80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 40; j <=width; j = j +50) {
  plinkos.push(new Plinko(j, 75,10));
}
for (var i = 15; i <=width; i = i +50) {
  plinkos.push(new Plinko(i, 175,10));
}
for (var j = 40; j <=width; j = j +50) {
  plinkos.push(new Plinko(j, 275,10));
}
for (var i = 15; i <=width; i = i +50) {
  plinkos.push(new Plinko(i, 375,10));
}

}

function draw() {
  background(0);
  Engine.update(engine);  
  ground1.display();                                                                                                  
  for (var k = 0; k <divisions.length; k++) {
    divisions[k].display();
  }
  for (var i = 0; i <plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    //particles.push(new Particle((230,10,10)));
  }
  for (var j = 0; j <particles.length; j++) {
    particles[j].display();
  }
//  text(frameCount, width / 2, height / 2);
//  plinko1.display();

}