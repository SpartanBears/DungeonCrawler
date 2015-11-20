function Dungeon(name){

	this.name = name;
	this.steps = new Array(); //Array

	//Methods
	this.pushStep = pushStep;
	this.popStep = popStep;
	
	this.setName = setName;
	this.setSteps = setSteps;

	this.getName = getName;
	this.getSteps = getSteps;
}

function pushStep(step){

	this.steps.push(step);
}

function popStep(stepId){

	//TODO
}

//----------------------------

function setName(){

}

function getName(){

}

function setSteps(){

}

function getSteps(){

}