// M:Knight - F:Duelist
// M:Bruiser - F:Blacksmith
// Fencer
// Foehammer

function Warrior(race, sex){

	this.typeJob = "warrior";
	this.jobName = null;
	// 					  human		orc			elf		  dwarf
	this.jobsM = {
		human: "Knight", 
		orc: "Bruiser", 
		elf: "Fencer", 
		dwarf: "Foehammer"
	};

	this.jobsF = {
		human: "Duelist", 
		orc: "Blacksmith", 
		elf: "Fencer", 
		dwarf: "Foehammer"
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