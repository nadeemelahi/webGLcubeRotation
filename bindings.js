
var mmPtr;
function vertexBuff(){
	var vertex_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW ); 


	var posPtr= gl.getAttribLocation(shaderProgram, "position");
	//point an attribute to the currently bound VBO
	gl.vertexAttribPointer(posPtr, vertsDim, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(posPtr);


	mmPtr = gl.getUniformLocation(shaderProgram, "mmat");
	gl.uniformMatrix4fv(mmPtr,false,modelMatrixData);

	var vmPtr = gl.getUniformLocation(shaderProgram, "vmat");
	gl.uniformMatrix4fv(vmPtr,false,viewMatrixData);

	var pmPtr = gl.getUniformLocation(shaderProgram, "pmat");
	gl.uniformMatrix4fv(pmPtr,false,projectionMatrixData);


	// Unbind the buffer
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	//gl.disableVertexAttribArray(coord);
}

function indexBuff(){
         var index_Buffer = gl.createBuffer();
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_Buffer);
         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
         // Unbind the buffer
         //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}

function colorBuff(){
	var color_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
	gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

	var color = gl.getAttribLocation(shaderProgram, "color");
	gl.vertexAttribPointer(color,colorsDim,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(color);

	// Unbind the buffer
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
}
