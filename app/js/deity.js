function Deity(name, stats, desc, personality, race, job, genre){

	this.name = name;
	this.buffStats = stats;
	this.desc = desc;
	this.personality = personality;
	this.race = race;
	this.job = job;
	this.genre = genre;


	this.setName = setName;
	this.setBuff = setBuff;
	this.setDesc = setDesc;
	this.setPersonality = setPersonality;
	this.setRace = setRace;
	this.setJob = setJob;
	this.setgenre = setgenre;

	this.getName = getName;
	this.getBuff = getBuff;
	this.getDesc = getDesc;
	this.getPersonality = getPersonality;
	this.getRace = getRace;
	this.getJob = getJob;
	this.getgenre = getgenre;

}

// SETTERS
function setName(newName){
	this.name = newName;
}

function setBuff(stats){
	this.buffStats = stats;
}

function setDesc(desc){
	this.desc = desc;
}

function setPersonality(perso){
	this.personality = perso;
}

function setRace(race){
	this.race = race;
}

function setJob(job){
	this.job = job;
}

function setgenre(genre){
	this.genre = genre;
}

// GETTERS
function getName(){
	return this.name;
}

function getBuff(){
	return this.buffStats;
}

function getDesc(){
	return this.desc;
}

function getPersonality(){
	return this.personality;
}

function getRace(){
	return this.race;
}

function getJob(){
	return this.job;
}

function getgenre(){
	return this.genre;
}