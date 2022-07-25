var box, box_img;

function preload(){

  //box_img = loadImage("box_img.png")

}


function setup() {

  createCanvas(400, 400);
  box = createSprite(200,200,55,55)
  box.shapeColor = "red";


}

function draw() {

  background("black");
  
 if(keyDown(LEFT_ARROW)){
   box.x -= 2
  }
  if(keyDown(RIGHT_ARROW)){
    box.x += 2
  }
 if(keyDown(UP_ARROW)){
   box.y -= 2
  }
  if(keyDown(DOWN_ARROW)){
    box.y += 2
  }

  drawSprites()
}





