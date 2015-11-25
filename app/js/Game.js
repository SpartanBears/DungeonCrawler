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

function autoPlay(verbose, stepsQ){

	var character = new Character('rogue', 30);

	var steps = [
		new DungeonStep(0,0,0,"path","entrance"), new DungeonStep(1,1,0,"path","none"), new DungeonStep(2,2,0,"door","none"), 
		new DungeonStep(3,3,0,"path","none"), new DungeonStep(4,4,0,"path","none"), new DungeonStep(5,4,1,"path","none"), new DungeonStep(5,4,2,"path","none"),
		new DungeonStep(5,5,0,"path","exit"),
	];

	var d1 = new Dungeon("test");

	for(var index = 0; index < steps.length; index++){

		d1.pushStep(steps[index]);
	}

	var auto = new Automaton(character);
	auto.setEnvironment(d1);
	auto.initAutomaton();

	document.body.innerHTML = "";

	var log = document.createElement('div');

	document.body.insertBefore(log, document.body.childNodes[0]);

	if(verbose){

		for(var index = 1; index <= stepsQ; index++){

			var logEntry = document.createElement('span');
			var content = "["+index+"] " + auto.getCurrentStep().getXYString();
			
			auto.walk();

			content += " -> " + auto.getCurrentStep().getXYString() + "<br />";

			logEntry.innerHTML = content;

			log.appendChild(logEntry);
		}

	}else{

		//TODO?
	}

}