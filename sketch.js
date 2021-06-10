var ant ;
var edge1 , edge2 , edge3 , edge4 ;
var wall1 ,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;
var crusher ;

function preload(){

crusher = loadImage("crusher.png");

}

function setup() {
  createCanvas(1000,500);
  ant = createSprite(680, 450, 25, 25);
}



function draw() {
  background(180);

  text("Start",700,450);
  fill("red");

// starting commands for the movement of ant (aka Micky)
if(keyDown("left_arrow")){
  ant.x = ant.x -15;
}
if(keyDown("right_arrow")){
  ant.x = ant.x + 15;
}
if(keyDown("up_arrow")){
  ant.y =ant.y -15;
}
if(keyDown("down_arrow")){
  ant.y = ant.y + 15;
}
//commands end 


  uranuim();
  drawSprites();


  
  //commands for boundary 
edge1 = createSprite(500,5,1000,9);
edge2 = createSprite(500,495,1000,9);
edge3 = createSprite(5,250,9,500);
edge4 = createSprite(995,250,9,500);
   //commands for boundary ends   

   ant.bounceOff(edge1);
   ant.bounceOff(edge2);
   ant.bounceOff(edge3);
   ant.bounceOff(edge4);
   ant.bounceOff(wall1);
   ant.bounceOff(wall2);
   ant.bounceOff(wall3);
   ant.bounceOff(wall4);
   ant.bounceOff(wall5);
   ant.bounceOff(wall6);
   ant.bounceOff(wall7);
   ant.bounceOff(wall8);
   ant.bounceOff(wall9);
   ant.bounceOff(wall10);
   ant.bounceOff(wall11);
   ant.bounceOff(wall12);
   ant.bounceOff(wall13);
   ant.bounceOff(wall14);
   ant.bounceOff(wall15);
   ant.bounceOff(wall16);
   ant.bounceOff(wall17);
   ant.bounceOff(wall18);
   ant.bounceOff(wall19);
   ant.bounceOff(wall20);
   ant.bounceOff(wall21);
   ant.bounceOff(wall22);
   ant.bounceOff(wall23);
   ant.bounceOff(wall24);
   ant.bounceOff(wall25);
   ant.bounceOff(wall26);
}

function uranuim (){

wall1 = createSprite(850,480,240,10);
wall2 = createSprite(965,260,10,450);
wall3 = createSprite(500,40,940,10);
wall4 = createSprite(35,80,10,85);
wall5 = createSprite(35,335,10,300);
wall6 = createSprite(330,480,600,10);
wall7 = createSprite(500,100,790,10);
wall8 = createSprite(930,180,75,10);
wall9 = createSprite(820,180,10,150);
wall10 = createSprite(860,250,85,10);
wall11 = createSprite(630,455,10,60);
wall12 = createSprite(240,180,10,160);
wall13 = createSprite(240,260,150,10);
wall14 = createSprite(170,220,10,80);
wall15 = createSprite(103,182,145,10);
wall16 = createSprite(685,420,250,10);
wall17 = createSprite(900,400,10,150);
wall18 = createSprite(500,330,800,10);
wall19 = createSprite(100,285,10,100);
wall20 = createSprite(225,440,10,80);
wall21 = createSprite(500,250,10,150);
wall22 = createSprite(540,170,290,10);
wall23 = createSprite(680,210,10,85);
wall24 = createSprite(155,400,150,10);
wall25 = createSprite(355,375,10,100);
wall26 = createSprite(627,255,115,10);




}












