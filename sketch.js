var xoff=0
var xoff1=10000
var xoff2=20000
var xoff3=30000


function setup() {
    createCanvas(400,400)
}
function draw() {
    
    
    var x1=map(noise(xoff),0,1,0,width)
    var y1=map(noise(xoff1),0,1,0,height)
  var x2=map(noise(xoff2),0,1,0,width)
    var y2=map(noise(xoff3),0,1,0,height)
    xoff+=0.02
    xoff1+=0.02
    xoff2+=0.02
    xoff3+=0.02
    stroke(color(Math.random(0,255),Math.random(0,255),Math.random(0,255)))
    line(x1,y1,x2,y2)


}