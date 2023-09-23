var drag = false;
var old_x, old_y;
var dX = 0, dY = 0;
var THETA, PHI;

var mouseDown = function(e) {
	drag = true;
	old_x = e.pageX, old_y = e.pageY;
	e.preventDefault();
	return false;
};

var mouseUp = function(e){
	drag = false;
};

var mouseMove = function(e) {
	if (!drag) return false;
	dX = (e.pageX-old_x)*2*Math.PI/canvas.width;
	dY = (e.pageY-old_y)*2*Math.PI/canvas.height;
	THETA+= dX;
	PHI+=dY;
	old_x = e.pageX, old_y = e.pageY;
	e.preventDefault();
};

canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mouseup", mouseUp, false);
canvas.addEventListener("mouseout", mouseUp, false);
canvas.addEventListener("mousemove", mouseMove, false);


