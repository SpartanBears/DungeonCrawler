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
	this.selectWalkable = selectWalkable;
	this.move = move;

	this.setCurrentStep = setCurrentStep;
	this.setPreviousStep = setPreviousStep;
	this.setEnvironment = setEnvironment;

	this.getCurrentStep = getCurrentStep;
	this.getPreviousStep = getPreviousStep;
	this.getEnvironment = getEnvironment;
}

function initAutomaton(){

	this.getEnvironment().getEntrance().setChecked(true);

	this.setCurrentStep(this.getEnvironment().getEntrance());
	this.setPreviousStep(this.getEnvironment().getEntrance());
}

function walk(){

	var surroundings = this.checkSurroundings();

	var walkableSteps = this.selectWalkable(surroundings);

	var found = false;

	var allChecked = false;

	var index = 0;

	while(!found && index < walkableSteps.length){

		if(allChecked){

			if(walkableSteps.length == 1){

				this.move(walkableSteps[index]);

				found = true;
				
			}else if(!walkableSteps[index].stepXYEqualTo(this.getPreviousStep())){

				this.move(walkableSteps[index]);

				found = true;

			}else{

				index++;
			}

		}else{

			if(walkableSteps[index].stepXYEqualTo(this.getPreviousStep())){

				if(allChecked){

					this.move(walkableSteps[index]);

					found = true;

				}else{

					index++;
				}

			}else{

				if(walkableSteps[index].isChecked()){

					if(allChecked){

						this.move(walkableSteps[index]);

						found = true;

					}else{

						index++;
					}

				}else{

					this.move(walkableSteps[index]);

					found = true;
				}
			}

			if(index == walkableSteps.length){

				index = 0;
				allChecked = true;
			}	
		}
	}
}

function move(step){

	if(!step.isWalkable()){

		if(this.solveObstacle(step)){

			this.setPreviousStep(this.getCurrentStep());
			this.setCurrentStep(step);

			this.getCurrentStep().setChecked(true);
		}

	}else{

		this.setPreviousStep(this.getCurrentStep());
		this.setCurrentStep(step);

		this.getCurrentStep().setChecked(true);
	}
	
}

function solveObstacle(){

	var solved = true;

	//TODO

	return solved;
}

function selectWalkable(surroundings){

	var walkable = new Array();

	for(var index = 0; index < surroundings.length; index++){

		if(surroundings[index].isWalkable(/*this.getCharacter()*/)){

			walkable.push(surroundings[index]);
		}
	}

	return walkable;
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

function shuffle(array) {

	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
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

