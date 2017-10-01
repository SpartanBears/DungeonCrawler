function Item(id, itemName, stats, dmg, atsp, hands, type){
 	
 	this.id = id;
 	this.itemName = itemName;
	this.dmg = dmg;
	this.atspBonus = atsp;
	this.stats = stats;

// two-handed || one-handed
	this.handed = hands; // = 1 || = 2

// weapon = 1 || shield = 2 || helm = 3 || body = 4 || boots = 5 || amulet = 6 || ring = 7 || etc = 8
	this.typeA = type;

// TBI 
// var layouts = 1;
	
	this.setId = setId;
	this.setItemName = setItemName;
	this.setDmg = setDmg;
	this.setAtsp = setAtsp;
	this.setHanded = setHanded;
	this.setType = setType;

	this.getId = getId;
	this.getItemName = getItemName;
	this.getDmg = getDmg;
	this.getAtsp = getAtsp;
	this.getHanded = getHanded;
	this.getType = getType;
	
}

// SETTERS
function setId(id){
	this.id = id;
}
function setItemName(nm){
	this.itemName = nm;
}

function setDmg(dmg){
	this.dmg = dmg;
}

function setAtsp(atsp){
	this.atspBonus = atsp;
}

function setHanded(hands){
	this.handed = hands;
}

function setType(tpe){
	this.typeA = tpe;
}

function setStats(stt){
	this.stats = stt;
}


// GETTERS
function getId(){
	return this.id;
}

function getStats(){
	return this.stats;
}

function getType(){
	return this.typeA;
}

function getItemName(){
	return this.itemName;
}

function getDmg(){
	return this.dmg;
}

function getAtsp(){
	return this.atspBonus;
}

function getHanded(){
	return this.handed;
}