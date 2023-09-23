//var lt, ct, dt; // last time, current time, different in time
function configureDraw(){

	gl.clearColor(0.5, 0.5, 0.5, 0.9);
	gl.enable(gl.DEPTH_TEST); 
	gl.viewport(0,0,canvas.width,canvas.height);

}

var THETA = 0, 	PHI = 0, throttle = 0.95;

function drawFrame(){

	//ct = Date.now();
	//dt = ct - lt;
	//console.log('lt, ct, dt: ' + lt + ', '  + ct + ', ' + dt);

	gl.clear(gl.COLOR_BUFFER_BIT);
	
	// Draw 
	//gl.drawArrays( gl.TRIANGLES, 0, vertsCnt);
	// - 0 start at index 0, len 3, so last is idx 2
	
	//rotateZ ( modelMatrixData , rotateAngle );
	//rotateX ( modelMatrixData , rotateAngle );
	//rotateY ( modelMatrixData , rotateAngle );

	if (!drag) {
		dX *= throttle, dY *= throttle;
		THETA+=dX, PHI+=dY;
	}

	zeroOut4x4Mat ( modelMatrixData );
	identityFromZero4x4Mat ( modelMatrixData );

	rotateY ( modelMatrixData , THETA);
	rotateX ( modelMatrixData , PHI);
	
	gl.uniformMatrix4fv(mmPtr,false,modelMatrixData);

	// Draw 
	gl.drawElements(gl.TRIANGLES, indicesL,
			gl.UNSIGNED_SHORT, 0);

	//lt = ct;
	setTimeout(drawFrame, 50);
	
}


var modelMatrixData = new Float32Array ( 16 ) ,
	viewMatrixData = new Float32Array ( 16 ) ,
	projectionMatrixData = new Float32Array ( 16 ) ;

zeroOut4x4Mat ( viewMatrixData );
zeroOut4x4Mat ( projectionMatrixData );
identityFromZero4x4Mat ( viewMatrixData );

var zoom = 6.0, 
	zMin = 1, zMax = 100;
viewMatrixData[14] = viewMatrixData[14]-zoom; 


var cwbych = canvas.width/canvas.height;
calcProj( projectionMatrixData , 40, cwbych, zMin, zMax);

createShaders();
vertexBuff();
indexBuff();
colorBuff();

configureDraw();
drawFrame();
