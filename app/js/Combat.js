function Combat(fighterA, fighterB){
	
	this.fighterA = fighterA;
	this.fighterB = fighterB;

	//Methods
	this.startCombat = startCombat;
	this.getAttackSpeedDifference = getAttackSpeedDifference;
	this.getFastestFighter = getFastestFighter;
	this.getSlowestFighter = getSlowestFighter;

	this.setFighterA = setFighterA;
	this.setFighterB = setFighterB;

	this.getFighterA = getFighterA;
	this.getFighterB = getFighterB;
}

function startCombat(){

	while(this.getFighterA().isAlive() && this.getFighterB().isAlive()){

		for(var index = 0; index < this.getAttackSpeedDifference(); index++){

			this.getSlowestFighter().receiveDamage(this.getFastestFighter().dealDamage());
		}

		if(this.getSlowestFighter().isAlive()){

			this.getFastestFighter().receiveDamage(this.getSlowestFighter().dealDamage());
		}
	}

	if(this.getFastestFighter().isAlive()){

		console.log(this.getFastestFighter().getCharacter().getNombre() + " WON");

	}else{

		console.log(this.getSlowestFighter().getCharacter().getNombre() + " WON");
	}
}

/* returns an int (Math.round) showing how many attacks can the 
fastest fighter perform before the rival can attack him.*/
function getAttackSpeedDifference(){

	return Math.round(this.getFastestFighter().getCharacter().getAgi()/this.getSlowestFighter().getCharacter().getAgi());
}

function getFastestFighter(){

	if(this.getFighterA().getCharacter().getAgi() > this.getFighterB().getCharacter().getAgi()){

		return this.getFighterA();

	}else if(this.getFighterA().getCharacter().getAgi() < this.getFighterB().getCharacter().getAgi()){

		return this.getFighterB();

	}else if(this.getFighterA().getCharacter().getLuk() > this.getFighterB().getCharacter().getLuk()){

		return this.getFighterA();

	}else{

		return this.getFighterB();
	}
}

function getSlowestFighter(){

	if(this.getFighterA().getCharacter().getAgi() > this.getFighterB().getCharacter().getAgi()){

		return this.getFighterB();

	}else if(this.getFighterA().getCharacter().getAgi() < this.getFighterB().getCharacter().getAgi()){

		return this.getFighterA();

	}else if(this.getFighterA().getCharacter().getLuk() > this.getFighterB().getCharacter().getLuk()){

		return this.getFighterB();

	}else{

		return this.getFighterA();
	}
}

//------------------------

function setFighterA(automaton){
	
	this.fighterA = automaton;	
}

function setFighterB(automaton){
	
	this.fighterB = automaton;	
}

function getFighterA(){

	return this.fighterA;
}

function getFighterB(){

	return this.fighterB;
}