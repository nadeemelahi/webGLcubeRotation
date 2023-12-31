

var i, l4x4=16;
function zeroOut4x4Mat( m4x4 ){
	for(i=0; i<l4x4; i++){
		m4x4[i] = 0;
	}
}
function identityFromZero4x4Mat( m4x4 ){
	m4x4[0] = 1;
	m4x4[5] = 1;
	m4x4[10] = 1;
	m4x4[15] = 1;

}
function calcProj(m4x4, angle, cwbych, zMin, zMax){
	// cwbych canvas.width / canvas.height
	var ang = Math.tan( (angle*0.5)*Math.PI/180 );
	m4x4[0] = 0.5/ang;
	m4x4[5] = 0.5*cwbych/ang;
	m4x4[10] = -(zMax+zMin)/(zMax-zMin);
	m4x4[11] = -1;
	m4x4[14] = (-2*zMax*zMin)/(zMax-zMin);
	m4x4[15] = 0;

}
function rotateZ(m, angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	var mv0 = m[0], mv4 = m[4], mv8 = m[8];

	m[0] = c*m[0]-s*m[1];
	m[4] = c*m[4]-s*m[5];
	m[8] = c*m[8]-s*m[9];

	m[1]=c*m[1]+s*mv0;
	m[5]=c*m[5]+s*mv4;
	m[9]=c*m[9]+s*mv8;
}
function rotateX(m, angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	var mv1 = m[1], mv5 = m[5], mv9 = m[9];

	m[1] = m[1]*c-m[2]*s;
	m[5] = m[5]*c-m[6]*s;
	m[9] = m[9]*c-m[10]*s;

	m[2] = m[2]*c+mv1*s;
	m[6] = m[6]*c+mv5*s;
	m[10] = m[10]*c+mv9*s;
}
function rotateY(m, angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	var mv0 = m[0], mv4 = m[4], mv8 = m[8];

	m[0] = c*m[0]+s*m[2];
	m[4] = c*m[4]+s*m[6];
	m[8] = c*m[8]+s*m[10];

	m[2] = c*m[2]-s*mv0;
	m[6] = c*m[6]-s*mv4;
	m[10] = c*m[10]-s*mv8;
}
