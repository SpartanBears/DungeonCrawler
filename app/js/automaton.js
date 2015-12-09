function Automaton(character){

	this.character = character;
	this.currentStep = new DungeonStep(0,0,0,0,0);
	this.previousStep = new DungeonStep(0,0,0,0,0);
	this.environment = new Dungeon("empty");
	this.direction = "south";
	

	//Methods
	this.walk = walk;
	this.initAutomaton = initAutomaton;
	this.checkSurroundings = checkSurroundings;
	this.solveObstacle = solveObstacle;
	this.selectWalkable = selectWalkable;
	this.move = move;
	this.fight = fight;
	this.loot = loot;
	this.dealDamage = dealDamage;
	this.receiveDamage = receiveDamage;
	this.addStatusAilment = addStatusAilment;
	this.checkStatusAilments = checkStatusAilments;
	this.isAlive = isAlive;
	this.changeDirection = changeDirection;

	this.setCurrentStep = setCurrentStep;
	this.setPreviousStep = setPreviousStep;
	this.setEnvironment = setEnvironment;
	this.setCharacter = setCharacter;
	this.setDirection = setDirection;

	this.getCurrentStep = getCurrentStep;
	this.getPreviousStep = getPreviousStep;
	this.getEnvironment = getEnvironment;
	this.getCharacter = getCharacter;
	this.getDirection = getDirection;
}

function initAutomaton(){

	this.getEnvironment().getEntrance().setChecked(true);

	this.setCurrentStep(this.getEnvironment().getEntrance());
	this.setPreviousStep(this.getEnvironment().getEntrance());
}

function fight(enemy){

	switch(enemy.getCharacter().getType()){

		case 'player':

			//TODO

		break;

		case 'npc':

			//TODO

		break;

		case 'monster':

			console.log(this.getCharacter().getName() + " VS " + enemy.getCharacter().getName());

			new Combat(this, enemy).startCombat();

		break;
	}
}

function dealDamage(){

	var damage = this.getCharacter().getPrimaryStat();

	console.log(this.getCharacter().getNombre() + "attacks with " + damage);

	return damage;
}

function receiveDamage(damage){

	console.log(this.getCharacter().getNombre() + " recieves " + damage);

	this.getCharacter().setHp(this.getCharacter().getCurrentHP() - damage);

}

function addStatusAilment(ailment){

	/*receive and apply ailment effect*/
}

function checkStatusAilments(){

	/*checks ailments duration and applies effects accordingly*/
}


function isAlive(){

	var alive = true;

	/*checks whether the character is alive or not*/ 

	if(this.getCharacter().getCurrentHP() <= 0){

		alive = false;
	}

	return alive;
}

function loot(items){

	/*add items to its collection from the items array*/
}

function walk(){

	var surroundings = this.checkSurroundings(this.getDirection());

	var walkableSteps = this.selectWalkable(surroundings);

	//walkableSteps = sortWalkable(walkableSteps);
	walkableSteps = shuffle(walkableSteps);

	var found = false;

	var allChecked = false;

	var index = 0;

	while(!found){

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

					}else if(walkableSteps.length == 2){

						if(index == walkableSteps.length-1){

							this.move(walkableSteps[0]);

							found = true;

						}else{

							this.move(walkableSteps[index+1]);

							found = true;
						}

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

		if(index >= walkableSteps.length){

			index = 0;
			allChecked = true;
		}
	}
}

function move(step){

	if(this.getCurrentStep().getGateway() == 'exit'){

		this.setDirection('south');

		console.log("I refuse to move! This is the fucking exit! Want me to move!? UH!? Well, I want you to FUCKING DIE, but you're not dead, are you? We don't always get what we want you know...");

	}else{

		this.setPreviousStep(this.getCurrentStep());
		this.setCurrentStep(step);

		this.getCurrentStep().setChecked(true);

		this.changeDirection(this.getPreviousStep(), this.getCurrentStep());
	}
}

function solveObstacle(step){

	//console.log("Obstacle /// Type = " + step.getType() + " / Difficulty " + step.getDifficulty() + " VS Character main stat " + this.getCharacter().getPrimaryStat());

	var solved = false;

	if(this.getCharacter().getPrimaryStat() >= step.getDifficulty()){

		solved = true;

	}else if(step.getGateway() == "entrance" || step.getGateway() == "exit"){

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

//Sorts walkable steps, leaving obstacles first in the stack
function sortWalkable(steps){

	var sortedArray = new Array();

	var sorted = false;

	var index = 0;

	for(var index = 0; index < steps.length; index++){

		if(steps[index].isObstacle()){

			sortedArray.push(steps[index]);
		}
	}

	for(var index = 0; index < steps.length; index++){

		if(!steps[index].isObstacle()){

			sortedArray.push(steps[index]);
		}
	}

	return sortedArray;
}

/*Returns surroundings on INVERTED coord system (4 steps)
Example
       N(x,y-1)
W(x-1,y) (x,y) E(x+1,y)
	   S(x,y+1)

	   S [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}]
	   E [{x:0,y:-1},{x:0,y:1},{x:1,y:0},{x:-1,y:0}]
	   N [{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}]
	   W [{x:0,y:1},{x:0,y:-1},{x:-1,y:0},{x:1,y:0}]

	  	*/
function checkSurroundings(direction){

	var surroundings = new Array();

	switch(direction){

		case 'south':

			var checkSecuence = [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];

			for(var index = 0; index < checkSecuence.length; index++){

				var auxStep = new DungeonStep(0, this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y, 0, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y));
				}
			}

		break;

		case 'east':

			var checkSecuence = [{x:0,y:-1},{x:0,y:1},{x:1,y:0},{x:-1,y:0}];

			for(var index = 0; index < checkSecuence.length; index++){

				var auxStep = new DungeonStep(0, this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y, 0, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y));
				}
			}

		break;

		case 'north':

			var checkSecuence = [{x:0,y:1},{x:0,y:-1},{x:-1,y:0},{x:1,y:0}];

			for(var index = 0; index < checkSecuence.length; index++){

				var auxStep = new DungeonStep(0, this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y, 0, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y));
				}
			}

		break;

		case 'west':

			var checkSecuence = [{x:-1,y:0},{x:0,y:1},{x:1,y:0},{x:0,y:-1}];

			for(var index = 0; index < checkSecuence.length; index++){

				var auxStep = new DungeonStep(0, this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y, 0, 0);

				if(this.getEnvironment().isStepExists(auxStep)){

					surroundings.push(this.getEnvironment().getStepXY(this.getCurrentStep().getX() + checkSecuence[index].x, this.getCurrentStep().getY() + checkSecuence[index].y));
				}
			}

		break;
	}

	return surroundings;
}

//Must be called on move()
function changeDirection(previousStep, currentStep){

	//S,E,N,W
	var directions = [{x:0,y:1},{x:1,y:0},{x:0,y:-1},{x:-1,y:0}];

	var found = false;

	var index = 0;

	while(!found && index < directions.length){

		if((previousStep.getX() + directions[index].x) == currentStep.getX()
			&& (previousStep.getY() + directions[index].y) == currentStep.getY()){

			found = true;

			switch(index){

				case 0:

					this.setDirection('south');

				break;

				case 1:

					this.setDirection('east');

				break;

				case 2:

					this.setDirection('north');

				break;

				case 3:

					this.setDirection('west');

				break;
			}

		}else{

			index++;
		}
	}
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

function setDirection(direction){

	this.direction = direction;
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

function getDirection(){

	return this.direction;
}

