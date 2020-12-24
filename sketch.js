const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;

function setup()
 {
 canvas = createCanvas(windowWidth/2,windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio =  pixelDensity();
  let options ={
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

pendulum1 = new pendulum(100,100,"red");
pendulum2 = new pendulum(150,100,"red");
pendulum3 = new pendulum(200,100,"red");
pendulum4 = new pendulum(250,100,"red");
pendulum5 = new pendulum(300,100,"red");

sling1 = new sling(pendulum1.body,{x:100,y:10});
sling2 = new sling(pendulum2.body,{x:150,y:10});
sling3 = new sling(pendulum3.body,{x:200,y:10});
sling4 = new sling(pendulum4.body,{x:250,y:10});
sling5 = new sling(pendulum5.body,{x:300,y:10});

}
function draw() {
  background(0);  
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function mouseDragged()
{
  Matter.body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}


