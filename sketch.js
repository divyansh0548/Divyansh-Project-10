var sea, seaimage
var shift, shiftimage

function preload() {
  seaimage = loadImage("sea.png")
  shipimage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup() {
  createCanvas(400, 400)
  sea = createSprite(400, 200, 10, 30)
  sea.addImage(seaimage)
  ship = createSprite(200, 200, 5, 15)
  ship.addAnimation("ship", shipimage)
  ship.scale = 0.5


}
function draw() {
  background("blue");
  drawSprites()
}