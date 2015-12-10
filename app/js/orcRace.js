function Orc(){

	this.race = "orc";
	this.bonusHP = 500;
	this.bonusStr = 2;
	this.bonusInt = -1;
	this.bonusDex = 0;
	this.bonusVit = 2;
	this.bonusLuk = 0;

	this.setBonusHP = setBonusHP;
	this.setBonusStr = setBonusStr;
	this.setBonusInt = setBonusInt;
	this.setBonusDex = setBonusDex;
	this.setBonusVit = setBonusVit;
	this.setBonusLuk = setBonusLuk;

	this.getRace = getRace;

	this.getBonusHP = getBonusHP;
	this.getBonusStr = getBonusStr;
	this.getBonusInt = getBonusInt;
	this.getBonusDex = getBonusDex;
	this.getBonusVit = getBonusVit;
	this.getBonusLuk = getBonusLuk;

}

function getRace(){
	return this.race;
}

// SETTERS
function setBonusHP(bns){
	this.bonusHP = bns;
}

function setBonusStr(bns){
	this.bonusStr = bns;
}

function setBonusInt(bns){
	this.bonusInt = bns;
}

function setBonusDex(bns){
	this.bonusDex = bns;
}

function setBonusVit(bns){
	this.bonusVit = bns;
}

function setBonusLuk(bns){
	this.bonusLuk = bns;
}

// GETTERS
function getBonusHP(){
	return this.bonusHP;
}

function getBonusStr(){
	return this.bonusStr;
}

function getBonusInt(){
	return this.bonusInt;
}

function getBonusDex(){
	return this.bonusDex;
}

function getBonusVit(){
	return this.bonusVit;
}

function getBonusLuk(){
	return this.bonusLuk;
}