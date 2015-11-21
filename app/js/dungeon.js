function Dungeon(name){

	this.name = name;
	this.steps = new Array(); //Array

	//Methods
	this.pushStep = pushStep;
	this.popStep = popStep;
	this.isStepExists = isStepExists;
	
	this.setName = setName;
	this.setSteps = setSteps;

	this.getName = getName;
	this.getSteps = getSteps;
	this.getSize = getSize;
	this.getEntrance = getEntrance;
	this.getStepXY = getStepXY;
}

function pushStep(step){

	this.steps.push(step);
}

function popStep(stepId){

	//TODO
}

//Checks if there is a step with the (x,y) coords
function isStepExists(step){

	var exists = false;

	var index = 0;

	while(!exists && index < this.getSize()){

		if(this.getSteps()[index].stepXYEqualTo(step)){

			exists = true;
		}

		index++;
	}

	return exists;
}

//----------------------------

function setName(name){

	this.name = name;
}

function setSteps(steps){

	this.steps = steps;
}

function getName(){

	return this.name;
}

function getSteps(){

	return this.steps;
}

//Returns the number of steps of the dungeon (walkable or not)
function getSize(){

	return this.getSteps().length;
}

//Return a step by its id
function getStepId(id){

	var found = false;

	var index = 0;

	var step = null;

	while(!found || index < this.getSize()){

		if(this.getSteps()[index].getId() == id){

			found = true;
			step = this.getSteps()[index];
		}

		index++;
	}

	return step;
}

//Returns the step with (x,y) coords
function getStepXY(x, y){

	var found = false;

	var index = 0;

	var step = null;

	while(!found && index < this.getSize()){

		if(this.getSteps()[index].getX() == x && this.getSteps()[index].getY() == y){

			found = true;
			step = this.getSteps()[index];
		}

		index++;
	}

	return step;
}

//Returns the step with gateway = entrance
function getEntrance(){

	var found = false;

	var index = 0;

	var step = null;

	while(!found || index < this.getSize()){

		if(this.getSteps()[index].getGateway() == 'entrance'){

			found = true;
			step = this.getSteps()[index];
		}

		index++;
	}

	return step;
}