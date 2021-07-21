var catImg,catImg1,catImg2;
var mouseImg,mouseImg1,mouseImg2;
var tom ,jerry;

function preload() {
//load the images here
catImg = loadAnimation("images/cat1.png");
mouseImg = loadAnimation("images/mouse1.png");
catImg1 = loadAnimation("images/cat4.png");
mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2 = loadAnimation("images/mouse4.png");
garden = loadImage("images/garden.png");
}

function setup(){
createCanvas(1000,800);
//create tom and jerry sprites here
tom = createSprite(800,650,2000,20);
tom.addAnimation("sleeping",catImg);
tom.scale = 0.21;

jerry = createSprite(200,650,20,20);
jerry.addAnimation("eating",mouseImg);
jerry.scale = 0.16;

}

function draw() {

background(garden);
//Write condition here to evalute if tom and jerry collide
if((tom.x - jerry.x) - 120 < (tom.width - jerry.width)/2){
jerry.addAnimation("mouseStanding",mouseImg2);
jerry.changeAnimation("mouseStanding");
tom.velocityX = 0;
tom.addAnimation("catStanding",catImg1);
tom.changeAnimation("catStanding");
}

drawSprites();
}


function keyPressed(){

//For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){

jerry.addAnimation("mouseTeasing",mouseImg1);
jerry.changeAnimation ("mouseTeasing");

tom.velocityX = -2;
tom.addAnimation("moving",catImg2);
tom.changeAnimation("moving");
         
}
}