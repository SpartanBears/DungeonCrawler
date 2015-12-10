
function Character(cNombre, cRaza, cClase, cOrientacion, cgenre){

	// var id = cId;
	this.hp = 1000;
	this.nombre = cNombre;
	this.nivel = 0;
	this.exp = 0;
	this.raza = cRaza;
	this.job = cClase.getJobName();
	this.jobType = cClase;
	this.inventory = new Inventory();

	// var edad = cEdad;
	this.skills = new Array();

	this.stats = new Stats(0, 0, 0, 0, 0);
	this.equip = new EquipSlots();

	this.orientacion = cOrientacion;
	this.genre = cgenre;
	
	/*stats:
	fuerza, agi, int, vit, suerte

	orientacion y genre son arrays
	*/

	this.addStat = addStat;
	this.addSkill = addSkill;

	// setters
	this.setId = setId;
	this.setNombre = setNombre;
	this.setNivel = setNivel;
	this.setExp = setExp;
	this.setRaza = setRaza;
	this.setClase = setClase;
	this.setEdad = setEdad;
	this.setSkills = setSkills;
	this.setStats = setStats;
	this.setOrientacion = setOrientacion;
	this.setgenre = setgenre;
	this.setHP = setHP;
	// this.setEquip = setEquip;
	this.setJobType = setJobType;

	// getters
	this.getSingleStat = getSingleStat;

	this.getId = getId;
	this.getNombre = getNombre;
	this.getNivel = getNivel;
	this.getExp = getExp;
	this.getRaza = getRaza;
	this.getClase = getClase;
	this.getEdad = getEdad;
	this.getSkills = getSkills;
	this.getStats = getStats;
	this.getOrientacion = getOrientacion;
	this.getgenre = getgenre;
	// this.getEquip = getEquip;
	this.getJobType = getJobType;
	this.getCurrentHP = getCurrentHP;
	this.getBaseMaxHP = getBaseMaxHP;
	this.getMaxHP = getMaxHP;
	
}




function getBaseMaxHP(){

}

function getMaxHP(){

	// TODO

}

// equip item
	
//

/*
	0 STR
	1 AGI
	2 INT
	3 VIT
	4 LCK
*/
function getSingleStat(stt){
	return this.stats.getStatById(stt);
}

function getPrimaryStat(){
	switch(job.getTypeJob()){
		case "warrior":
			return this.stats.setStatById(0);
		break;

		case "mage":
			return this.stats.setStatById(2);
		break;

		case "rogue":
			return this.stats.setStatById(1);
		break;
	}
}



function addStat(nStr, nAgi, nInt, nVit, nLuk){
	this.stats.setStatById(0, nStr);
	this.stats.setStatById(1, nAgi);
	this.stats.setStatById(2, nInt);
	this.stats.setStatById(3, nVit);
	this.stats.setStatById(4, nLuk);
}

function addSkill(name, dmg, desc){
	var newSkill =  new Skill(name, dmg, desc);
	
	this.skills += newSkill;
}


// SETTERS
	function setHP(hp){
		this.hp = hp;
	}

	function setId(id){
		this.id = id;
	}

	function setNombre(name){
		this.nombre = name;
	}

	function setNivel(lvl){
		this.nivel = lvl;
	}

	function setExp(exp){
		this.exp = exp;
	}

	function setRaza(race){
		this.raza = race;
	}

	function setClase(job){
		this.job = job;
	}

	function setEdad(age){
		this.edad = age;
	}

	function setSkills(skill){
		this.skills = skill;
	}

	function setStats(stat){
		this.stats = stat;
	}

	function setOrientacion(orien){
		this.orientacion = orien;
	}

	function setgenre(sex){
		this.genre = sex;
	}

	// function setEquip(eqip){
	// 	this.equip = eqip;
	// }

	function setJobType(clase){
		this.jobType = clase;
	}

// GETTERS
	function getCurrentHP(){
		return this.hp;
	}
	function getId(){
		return this.id;
	}

	function getNombre(){
		return this.nombre;
	}

	function getNivel(){
		return this.nivel;
	}

	function getExp(){
		return this.exp;
	}

	function getRaza(){
		return this.raza.race;
	}

	function getClase(){
		return this.job;
	}

	function getEdad(){
		return this.edad;
	}

	function getSkills(){
		return this.skills;
	}

	function getStats(){
		return this.stats;
	}

	function getOrientacion(){
		return this.orientacion;
	}

	function getgenre(){
		return this.genre;
	}

	// function getEquip(){
	// 	return this.equip;
	// }

	function getJobType(){
		return this.jobType;
	}

	// getter y setters de stats

function setStr(str){
	this.stats.setStatById(0, str);
}

function setAgi(agi){
	this.stats.setStatById(1, agi);
}

function setInt(inte){
	this.stats.setStatById(2, inte);
}

function setVit(vit){
	this.stats.setStatById(3, vit);
}

function setLuk(luk){
	this.stats.setStatById(4, luk);
}


function getStr(){
	return this.stats.getStatById(0);
}

function getAgi(){
	return this.stats.getStatById(1);
}

function getInt(){
	return this.stats.getStatById(2);
}

function getVit(){
	return this.stats.getStatById(3);
}

function getLuk(){
	return this.stats.getStatById(4);
}
