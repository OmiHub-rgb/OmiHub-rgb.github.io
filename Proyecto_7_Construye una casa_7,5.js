background(219, 255, 255);
var wood = getImage ("cute/WoodBlock");
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);
for (var x = 60 ;x < 310 ; x+=53){
 image (wood,x,34,69,398);

}

fill(120, 80, 19);
rect(180, 280, 40, 77);
fill(0, 187, 255);

for (var x = 78 ;x < 300 ; x+=53){
 rect(x,185,30,30);

}
for (var x = 90 ;x < 320 ; x+=54){
 line(x,151,200,29);
}
var grass = getImage ("cute/TreeTall");
var grass2 = getImage ("cute/GrassBlock");

for (var x = -28 ;x < 386 ; x+=103){
 image (grass2,x,329,113,90);

}
for (var x = -7 ;x < 320 ; x+=103){
 image (grass,x,334,61,60);
}
var colors = [[255, 255, 0], [189, 217, 41]];
for (var x = 39; x < 67; x+=1){
var colorines = x % 2;
var h = random(-1843, 451);
    stroke(colors[colorines][0], colors[colorines][1], colors[colorines][2]);
    line(399, 0, x, 424-h);
}
stroke(0, 0, 0);
fill(255, 255, 0);
rect(332,-11,72,69,250);
fill(0, 0, 0);
ellipse(209,312,10,10);


