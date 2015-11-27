window.onload = function(){

	var dungeonContainer = document.createElement('div');
	dungeonContainer.id = "dungeonContainer";

	var dungeonSelector = document.createElement('select');
	dungeonSelector.id = "dungeonSelector";

	var dungeonStart = document.createElement('input');
	dungeonStart.id = "dungeonStart";
	dungeonStart.setAttribute("type", "button");
	dungeonStart.value = "Start";
	dungeonStart.onclick = function(){

		startSelectedDungeon();
	}

	var jobSelector = document.createElement('select');
	jobSelector.id = "jobSelector";

	var levelSelector = document.createElement('select');
	levelSelector.id = "levelSelector";

	document.body.appendChild(dungeonContainer);
	document.body.appendChild(dungeonSelector);
	document.body.appendChild(jobSelector);
	document.body.appendChild(levelSelector);
	document.body.appendChild(dungeonStart);

	dungeonSelectorInit();
	jobSelectorInit();
	levelSelectorInit();

	
}

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

function autoPlayVisual(dungeonIndex, job, level){

	var character = new Character(job, level);

	var d = dungeonRepo[dungeonIndex];
	d.uncheckAll();

	var stepsSize = getStepsXYSize(d.getSteps());
	var stepsX = getStepsXSize(stepsSize);
	var stepsY = getStepsYSize(stepsSize);

	var auto = new Automaton(character);
	auto.setEnvironment(d);
	auto.initAutomaton();

	dungeonContainer.innerHTML = "";
	dungeonContainer.appendChild(getVisualDungeon(stepsX, stepsY, d));

	var run = setInterval(function(){

		running = true;

		auto.walk();

		updateCharacterPosition(auto.getDirection(), auto.getCurrentStep(), auto.getPreviousStep());

		if(auto.getCurrentStep().getGateway() == 'exit'){

			auto.walk();

			updateCharacterPosition(auto.getDirection(), auto.getCurrentStep(), auto.getPreviousStep());

			enableStartButton();

			clearInterval(run);
		}

	}, 50);
	
}

function updateCharacterPosition(direction, currentStep, previousStep){

	var previousTdId = previousStep.getY() + "_" + previousStep.getX();

	var currentTdId = currentStep.getY() + "_" + currentStep.getX();

	var previousTd = document.getElementById(previousTdId);

	var currentTd = document.getElementById(currentTdId);

	currentTd.className = currentTd.className.replace(" currentPos", "");
	currentTd.className = currentTd.className.replace(" north", "");
	currentTd.className = currentTd.className.replace(" east", "");
	currentTd.className = currentTd.className.replace(" south", "");
	currentTd.className = currentTd.className.replace(" west", "");

	previousTd.className = previousTd.className.replace(" currentPos", "");
	previousTd.className = previousTd.className.replace(" north", "");
	previousTd.className = previousTd.className.replace(" east", "");
	previousTd.className = previousTd.className.replace(" south", "");
	previousTd.className = previousTd.className.replace(" west", "");

	if(previousTd.className.indexOf("checked") == -1){

		previousTd.className = previousTd.className + " checked";
	}

	currentTd.className = currentTd.className + " currentPos " + direction;

}

function getVisualDungeon(sizeX, sizeY, dungeon){

	var table = document.createElement('table');

	for(var row = 0; row <= sizeY; row++){

		var tr = document.createElement('tr');

		for(var col = 0; col <= sizeX; col++){

			var td = document.createElement('td');
			td.id = row+"_"+col;

			td.className = "wall";

			var auxStep = new DungeonStep(0, col, row, "path", "none", 0);

			if(dungeon.isStepExists(auxStep)){

				switch(dungeon.getStepXY(col, row).getGateway()){

					case 'entrance':

						td.className = "entrance";

					break;

					case 'exit':

						td.className = "exit";

					break;
				}

				switch(dungeon.getStepXY(col, row).getType()){

					case 'path':

						td.className = td.className + " path";

					break;

					case 'pit':

						td.className = td.className + " pit";

					break;

					case 'force_field':

						td.className = td.className + " forceField";

					break;

					case 'barred_door':

						td.className = td.className + " barredDoor";

					break;

					case 'door':

						td.className = td.className + " door";

					break;
				}

			}

			tr.appendChild(td);
		}

		table.appendChild(tr);
	}

	return table;
}

function startSelectedDungeon(){

	var dungeonSelect = document.getElementById("dungeonSelector");
	var jobSelect = document.getElementById("jobSelector");
	var levelSelect = document.getElementById("levelSelector");

	var dungeon = dungeonSelect.options[dungeonSelect.selectedIndex].value;
	var job = jobSelect.options[jobSelect.selectedIndex].value;
	var level = levelSelect.options[levelSelect.selectedIndex].value;

	disableStartButton();

	autoPlayVisual(dungeon, job, level);
}

function disableStartButton(){

	document.getElementById("dungeonStart").disabled = true;
}

function enableStartButton(){

	document.getElementById("dungeonStart").disabled = false;
}

function dungeonSelectorInit(){

	for(var index = 0; index < dungeonRepo.length; index++){

		var option = document.createElement("option");
		option.value = index;
		option.text = dungeonRepo[index].getName() + " - difficulty: " + dungeonRepo[index].getSteps()[0].getDifficulty();

		document.getElementById("dungeonSelector").appendChild(option);
	}
}

function jobSelectorInit(){

	var options = ["warrior", "rogue", "mage"];

	for(var index = 0; index < options.length; index++){

		var option = document.createElement("option");
		option.value = options[index];
		option.text = options[index];

		document.getElementById("jobSelector").appendChild(option);
	}
}

function levelSelectorInit(){

	for(var index = 1; index <= 10; index++){

		var option = document.createElement("option");
		option.value = index*10;
		option.text = index*10;

		document.getElementById("levelSelector").appendChild(option);
	}
}

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

