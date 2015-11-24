function autoPlay(verbose, stepsQ){

	var steps = [
		new DungeonStep(0,0,0,"path","entrance"), new DungeonStep(1,1,0,"path","none"), new DungeonStep(2,2,0,"path","none"), 
		new DungeonStep(3,3,0,"path","none"), new DungeonStep(4,4,0,"path","none"), new DungeonStep(5,4,1,"path","none"), new DungeonStep(5,4,2,"path","none"),
		new DungeonStep(5,5,0,"path","exit"),
	];

	var d1 = new Dungeon("test");

	for(var index = 0; index < steps.length; index++){

		d1.pushStep(steps[index]);
	}

	var auto = new Automaton("oswo");
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

			console.log(auto.selectWalkable(auto.checkSurroundings()));

			logEntry.innerHTML = content;

			log.appendChild(logEntry);
		}

	}else{

		//TODO?
	}

}