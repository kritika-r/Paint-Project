var mouseEvent= "empty";
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var colour="black";
var width= 3;
 
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    colour= document.getElementById("colour_input").value;
    width= document.getElementById("width_input").value;
    mouseEvent= "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
   

mouse_x= e.clientX- canvas.offsetLeft;
mouse_y= e.clientY- canvas.offsetTop;

if(mouseEvent== "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle= colour;
    ctx.lineWidth= width;
    ctx.moveTo(last_mouse_x, last_mouse_y);
    ctx.lineTo(mouse_x,mouse_y);
    ctx.stroke();

}
last_mouse_x= mouse_x;
last_mouse_y= mouse_y;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
  last_mouse_x_touch= e.touches[0].clientX - canvas.offsetLeft;
  last_mouse_y_touch= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
   mouse_x_touch = e.touches[0].clientX - canvas.offsetLeft;
   mouse_y_touch = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle= colour;
    ctx.lineWidth= width;
    ctx.moveTo(last_mouse_x_touch, last_mouse_y_touch);
    ctx.lineTo(mouse_x_touch,mouse_y_touch);
    ctx.stroke();

    last_mouse_x_touch= mouse_x_touch;
    last_mouse_y_touch= mouse_y_touch;
}

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
