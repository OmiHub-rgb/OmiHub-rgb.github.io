background(89, 216, 255);
var randomX = random(10, 390);
var randomY = random(10, 390);
var random2X = random(10, 390);
var random2Y = random(10, 390);
var random3X = random(10, 390);
var random3Y = random(10, 390);
var random4X = random(10, 390);
var random4Y = random(10, 390);
var random5X = random(10, 390);
var random5Y = random(10, 390);
 var drawBurbujas = function (randomX, randomY){
noFill();
ellipse(randomX,randomY,30,30);
};
 var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor) {

// body
var bodyColor = color(random(0,255), random(0,255), random(0,255));
fill(bodyColor);
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
var eyeColor = color(random(0,255), random(0,255), random(0,255));
fill(eyeColor);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

};
mouseClicked = function () {
var tamaño = random(100, 38);
var colatamaño = random(89, 200);
drawFish(mouseX, mouseY, tamaño, tamaño, colatamaño, colatamaño);
};
drawFish(200,200,76,42, random (0,255));
drawFish(303,325,38,53, random (0,255)); 
drawFish(133,273,70,30, random (0,255)); 
drawFish(258,94,104,42, random (0,255)); 
drawBurbujas(randomX,randomY);
drawBurbujas(random2X,random2Y);
drawBurbujas(random3X,random3Y);
drawBurbujas(random4X,random4Y);
drawBurbujas(random5X,random5Y);