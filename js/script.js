//get Canvas
	const canvas = document.getElementById('canvasID');
	const ctx = canvas.getContext('2d');	
//Arrow
var mainCar = function(){
	this.x = 0;
	this.y = 0;
	this.row = 480; // Edit
	this.colum = 768; // Edit
	this.framX = 3;// Additional edit
	this.framY = 0; // Additional edit
	this.currentFram = 0;
	this.image = new Image();
	this.image.src = "image/maincarshoot.png";
	
	this.draw = function(xcanvas, ycanvas){
	ctx.clearRect(xcanvas, ycanvas, this.row, this.colum);
	ctx.drawImage(this.image, this.x, this.y, this.row, this.colum, xcanvas, ycanvas, this.row, this.colum);
	if (this.currentFram < this.framX - 1){
			this.x += this.row;
			this.currentFram++;
	}
	else{
			this.x = 0;
			this.currentFram = 0;
	}
}
}



