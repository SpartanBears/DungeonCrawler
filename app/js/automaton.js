function Automaton(character){

	this.character = character;
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
	this.fight = fight;
	this.loot = loot;
	this.receiveDamage = receiveDamage;
	this.addStatusAilment = addStatusAilment;
	this.checkStatusAilments = checkStatusAilments;

	this.setCurrentStep = setCurrentStep;
	this.setPreviousStep = setPreviousStep;
	this.setEnvironment = setEnvironment;
	this.setCharacter = setCharacter;

	this.getCurrentStep = getCurrentStep;
	this.getPreviousStep = getPreviousStep;
	this.getEnvironment = getEnvironment;
	this.getCharacter = getCharacter;
}

function initAutomaton(){

	this.getEnvironment().getEntrance().setChecked(true);

	this.setCurrentStep(this.getEnvironment().getEntrance());
	this.setPreviousStep(this.getEnvironment().getEntrance());
}

function fight(enemy){

	switch(enemy.getType()){

		case 'player':

			//TODO

		break;

		case 'npc':

			//TODO

		break;

		case 'monster':

			//TODO

		break;
	}
}

function receiveDamage(damage){

	/*reduce damage (armor, stats, job, perks, skills, deity, etc)
	then apply*/

}

function addStatusAilment(ailment){

	/*receive and apply ailment effect*/
}

function checkStatusAilments(){

	/*checks ailments duration and applies effects accordingly*/
}

function loot(items){

	/*add items to its collection from the items array*/
}

function walk(){

	var surroundings = this.checkSurroundings();

	var walkableSteps = this.selectWalkable(surroundings);

	var found = false;

	var allChecked = false;

	var index = 0;

	while(!found && index < walkableSteps.length){

		if(walkableSteps.length == 1){

			if(walkableSteps[index].isObstacle()){

				if(this.solveObstacle(walkableSteps[index])){

					this.move(walkableSteps[index]);

					found = true;

				}else{

					console.log("STUCK");

					found = true;
				}

			}else{

				this.move(walkableSteps[index]);

				found = true;
			}
			
		}else if(allChecked){

			if(!walkableSteps[index].stepXYEqualTo(this.getPreviousStep())){

				if(walkableSteps[index].isObstacle()){

					if(this.solveObstacle(walkableSteps[index])){

						this.move(walkableSteps[index]);

						found = true;

					}else{

						index++;
					}

				}else{

					this.move(walkableSteps[index]);

					found = true;
				}
			}else{

				index++;
			}

		}else{

			if(walkableSteps[index].isChecked()){

				index++;

			}else if(!walkableSteps[index].stepXYEqualTo(this.getPreviousStep())){

				if(walkableSteps[index].isObstacle()){

					if(this.solveObstacle(walkableSteps[index])){

						this.move(walkableSteps[index]);

						found = true;

					}else{

						index++;
					}

				}else{

					this.move(walkableSteps[index]);

					found = true;
				}

			}else{

				index++;
			}
		}

		if(index == walkableSteps.length){

			index = 0;
			allChecked = true;
		}
	}
}

function move(step){

	if(this.getCurrentStep().getGateway() == 'exit'){

		console.log("I refuse to move! This is the fucking exit! Want me to move!? UH!? Well, I want you to FUCKING DIE, but you're not dead, are you? We don't always get what we want you know...");

	}else{

		this.setPreviousStep(this.getCurrentStep());
		this.setCurrentStep(step);

		this.getCurrentStep().setChecked(true);
	}
}

function solveObstacle(step){

	//console.log("Obstacle /// Type = " + step.getType() + " / Difficulty " + step.getDifficulty() + " VS Character main stat " + this.getCharacter().getPrimaryStat());

	var solved = false;

	if(this.getCharacter().getPrimaryStat() >= step.getDifficulty()){

		solved = true;
	}

	return solved;
}

function selectWalkable(surroundings){

	var walkable = new Array();

	for(var index = 0; index < surroundings.length; index++){

		//console.log("Can I walk through this? /// Type " + surroundings[index].getType() + " (" + surroundings[index].isWalkable(this.getCharacter()) + ")" + " Difficulty " + surroundings[index].getDifficulty() + " (" + (this.getCharacter().getPrimaryStat() >= surroundings[index].getDifficulty()) + ")");
		if(surroundings[index].isWalkable(this.getCharacter())){

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

function setCharacter(character){

	this.character = character;
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

function getCharacter(){

	return this.character;
}

