const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dice,blueSpace,blueMoved;

function preload(){

    backgroundImg = loadImage("sprites/background.png");

}

function setup(){

    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y=0;

    dice=[false,1,0,false,0];
    bluepiece = new BluePiece(20,570,40,40);
    blueSpace=1;
    blueMoved=false;

}

function draw(){

    background(0);
    
    Engine.update(engine);

    image(backgroundImg,0,0,600,600);

    bluepiece.display();
    stroke(0);
    strokeWeight(8);
    line(0,602,600,602);

    if(dice[3]===false){
        drawDice(525,665,dice[1]);
    }
    else if(dice[4]%2===0){
        drawDice(525,665,dice[1]);
        if(blueMoved===false&&blueSpace!=100){
            if(blueSpace%10===0){
                bluepiece.moveUp();
            }
            else{
                var num=Math.floor(blueSpace/10);
            if(num===0||num===2||num===4||num===6||num===8){
                bluepiece.moveRight();
            }
            else{
                bluepiece.moveLeft();
            }
          }
        }
    }
  
}
    
function drawDice(x,y,side){

    fill("white");
    strokeWeight(8);
    rectMode(CENTER);
    rect(x,y,100,100,20);

    fill("black");
    strokeWeight(3);
    if(side === 1){
        circle(x,y,20);
    }
    else if(side === 2){
        circle(x-25,y-25,20);
        circle(x+25,y+25,20);
    }
    else if(side === 3){
        circle(x-25,y-25,20);
        circle(x,y,20);
        circle(x+25,y+25,20);
    }
    else if(side === 4){
        circle(x-25,y-25,20);
        circle(x-25,y+25,20);
        circle(x+25,y-25,20);
        circle(x+25,y+25,20);
    }
    else if(side === 5){
        circle(x-25,y-25,20);
        circle(x-25,y+25,20);
        circle(x,y,20);
        circle(x+25,y-25,20);
        circle(x+25,y+25,20);
    }
    else if(side === 6){
        circle(x-25,y-25,20);
        circle(x-25,y+25,20);
        circle(x+25,y-25,20);
        circle(x+25,y+25,20);
        circle(x+25,y,20);
        circle(x-25,y,20);
    }
}
  

