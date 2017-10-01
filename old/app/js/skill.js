/*equip
	cabeza, torzo, piernas, 2 anillos, amuleto, armas (o armas y escudos)
*/

function Skill(name, dmg, desc, element){

	this.name = name;
	this.dmg = dmg;
	this.desc = desc;
	this.element = element;

	this.setName = setName;
	this.setDmg = setDmg;
	this.setDesc = setDesc;

	this.getName = getName;
	this.getDmg = getDmg;
	this.getDesc = getDesc;

}

function setName(newName){
	this.name = newName;
}

function setDmg(newDmg){
	this.dmg = newDmg;
}

function setDesc(newDesc){
	this.desc = newDesc;
}

function getName(){
	return this.name;
}

function getDmg(){
	return this.dmg;
}

function getDesc(){
	return this.desc;
}