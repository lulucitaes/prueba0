var piso1,piso;
var piso_invisible;
var nube,nube1;
var trex ,trex_corriendo,trex_muerto;
var cactus0;
var aleatorio;
var gameState = "jugando";
var puntos = 0;
var jugando = 1;
var final = 0;
//var gcactus,gnubes;
function preload(){
  nube1 = loadImage ("cloud.png");
trex_corriendo = loadAnimation ("trex1.png","trex3.png","trex4.png");
trex_muerto = loadImage ("trex_collided.png");
piso1 = loadImage ("ground2.png");
cactus1 = loadImage ("obstacle1.png");
cactus2 = loadImage ("obstacle2.png");
cactus3 = loadImage ("obstacle3.png");
cactus4 = loadImage ("obstacle4.png");
cactus5 = loadImage ("obstacle5.png");
cactus6 = loadImage ("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
//gcactus = createGroup ();
//gnubes = createGroup ();
piso_invisible = createSprite (200,190,400,10);
piso_invisible.visible = false
piso = createSprite (200,180,400,20);
piso.addImage (piso1);
trex = createSprite (50,160,20,50);
trex.addAnimation ("corriendo",trex_corriendo);
trex.scale = 0.5;
}
function draw(){
background("lightblue");
text ("MARCADOR = " + puntos,20,20);
puntos = puntos + Math.round(frameCount / 60);

if (gameState === "jugando"){
  if (piso.x < 0){
    piso.x = piso.width / 2;
  }
  if (keyDown ("space") && trex.y >= 159){
    trex.velocityY = -12;
  }
  piso.velocityX = -5;
  trex.velocityY = trex.velocityY + 0.8;
  nubes();
  cactus();
  if (puntos == 100){
  gameState = "final";
  }
}
else if (gameState === "final"){
trex.changeAnimation("muerto",trex_muerto);
trex.velocityY = 0;
piso.velocityX = 0;
//gcactus.setVelocityXEach (0);
//gnube.setVelocityXEach (0);
}
trex.x = 200;
trex.collide (piso_invisible);
drawSprites();  
}
function nubes(){

  if (frameCount % 60 === 0){
    nube = createSprite (600,100,40,10);
    nube.addImage (nube1);
    nube.scale = 0.7;
    nube.depth = trex.depth;
    trex.depth = trex.depth + 1;
    nube.velocityX = -3;
    nube.lifetime = 200;
    nube.y = Math.round (random (50,150));
  }
  //gnubes.add(nube);
}
function cactus(){
if (frameCount % 60 === 0){
 cactus0 = createSprite (600,165,10,40);
 cactus0.velocityX = -5;
 cactus0.scale = 0.5;
 cactus0.lifetime = 200;
  // PONER AQUI EL GRUPO DE CACTUS 
 var aleatorio = Math.round (random(1,6))
}
switch (aleatorio){
  case 1: cactus0.addImage (cactus1);
  break;
  case 2: cactus0.addImage (cactus2);
  break;
  case 3: cactus0.addImage (cactus3);
  break;
  case 4: cactus0.addImage (cactus4);
  break;
  case 5: cactus0.addImage (cactus5);
  break;
  case 6: cactus0.addImage (cactus6);
  break;
  default: 
  break;
}
//gcactus.add(cactus0); // hay que mover este dentro del IF 
}
