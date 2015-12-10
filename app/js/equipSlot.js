function EquipSlots(){

	this.slots = {
		handR: null,
		handL: null,
		head: null,
		body: null,
		boot: null,
		amulet: null,
		ringR: null,
		ringL: null
	};

	this.equipChar = equipChar;
	this.wearEquip = wearEquip;
	this.canEquip = canEquip;
	this.confirmarEquip = confirmarEquip;

	this.setEquip = setEquip;

	this.getEquip = getEquip;
	this.getEquipById = getEquipById;
	this.getLabelEquip = getLabelEquip;


}


// equipar personaje
// 
	function equipChar(item){

		var type = ""+item.getType();
		var out = "";

		switch(type){
			// weapon = 1
			case '1':
			// 1 handed
			
				if(item.getHanded() == 1){

					if(this.canEquip(1)){

							// console.log(this.getEquipById(1)); // null = nada equipado
							out = this.wearEquip(1, item);

						}else{

							if(this.confirmarEquip()){
								out = this.wearEquip(1, item);
							}else{
								out = item.getItemName()+' no se ha podido equipado!';
							}
							
						}
			// 2 handed
				}else if(item.getHanded() == 2){
					if(this.canEquip(1) && this.canEquip(2)){

						out = this.wearEquip(1, item);

					}else{
						if(this.confirmarEquip()){
							out = this.wearEquip(1, item);
						}else{
							out = item.getItemName()+' no se ha equipado!';
						}
					}
				}else{
					out = item.getItemName()+' no se ha podido equipar!';
				}
				console.log(out);
				return out;
			break;
			// shield = 2
			case '2':

				if(this.canEquip(2)){
					out = this.wearEquip(2, item);
				}else{
					if(this.confirmarEquip()){
						out = this.wearEquip(2, item);
					}else{
						out = item.getItemName()+' no se ha equipado!';
					}
				}

				console.log(out);
				return out;
			break;
			// helm = 3
			case '3':

				if(this.canEquip(3)){
					out = this.wearEquip(3, item);
				}else{
					if(this.confirmarEquip()){
						out = this.wearEquip(3, item);
					}else{
						out = item.getItemName()+' no se ha equipado!';
					}
				}

				console.log(out);
				return out;
			break;
			// body = 4
			case '4':
				if(this.canEquip(4)){
					out = this.wearEquip(4, item);
				}else{
					if(this.confirmarEquip()){
						out = this.wearEquip(4, item);
					}else{
						out = item.getItemName()+' no se ha equipado!';
					}
				}

				console.log(out);
				return out;
			break;
			// boots = 5
			case '5':
				if(this.canEquip(5)){
					out = this.wearEquip(5, item);
				}else{
					if(this.confirmarEquip()){
						out = this.wearEquip(5, item);
					}else{
						out = item.getItemName()+' no se ha equipado!';
					}
				}

				console.log(out);
				return out;
			break;
			// amulets = 6
			case '6':
				if(this.canEquip(6)){
					out = this.wearEquip(6, item);
				}else{
					if(this.confirmarEquip()){
						out = this.wearEquip(6, item);
					}else{
						out = item.getItemName()+' no se ha equipado!';
					}
				}

				console.log(out);
				return out;
			break;
			// ring = 7
			case '7':

				if(this.canEquip(7)){

					out = this.wearEquip(7, item);

				}else if(this.canEquip(8)){

					out = this.wearEquip(8, item);

				}else{

					if(this.confirmarEquip()){
						out = this.wearEquip(7, item);
					}else{
						out = item.getItemName()+' no se ha equipado!';
					}

				}

				console.log(out);
				return out;
			break;
			// etc = 8
			case '8':
				out = item.getItemName()+' se puede equipar';

				console.log(out);
				return out;
			break;
		}

	}

	function wearEquip(pos, item){

		switch(pos){
			case 1:

				// console.log(item.getHanded());
				console.log(this.getEquip());

				this.getEquip()["handR"] = item;
				// 2 handed
				if(item.getHanded() == 2){
					this.getEquip()["handL"] = item;
				}
				return item.getItemName()+' ha sido equipado!';
			break;

			// shield = 2
			case 2:
				this.getEquip()["handL"] = item;
				return item.getItemName()+' ha sido equipado!';
			break;

			// helm = 3
			case 3:
				this.getEquip()["head"] = item;
				return item.getItemName()+' ha sido equipado!';
			break;

			// body = 4
			case 4:
				this.getEquip()["body"] = item;
				return item.getItemName()+' ha sido equipado!';
			break;
			// boots = 5
			case 5:
				this.getEquip()["boot"] = item;
				return item.getItemName()+' ha sido equipado!';
			break;
			// amulet = 6
			case  6 :
				this.getEquip()["amulet"] = item;
				return item.getItemName()+' ha sido equipado!';
			break;
			// ring = 7
			case  7 :
				this.getEquip()["ringR"] = item;
				return item.getItemName()+' ha sido equipado!';
			break;
			// etc = 8
			case  8 :
				this.getEquip()["ringL"] = item;
				return item.getItemName()+' ha sido equipado!';
			break;

			default:
			break;
		}
	}

	function canEquip(pos){

		var out = false;

		if(this.getEquipById(pos) == null || this.getEquipById(pos) == ""){

			out = true;

		}

		return out;
	}

	function confirmarEquip(){
		var flag = false;

		// TODO

		return flag;
	}


// 


function setEquip(newEquip){
	this.slots = newEquip;
}

function getEquip(){
	return this.slots;
}

function getLabelEquip(){

	var auxLbl = new Array();

	for(var index=0; index < 6; index++){
		auxLbl[index] = (this.getEquipById(index+1).getItemName() != null) ? this.getEquipById(index+1).getItemName() : "none";
	}

	var outEquip = {
		"Right-Hand": auxLbl[0],
		"Left-Hand": auxLbl[1],
		"Head": auxLbl[2],
		"Body": auxLbl[3],
		"Boots": auxLbl[4],
		"Amulet": auxLbl[5],
		"1-Ring": auxLbl[6],
		"2-Ring": auxLbl[7],
	};

	console.log(outEquip);

	return outEquip;
}

function getEquipById(id){
	switch(id){
		case 1:
			return this.getEquip().handR;
		break;
		case 2:
			return this.slots.handL;
		break;
		case 3:
			return this.slots.head;
		break;
		case 4:
			return this.slots.body;
		break;
		case 5:
			return this.slots.boot;
		break;
		case 6:
			return this.slots.amulet;
		break;
		case 7:
			return this.slots.ringR;
		break;
		case 8:
			return this.slots.ringL;
		break;
	}
}