var bodyX = 200;
var bodyY = 220;
var bodyW = 218;
var bodyH = bodyW*3/2;

var colmilloY = 220;
var colmilloW = 218;
var colmilloH = colmilloW*3/2;
var speed = 1;

draw = function() {
  background(207, 254, 255);
    fill(240, 209, 36);
    rect(bodyX-111, 75, 80, 80); // ears?
    fill(168, 67, 0);
    rect(bodyX-99, 87, 80, 80); // ears?
    fill(240, 209, 36);
    rect(bodyX+28, 75, 80, 80); // ears?
     fill(168, 67, 0);
    rect(bodyX+18, 86, 80, 80); // ears?
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, bodyH); // body?
    fill(255, 0, 0);
    ellipse(bodyX+41,163,50,50); //eyes?
    ellipse(bodyX-41,163,50,50); //eyes?
    fill(255, 255, 255);
    line(bodyX-68,colmilloY+53,colmilloW+-91,colmilloH+-10); //colmillo izquierdo?
    line(bodyX-29,colmilloY+57,colmilloW+-91,colmilloH+-10); //colmillo izquierdo?
    line(bodyX+36,colmilloY+70,colmilloW+48,colmilloH+-9); //colmillo izquierdo?
    line(bodyX+63,colmilloY+51,colmilloW+49,colmilloH+-6); //colmillo izquierdo?
    fill(240, 209, 36);
    ellipse(bodyX,260,150,70); //fauces?
    fill(0, 0, 0);
    ellipse(bodyX+28,259,35,35); //orificio derecho?
    ellipse(bodyX-27,259,35,35); //orificio izquierdo?
    textSize(20);
    text("BEWARE OF THE JABALÍ!!!",71,10,290,90);
        bodyX +=1;
      colmilloW +=1;
    
    if (bodyX && colmilloW> 320) {
        
        speed = -5;
    }
    if (bodyX && colmilloW < 110) {
        speed = 5;
    }

    bodyX = bodyX + speed;
    colmilloW = colmilloW + speed;
};
