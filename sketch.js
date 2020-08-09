const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, ground;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var pointB;

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

   
    roof = new Roof(400,50,500,35);

    bobObject1 = new Bob(200, 400, 100, 25);
    bobObject2 = new Bob(300, 400, 100, 25);
    bobObject3 = new Bob(400, 400, 100, 25);
    bobObject4 = new Bob(500, 400, 100, 25);
    bobObject5 = new Bob(600, 400, 100, 26);

    rope1 = new Rope(bobObject1.body, roof.body, -200, 0)
    rope2 = new Rope(bobObject2.body, roof.body, -100, 0)
    rope3 = new Rope(bobObject3.body, roof.body, 0, 0)
    rope4 = new Rope(bobObject4.body, roof.body, 100, 0)
    rope5 = new Rope(bobObject5.body, roof.body, 200, 0)

    Engine.run(engine);
  
}


function draw() {
    Engine.update(engine);

  rectMode(CENTER);
  background(255);

 // ground.display();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed() {

    if (keyCode === LEFT_ARROW) {
        Body.applyForce(bobObject1.body, bobObject1.body.position,
         {x:-400, y:-500})
    }
}
