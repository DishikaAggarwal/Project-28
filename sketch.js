
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg,shot;

function preload()
{
	boyImg = loadImage("sprites/boy.png");
  treeImg=loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,680,1200,20);
tree = new Tree(680,480,45,90);
boy = createSprite(200,610,45,90);
boy.addImage(boyImg);
boy.scale=0.1;
stone=new Stone(200,200,30);
ground = new Ground(400,670,800,20);
mango1 = new Mango(650,400,15);
mango2 = new Mango(600,400,15);
mango3 = new Mango(650,370,15);
mango4 = new Mango(630,450,15);
mango5 = new Mango(670,430,15);
mango6 = new Mango(690,400,15);
mango7 = new Mango(710,400,15);
mango8 = new Mango(730,370,15);
mango9 = new Mango(750,450,15);
mango10 = new Mango(770,430,15);
stone = new Stone(150,550,20);
shot = new Shot(stone.body,{x:150,y:550})

	Engine.run(engine);

  
  
}


function draw() {
  rectMode(CENTER);
  background("honeydew");

   //adding text
   fill("green");
   textSize(40);
   strokeWeight(10);
   textFont("Algerian")
   text("Plucking Mango",150,100)
   
   fill("green");
   textSize(15);
   strokeWeight(10);
   textFont("Algerian")
  text("Press space key to get a new chance!!!",155,150)

  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  shot.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  shot.fly();
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){

if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:150,y:550})
  shot.attach(stone.body);
}

}
