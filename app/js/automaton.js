function Automaton(name){

	this.name = name;
	this.currentStep = new DungeonStep(0,0,0,0,0);
	this.previousStep = new DungeonStep(0,0,0,0,0);
	this.environment = new Dungeon("empty");

	//Methods
	this.walk = walk;

	this.setCurrentStep = setCurrentStep;
	this.setEnvironment = setEnvironment;

	this.getCurrentStep = getCurrentStep;
	this.getEnvironment = getEnvironment;
}

function walk(){


}

/*Returns surroundings (4 steps)
Example
       1(x,y+1)
0(x-1,y) (x,y) 2(x+1,y)
	   3(x,y-1)
	  	*/
function checkSurroundings(){

	var surroundings = new Array();

	for(var index = 0; index < 4; index++){

		switch(index){

			case 0:

				var auxStep = (0, this.getCurrentStep().getX()-1, this.getCurrentStep().getY(), 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX()-1, this.getCurrentStep().getY()));
				}

			break;

			case 1:

				var auxStep = (0, this.getCurrentStep().getX(), this.getCurrentStep().getY()+1, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX(), this.getCurrentStep().getY()+1));
				}
				
			break;

			case 2:

				var auxStep = (0, this.getCurrentStep().getX()+1, this.getCurrentStep().getY(), 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX()+1, this.getCurrentStep().getY()));
				}
				
			break;

			case 3:

				var auxStep = (0, this.getCurrentStep().getX(), this.getCurrentStep().getY()-1, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX(), this.getCurrentStep().getY()-1));
				}
				
			break;
		}
		
	}

	return surroundings;
}

//------------------------------------

function setName(name){

	this.name = name;
}

function setCurrentStep(step){

	this.currentStep = step;
}

function setPreviousStep(step){

	this.previousStep = step;
}

function setEnvironment(environment){

	this.environment = environment;
}

function getName(){

	return this.name;
}

function getCurrentStep(step){

	return this.currentStep;
}

function getPreviousStep(step){

	return this.previousStep;
}

function getEnvironment(){

	return this.environment;
}

