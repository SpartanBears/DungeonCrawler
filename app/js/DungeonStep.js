/* 
	type
		wall
		door
		pit
		force_field
		barred_door
		path

	gateway
		entrance
		exit
		none

*/

function DungeonStep(id, x, y, type, gateway, difficulty){
	
	this.id = id;
	this.x = x;
	this.y = y;
	this.type = type;
	this.gateway = gateway;
	this.checked = false;
	this.difficulty = difficulty;

	//Methods
	this.stepEvent = stepEvent;
	this.stepEventRandom = stepEventRandom;
	this.isWalkable = isWalkable;
	this.isObstacle = isObstacle;
	this.stepXYEqualTo = stepXYEqualTo;

	this.setId = setId;
	this.setX = setX;
	this.setY = setY;
	this.setType = setType;
	this.setGateway = setGateway;
	this.setChecked = setChecked;
	this.setDifficulty = setDifficulty;

	this.getId = getId;
	this.getX = getX;
	this.getY = getY;
	this.getType = getType;
	this.getGateway = getGateway;
	this.getXYString = getXYString;
	this.isChecked = isChecked;
	this.getDifficulty = getDifficulty;

}

function stepEvent(automaton, type, frecuency){

	var wachimingo = new Event("battle_test", frecuency, type);

	var randomIndex = Math.floor(Math.random() * 100);

	if(randomIndex <= wachimingo.getFrecuency()){

		wachimingo.execute(automaton);
	}
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

	var walkable = false;

	switch(this.getType()){

		case 'path':

			walkable = true;

		break;

		case 'pit':

			if(character.getJobType() == 'rogue'){

				walkable = true;
			}

		break;

		case 'force_field':

			if(character.getJobType() == 'mage'){

				walkable = true;
			}

		break;

		case 'barred_door':

			if(character.getJobType() == 'warrior'){

				walkable = true;
			}

		break;

		case 'door':

			walkable = true;

		break;
	}

	return walkable;
}

function isObstacle(){

	var obstacle = false;

	if(this.getType() != 'path'){

		obstacle = true;
	}

	return obstacle;
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

function isChecked(){

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