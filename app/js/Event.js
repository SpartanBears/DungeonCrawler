//Contains monster objects
var monsters = new Array();
monsters.push(new Automaton(new Character('monstruitoA', 'warrior', 50, 'monster')));
monsters.push(new Automaton(new Character('monstruitoB', 'warrior', 50, 'monster')));
monsters.push(new Automaton(new Character('monstruitoC', 'warrior', 50, 'monster')));
monsters.push(new Automaton(new Character('monstruitoD', 'warrior', 50, 'monster')));

//Contains shrine event objects
var shrines = new Array();

//Contains trap objects
var traps = new Array();

/*	
	name
		self explanatory

	frecuency
		int 1 to 100
		100 (100% chance of being executed)
		1 (1% chance of being executed)

	type
		battle -> self explanatory
		treasure -> self explanatory
		trap -> event that causes some sort of negative effect
		shrine -> pretty random depending on deity

*/

function Event(name, frecuency, type){

	this.name = name;
	this.frecuency = frecuency;
	this.type = type;

	//Methods
	this.execute = execute;

	this.setName = setName;
	this.setFrecuency = setFrecuency;
	this.setType = setType;

	this.getName = getName;
	this.getFrecuency = getFrecuency;
	this.getType = getType;
}

function execute(automaton){

	switch(this.getType()){

		case 'battle':

			automaton.fight(getRandomObject(monsters));

		break;

		case 'treasure':

			/*automaton.loot(generateLoot())?*/

		break;

		case 'trap':

			automaton.addStatusAilment(getRandomObject(traps).getEffect());

		break;

		case 'shrine':

			automaton.addStatusAilment(getRandomObject(shrine[automaton.getCharacter().getDeity()]).getEffect());

		break;
	}
}

function getRandomObject(array){

	var randomIndex = Math.floor(Math.random() * (array.length-1));

	return shuffle(array)[randomIndex];
}

//----------------

function setName(name){

	this.name = name;
}

function setFrecuency(frecuency){

	this.frecuency = frecuency;
}

function setType(){

	this.type = type;
}

function getName(){

	return this.name;
}

function getFrecuency(){

	return this.frecuency;
}

function getType(){

	return this.type;
}

