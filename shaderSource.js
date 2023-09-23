
var vertCode = 
	'attribute vec3 position;' + 
	'uniform mat4 mmat;' +
	'uniform mat4 vmat;' +
	'uniform mat4 pmat;' +

	'attribute vec3 color;' +
	'varying vec3 vColor;' +

	'void main(void) {' + 

	' gl_Position = pmat * vmat * mmat * vec4(position , 1.0);' + 
	' vColor = color;' +

	'}';

var fragCode = 
	'precision mediump float;' +
	'varying vec3 vColor;' +

	'void main(void) {' + 

	' gl_FragColor = vec4(vColor , 1.0);' + 

	'}';


