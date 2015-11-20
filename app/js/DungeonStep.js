/* 
	type
		w = wall
		d = door
		h = hole
		ff = force field
		bd = barred door
		p = path

	gateway
		entrance
		exit
		none

*/

function DungeonStep(id, x, y, type, gateway){
	
	this.id = id;
	this.x = x;
	this.y = y;
	this.type = type;
	this.gateway = gateway;

	//Methods
	this.stepEvent = stepEvent;
	this.stepEventRandom = stepEventRandom;

	this.setX = setX;
	this.setY = setY;
	this.setType = setType;
	this.setGateway = setGateway;

	this.getX = getX;
	this.getY = getY;
	this.getType = getType;
	this.getGateway = getGateway;
}


function stepEvent(){

	//EVENTO

}

function stepEventRandom(){

	//EVENTO RANDOM
}

//----------------------------
function setX(x){

	this.x = x;
}

function setY(y){

	this.y = y;
}

function setType(type){

	this.type = type;
}

function setGateway(gateway){

	this.gateway = gateway;
}

function getX(){

	return this.x;
}

function getY(){

	return this.y;
}

function getType(){

	return this.type;
}

function getGateway(){
	
	return this.gateway;
}