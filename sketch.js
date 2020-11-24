const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];

function preload() {
  polygon = Bodies.circle(50, 200, 20);
  World.add(World, polygon);

  slingShot = new Slingshot(this.polygon, {x:100, y:200});

}

function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();

 


  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  ground = new Ground(400, 790, 800, 20);
  stand = new Ground(375, 205, 120, 20);

  //level one
  block1 = new Box(330, 235, 30, 40);
  block2 = new Box(360, 235, 30, 40);
  block3 = new Box(390, 235, 30, 40);
  block4 = new Box(420, 235, 30, 40);
  block5 = new Box(350, 235, 30, 40);
  //level two
  block6 = new Box(360, 195, 30, 40);
  block7 = new Box(390, 195, 30, 40);
  block8 = new Box(420, 195, 30, 40);
  //level three
  block9 = new Box(390, 155, 30, 40);

  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("black");  
  ground.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 