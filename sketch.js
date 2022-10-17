function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);
  noFill()
  stroke(225)
	var w=mouseX/10;
  
for(var i=0;i<38;i++)
for(var j=0;j<18;j++)
{
	stroke(225,0,0)
  rect(50+50*i,50+50*j,mouseX/10)
	stroke(225,225,0)
  ellipse(25+50*i,25+50*j,mouseX/10)
	stroke(0,225,0)
  ellipse(25+50*i,75+50*j,mouseX/10)
	stroke(0,0,225)
  ellipse(75+50*i,25+50*j,mouseX/10)
	stroke(225,0,225)
  ellipse(75+50*i,75+50*j,mouseX/10)
}
}