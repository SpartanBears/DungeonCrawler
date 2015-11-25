
function personaje(cNombre, cRaza, cClase, cSkills, cOrientacion, cSexo){

	// var id = cId;
	this.nombre = cNombre;
	this.nivel = 0;
	this.exp = 0;
	this.raza = cRaza;
	this.job = cClase.getJobName();
	this.jobType = cClase;
	

	// var edad = cEdad;
	this.skills = cSkills;
	this.stats = {
		fuerza: "",
		inteligencia: "",
		destreza: "",
		resistencia: "",
		suerte: ""
	};
	this.orientacion = cOrientacion;
	this.sexo = cSexo;
	this.equip = {
		handR: "",
		handL: "",
		head: "",
		body: "",
		boot: "",
		amulet: "",
		ringR: "",
		ringL: ""
	};
	/*stats:
	fuerza, inteligencia, destreza, resistencia, suerte

	orientacion y sexo son arrays

	equip
	cabeza, torzo, piernas, 2 anillos, amuleto, armas (o armas y escudos)

	*/

	this.addStat = addStat;
	this.newSkill = newSkill;

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
	this.setSexo = setSexo;
	this.setEquip = setEquip;
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
	this.getSexo = getSexo;
	this.getEquip = getEquip;
	this.getJobType = getJobType;
	
}

// equip item
	function equipChar(item){

		var type = item.getType();
		var out = "";

		switch(type){
			// weapon = 1
			case '1':
			// 1 handed
				if(item.getHanded() == 1){
					if(getSingleEquip(1) != null && getSingleEquip(1) != ""){

						wearEquip(1, item);

						out = item.getItemName()+' ha sido equipado!';
					}else{
						// confirmacion de equipar
						out = item.getItemName()+' no ha podido equiparse!';
					}
			// 2 handed
				}else if(item.getHanded() == 2){
					if((getSingleEquip(1) != null && getSingleEquip(1) != "") && (getSingleEquip(2) != null && getSingleEquip(2) != "")){

						wearEquip(1, item);

						out = item.getItemName()+' ha sido equipado!';
					}else{
						// confirmacion de equipar
						out = item.getItemName()+' no ha podido equiparse!';
					}
				}else{
					out = item.getItemName()+' no ha podido equiparse!';
				}

				return out;
			break;
			// shield = 2
			case '2':

				out = canEquip(2, item);

				return out;
			break;
			// helm = 3
			case '3':

				out = canEquip(3, item);
				return out;
				break;
			// body = 4
			case '4':
				out = canEquip(4, item);
				return out;
				break;
			// boots = 5
			case '5':
				out = canEquip(5, item);
				return out;
			break;
			// amulets = 6
			case '6':
				out = canEquip(6, item);
				return out;
			break;
			// ring = 7
			case '7':

				if((getSingleEquip(7) != null && getSingleEquip(7) != "")){

					wearEquip(pos, item);
					out = item.getItemName()+' ha sido equipado!';

				}else if(getSingleEquip(8) != null && getSingleEquip(8) != ""){

					wearEquip(pos, item);
					out = item.getItemName()+' ha sido equipado!';

				}else{

					out = item.getItemName()+' no ha sido equipado!';

				}

				return out;
			break;
			// etc = 8
			case '8':
				out = item.getItemName()+' se pude equipar';
				return out;
			break;


		}

	}

	function wearEquip(pos, item){

		switch(pos){
			case '1':
				
				eqip.handR = item;
				// 2 handed
				if(item.getHanded() == 2){
					equip.handL = item;
				}
			break;

			// shield = 2
			case '2':
				equip.handL = item;
			break;

			// helm = 3
			case '3':
				equip.head = item;
			break;

			// body = 4
			case '4':
				equip.body = item;
			break;
			// boots = 5
			case '5':
				equip.boot = item;
			break;
			// amulets = 6
			case '6':
				equip.amulet = item;
			break;
			// ring = 7
			case '7':
				equip.ringR = item;
			break;
			// etc = 8
			case '8':
				equip.ringL = item;
			break;

			default:
			break;
		}
	}

	function getSingleEquip(pos){
		return equip[(pos-1)];
	}

	function canEquip(pos, item){

		var out = "";

		if(getSingleEquip(pos) != null && getSingleEquip(pos) != ""){

			wearEquip(pos, item);

			out = item.getItemName()+' ha sido equipado!';
		}else{
			// confirmacion de equipar
			out = item.getItemName()+' no ha podido equiparse!';
		}
		return out;
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

	function addStat(nStr, nInt, nDes, nRes, nLuk){
		skills[0] += nStr;
		skills[1] += nInt;
		skills[2] += nDes;
		skills[3] += nRes;
		skills[4] += nLuk;
	}

	// nombre de la habilidad, el daño, elemento, el efecto de eestado (TODO)
	function newSkill(name, dmg, elemento, efecto){
		var newSkill = [name, dmg, elemento, efecto];
		
		skills += newSkill;
	}
// SETTERS
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

	function setSexo(sex){
		this.sexo = sex;
	}

	function setEquip(eqip){
		this.equip = eqip;
	}

	function setJobType(clase){
		this.jobType = clase;
	}

// GETTERS
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

	function getSexo(){
		return this.sexo;
	}

	function getEquip(){
		return this.equip;
	}

	function getJobType(){
		return this.jobType;
	}