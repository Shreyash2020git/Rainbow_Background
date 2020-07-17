var mo;

function preload() {
  backgroundImg = loadImage("meow.jpg");
}


function setup(){

  createCanvas(1200,500);
 mo = createSprite(10,200,5,20);
 mo.shapeColor = "white";
 cpg = createSprite(550,200,50,20);
 cpg.shapeColor = "green";
 cpr = createSprite(775,200,50,20);
 cpr.shapeColor = "red";
 cpb = createSprite(475,200,50,20);
 cpb.shapeColor = "blue";
 cpo = createSprite(700,200,50,20);
 cpo.shapeColor = "orange";
 cpv = createSprite(325,200,50,20);
 cpv.shapeColor = "violet";
 cpi = createSprite(400,200,50,20);
 cpi.shapeColor = "indigo";
 cpy = createSprite(625,200,50,20);
 cpy.shapeColor = "yellow";
 
                }


function draw(){
background(backgroundImg);
mo.x = World.mouseX;
if(mo.x-cpv.x < mo.width/2 + cpv.width/2
  &&cpv.x-mo.x < mo.width/2 + cpv.width/2){
    background("violet");
  }
else if(mo.x-cpi.x < mo.width/2 + cpi.width/2
  &&cpi.x-mo.x < mo.width/2 + cpi.width/2){
    background("indigo");
  }
else if(mo.x-cpb.x < mo.width/2 + cpb.width/2
  &&cpb.x-mo.x < mo.width/2 + cpb.width/2){
    background("blue");
  }
else if(mo.x-cpg.x < mo.width/2 + cpg.width/2
  &&cpg.x-mo.x < mo.width/2 + cpg.width/2){
    background("green");
  }
else if(mo.x-cpy.x < mo.width/2 + cpy.width/2
  &&cpy.x-mo.x < mo.width/2 + cpy.width/2){
    background("yellow");
  }
else if(mo.x-cpo.x < mo.width/2 + cpo.width/2
  &&cpo.x-mo.x < mo.width/2 + cpo.width/2){
    background("orange");
  }
else if(mo.x-cpr.x < mo.width/2 + cpr.width/2
  &&cpr.x-mo.x < mo.width/2 + cpr.width/2){
    background("red");
  }
else{
  background(backgroundImg);
}

drawSprites();

}