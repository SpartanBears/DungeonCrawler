function Elf(){

	this.race = "elf";
	this.bonusHP = 0;	
	this.bonusStr = -1;
	this.bonusInt = 2;
	this.bonusDex = 2;
	this.bonusRes = 0;
	this.bonusLuk = 0;

	this.setBonusHP = setBonusHP;
	this.setBonusStr = setBonusStr;
	this.setBonusInt = setBonusInt;
	this.setBonusDex = setBonusDex;
	this.setBonusRes = setBonusRes;
	this.setBonusLuk = setBonusLuk;

	this.getRace = getRace;

	this.getBonusHP = getBonusHP;
	this.getBonusStr = getBonusStr;
	this.getBonusInt = getBonusInt;
	this.getBonusDex = getBonusDex;
	this.getBonusRes = getBonusRes;
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

function setBonusRes(bns){
	this.bonusRes = bns;
}

function setBonusLuk(bns){
	this.bonusLuk = bns;
}

// GETTERS
function getBonusHP(bns){
	return this.bonusHP;
}

function getBonusStr(bns){
	return this.bonusStr;
}

function getBonusInt(bns){
	return this.bonusInt;
}

function getBonusDex(bns){
	return this.bonusDex;
}

function getBonusRes(bns){
	return this.bonusRes;
}

function getBonusLuk(bns){
	return this.bonusLuk;
}