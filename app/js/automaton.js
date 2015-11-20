function Automaton(name){

	this.name = name;
	this.currentStep = currentStep; //(x,y)
	this.environment = new Dungeon("empty");

	//Methods
	this.walk = walk;

	this.setCurrentStep = setCurrentStep;
	this.setEnvironment = setEnvironment;

	this.getCurrentStep = getCurrentStep;
	this.getEnvironment = getEnvironment;
}

function walk(currentStep){

	
}

//------------------------------------

function setName(name){

	this.name = name;
}

function setCurrentStep(step){

	this.step = step;
}

function setEnvironment(environment){

	this.environment = environment;
}

function getName(){

	return this.name;
}

function getCurrentStep(){

	return this.currentStep;
}

function getEnvironment(){

	return this.environment;
}

