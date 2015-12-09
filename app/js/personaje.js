
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

	/*stats:
	fuerza, inteligencia, destreza, resistencia, suerte

	orientacion y genre son arrays
	*/
	this.stats = new Stats(0, 0, 0, 0, 0);
	this.equip = new EquipSlots();

	this.orientacion = cOrientacion;
	this.genre = cgenre;
	
	/*stats:
	fuerza, inteligencia, destreza, resistencia, suerte

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

function getSingleStat(stt){
	switch(stt){
		case 0:
			return skills[0];
		break;
		case 1:
			return skills[1];
		break;
		case 2:
			return skills[2];
		break;
		case 3:
			return skills[3];
		break;
		case 4:
			return skills[4];
		break;
	}
}

function getPrimaryStat(){
	switch(job.getTypeJob()){
		case "warrior":
			return stats.fuerza;
		break;

		case "mage":
			return stats.inteligencia;
		break;

		case "rogue":
			return stats.destreza;
		break;
	}
}

function addStat(nStr, nInt, nDes, nRes, nLuk){
	skills[0] += nStr;
	skills[1] += nInt;
	skills[2] += nDes;
	skills[3] += nRes;
	skills[4] += nLuk;
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
		this.hp;
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