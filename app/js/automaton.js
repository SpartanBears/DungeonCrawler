function Automaton(name){

	this.name = name;
	this.currentStep = new DungeonStep(0,0,0,0,0);
	this.previousStep = new DungeonStep(0,0,0,0,0);
	this.environment = new Dungeon("empty");

	//Methods
	this.walk = walk;
	this.initAutomaton = initAutomaton;
	this.checkSurroundings = checkSurroundings;
	this.solveObstacle = solveObstacle;

	this.setCurrentStep = setCurrentStep;
	this.setPreviousStep = setPreviousStep;
	this.setEnvironment = setEnvironment;

	this.getCurrentStep = getCurrentStep;
	this.getPreviousStep = getPreviousStep;
	this.getEnvironment = getEnvironment;
}

function initAutomaton(){

	this.setCurrentStep(this.getEnvironment().getEntrance());
	this.setPreviousStep(this.getEnvironment().getEntrance());
}

function walk(){

	console.log(this.getCurrentStep().getXYString());

	var surroundings = this.checkSurroundings();

	var found = false;

	var index = 0;

	while(!found && index < surroundings.length){

		switch(surroundings[index].getType()){

			case 'path':

				if(this.getPreviousStep().stepXYEqualTo(surroundings[index])){

					surroundings = surroundings.splice(index, 1);

				}else{

					this.setPreviousStep(this.getCurrentStep());
					this.setCurrentStep(surroundings[index]);
					found = true;
				}

			break;

			case 'door':
			break;

			case 'barred_door':
			break;

			case 'pit':
			break;

			case 'force_field':
			break;

			default:
			break;
		}

		index++;
	}
	
}

function solveObstacle(){

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

		var auxStep;

		switch(index){

			case 0:

				auxStep = new DungeonStep(0, this.getCurrentStep().getX()-1, this.getCurrentStep().getY(), 0, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX()-1, this.getCurrentStep().getY()));
				}

			break;

			case 1:

				auxStep = new DungeonStep(0, this.getCurrentStep().getX(), this.getCurrentStep().getY()+1, 0, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX(), this.getCurrentStep().getY()+1));
				}
				
			break;

			case 2:

				auxStep = new DungeonStep(0, this.getCurrentStep().getX()+1, this.getCurrentStep().getY(), 0, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX()+1, this.getCurrentStep().getY()));
				}
				
			break;

			case 3:

				auxStep = new DungeonStep(0, this.getCurrentStep().getX(), this.getCurrentStep().getY()-1, 0, 0);

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

