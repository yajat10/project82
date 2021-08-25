canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouse_event=""
var last_X,last_Y
var color="blue"
var width=3
canvas.addEventListener("mousedown",my_Mousedown)
function my_Mousedown(e) {
    mouse_event="1"
}
canvas.addEventListener("mouseup",my_Mouseup)
function my_Mouseup(e) {
    mouse_event="2"
}
canvas.addEventListener("mouseleave",my_Mouseleave)
function my_Mouseleave(e) {
    mouse_event="3"
}
canvas.addEventListener("mousemove",my_Mousemove)
function my_Mousemove(e) {
    current_X=e.clientX -canvas.offsetLeft
    current_Y=e.clientY - canvas.offsetTop
if (mouse_event=="1") {
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width;
    console.log("last_position of X and Y");
    console.log("X="+last_X+"Y="+last_Y);
    ctx.moveTo(last_X,last_Y)
    console.log("current_position of X and Y");
    console.log("X="+current_X+"Y="+current_Y);
    ctx.arc(current_X,current_Y,40,0,2*Math.PI)
      ctx.stroke()
}
last_Y=current_Y;
last_X=current_X;
}
