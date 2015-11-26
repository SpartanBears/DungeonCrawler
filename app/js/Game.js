/*TESTING - NOT FINAL CODE*/
function Character(job, primaryStat){

	this.job = job;
	this.primaryStat = primaryStat;

	this.getJob = getJob;
	this.getPrimaryStat = getPrimaryStat;
}

function getJob(){

	return this.job;
}

function getPrimaryStat(){

	return this.primaryStat;
}
/*TESTING - NOT FINAL CODE*/

function autoPlayVisual(){

	var dungeonContainer = document.createElement('div');

	document.body.insertBefore(dungeonContainer, document.body.childNodes[0]);

	var character = new Character('mage', 50);

	var stepsSize = getStepsXYSize(arraySteps);
	var stepsX = getStepsXSize(stepsSize);
	var stepsY = getStepsYSize(stepsSize);

	var auto = new Automaton(character);
	auto.setEnvironment(d);
	auto.initAutomaton();

	dungeonContainer.innerHTML = "";
	dungeonContainer.appendChild(getVisualXY(stepsX, stepsY, auto.getCurrentStep(), d));

	var drawLast = false;

	var run = setInterval(function(){

		auto.walk();

		dungeonContainer.innerHTML = "";
		dungeonContainer.appendChild(getVisualXY(stepsX, stepsY, auto.getCurrentStep(), d));

		if(auto.getCurrentStep().getGateway() == 'exit'){

			auto.walk();

			dungeonContainer.innerHTML = "";
			dungeonContainer.appendChild(getVisualXY(stepsX, stepsY, auto.getCurrentStep(), d));

			clearInterval(run);
		}

	}, 250);
	
}

function getVisualXY(sizeX, sizeY, step, dungeon){

	var table = document.createElement('table');

	for(var row = 0; row <= sizeY; row++){

		var tr = document.createElement('tr');

		for(var col = 0; col <= sizeX; col++){

			var td = document.createElement('td');
			td.id = row+"_"+col;

			td.className = "wall";

			var auxStep = new DungeonStep(0, col, row, "path", "none", 0);

			if(dungeon.isStepExists(auxStep)){

				switch(dungeon.getStepXY(col, row).getType()){

					case 'path':

						td.className = "path";

					break;

					case 'pit':

						td.className = "pit";

					break;

					case 'force_field':

						td.className = "forceField";

					break;

					case 'barred_door':

						td.className = "barredDoor";

					break;

					case 'door':

						td.className = "door";

					break;
				}

			}

			if(step.getX() == col && step.getY() == row){

				td.className = td.className + " currentPos";
			}

			tr.appendChild(td);
		}

		table.appendChild(tr);
	}

	return table;
}

//Returns 
function getStepsXYSize(steps){

	var x = 0;
	var y = 0;

	for(var index = 0; index < steps.length; index++){

		if(steps[index].getX() > x){

			x = steps[index].getX();
		}

		if(steps[index].getY() > y){

			y = steps[index].getY();
		}

	}

	return x + "_" + y;
}

function getStepsXSize(sizeString){

	return parseInt(sizeString.split("_")[0]);
}

function getStepsYSize(sizeString){

	return parseInt(sizeString.split("_")[1]);
}

