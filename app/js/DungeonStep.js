/* 
	type
		w = wall
		d = door
		p = pit
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
	this.checked = false;
	this.difficulty = 30;

	//Methods
	this.stepEvent = stepEvent;
	this.stepEventRandom = stepEventRandom;
	this.isWalkable = isWalkable;
	this.stepXYEqualTo = stepXYEqualTo;

	this.setX = setX;
	this.setY = setY;
	this.setType = setType;
	this.setGateway = setGateway;
	this.setChecked = setChecked;
	this.setDifficulty = setDifficulty;

	this.getX = getX;
	this.getY = getY;
	this.getType = getType;
	this.getGateway = getGateway;
	this.getXYString = getXYString;
	this.getChecked = getChecked;
	this.getDifficulty = getDifficulty;

}

function stepEvent(){

	//EVENTO

}

function stepEventRandom(){

	//EVENTO RANDOM
}

//Two steps are "equal" if their x and y attributes are equal
function stepXYEqualTo(step){

	var equal = false;

	if(this.getX() == step.getX() && this.getY() == step.getY()){

		equal = true;
	}

	return equal;
}

//Returns a boolean indicating if the current step is walkable by the character
function isWalkable(character){

	var walkable = true;

	switch(this.getType()){

		case 'wall':

			walkable = false;

		break;

		case 'pit':

			if(character.getJob() != 'rogue'){

				walkable = false;
			}

		break;

		case 'force_field':

			if(character.getJob() != 'mage'){

				walkable = false;
			}

		break;

		case 'barred_door':

			if(character.getJob() != 'warrior'){

				walkable = false;
			}

		break;

		case 'door':

			if(character.getPrimaryStat() <= this.getDifficulty()){


				walkable = false;
			}	

		break;
	}

	return walkable;
}


//----------------------------
function setId(id){

	this.id = id;
}

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

function setChecked(flag){

	this.checked = flag;
}

function setDifficulty(difficulty){

	this.difficulty = difficulty;
}

function getId(){

	return this.id;
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

function getChecked(){

	return this.checked;
}

function getDifficulty(){

	return this.difficulty;
}

//Returns x,y coords as string (x,y)
function getXYString(){

	var out = "( ";

	out += this.getX();

	out += " , ";

	out += this.getY();

	out += " )";

	return out;
}