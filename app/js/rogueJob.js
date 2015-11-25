// Gambler
// Vandal
// Scout
// M:Blacksmith - F:Scavenger

function Rogue(race, sex){

	this.typeJob = "rogue";
	this.jobName = null;
	// 					  human		orc			elf		  dwarf
	this.jobsM = {
		human: "Gambler", 
		orc: "Vandal", 
		elf: "Scout", 
		dwarf: "Blacksmith"
	};

	this.jobsF = {
		human: "Gambler", 
		orc: "Vandal", 
		elf: "Scout", 
		dwarf: "Scavenger"
	};

	if(sex == "male"){
		switch(race.getRace()){
			case "human":
				this.jobName = this.jobsM.human;
			break;
			case "orc":
				this.jobName = this.jobsM.orc;
			break;
			case "elf":
				this.jobName = this.jobsM.elf;
			break;
			case "dwarf":
				this.jobName = this.jobsM.dwarf;
			break;
		}
	}else{
		switch(race.getRace()){
			case "human":
				this.jobName = this.jobsF.human;
			break;
			case "orc":
				this.jobName = this.jobsF.orc;
			break;
			case "elf":
				this.jobName = this.jobsF.elf;
			break;
			case "dwarf":
				this.jobName = this.jobsF.dwarf;
			break;
		}
	}
	this.setJobName = setJobName;
	this.setTypeJob = setTypeJob;

	this.getJobName = getJobName;
	this.getTypeJob = getTypeJob;

}

function setJobName(name){
	this.jobName = name;
}

function setTypeJob(type){
	this.typeJob = type;
}

function getJobName(){
	return this.jobName;
}

function getTypeJob(){
	return this.typeJob;
}