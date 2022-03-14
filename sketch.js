const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var backgroundImg;
var playerimage;


function preload() {
  backgroundImg = loadImage("/assets/background.png");
  baseimage = loadImage("/assets/base.png");
  playerimage = loadImage("/assets/player.png");
  archerimage = loadImage("/assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var staticObjOptions ={
      isStatic: true
  };

  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200,400,200,200,staticObjOptions);
  World.add(world,playerBase);
  //criar corpo do jogador
  player = Bodies.rectangle(250,220,80,200,staticObjOptions);
  World.add(world,player);
  //criar corpo do arco do jogador
  playerArcher = Bodies.rectangle(200,100,150,150,staticObjOptions);
  World.add(world,playerArcher);


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  //imageMode(CENTER); 
  image(playerimage, player.position.x, player.position.y, 80, 200);
  image(baseimage, playerBase.position.x, playerBase.position.y, 200, 200);
  push();
  translate(playerArcher.position.x,playerArcher.position.y);
  
  imageMode(CENTER);rotate(50);
  image(archerimage, playerArcher.position.x, playerArcher.position.y, 150, 150);
  
  pop();
  //exibir a imagem da base do jogador usando a função image()
 

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
