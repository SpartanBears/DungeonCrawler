function Inventory(){

	this.gold = 0;
	this.items = new Array();
	
	this.setGold = setGold;
	this.setItems = setItems;

	this.getGold = getGold;
	this.getType = getType;
	this.getItems = getItems;
	this.getItemById = getItemById;
	this.getItemByType = getItemByType;

}

function addItem(newItem){
	this.items.push(newItem);
}

function addGold(g){
	this.gold += g;
}

function dropItem(idItem){
	this.items[idItem]
}

// SETTERS
function setGold(newGold){
	this.gold = newGold;
}

function setItems(newItems){
	this.items = newItems;
}
// GETTERS
function getGold(){
	return this.gold;
}

function getItems(){
	return this.items;
}

function getItemById(id){
	return this.items.get(id);
}

function getItemByType(type){

	var index = 0;
	var out = new Array();

	$(items).each(function(){

		if(this.items[index].getType == type){
			out.push(items[index]);
		}

	});
	
	return out;

}
