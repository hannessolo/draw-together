var socket;

function setup(){
  createCanvas(640, 480);
  background(51);

  socket = io.connect('127.0.0.1:3001');
  socket.on('mouse', newDrawing);
}

function mouseDragged(){

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}

function newDrawing(data) {
  noStroke();
  fill(255, 0 , 100);
  ellipse(data.x, data.y, 36, 36);
}

function draw(){

}
