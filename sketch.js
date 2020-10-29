var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  thickness = random(22,83)
  bullet = createSprite(50,200,100,20);
  wall= createSprite(1000,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  
  console.log(speed);
 bullet.velocityX = speed;
}


function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
     bullet.velocityX=0;
     var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
     if(damage>10){
          wall.shapeColor = "red";
     }
     if(damage<10){
          wall.shapeColor = "green";
     }
}
  hasCollided(bullet,wall);
  drawSprites();
}
function hasCollided(lbullet,lwall){
     bulletRightEdge=lbullet.x+lbullet.width;
     wallLeftEdge=lwall.x;
     if(bulletRightEdge>=wallLeftEdge){
          return true
     }
     return false;
}
