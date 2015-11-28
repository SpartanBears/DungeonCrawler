function Stats(str, inte, dex, res, luk){
	this.stats = {
		fuerza: str,
		inteligencia: inte,
		destreza: dex,
		resistencia: res,
		suerte: luk
	};

	this.setStats = setStats;
	this.setStatById = setStatById;

	this.getStats = getStats;
	this.getStatById = getStatById;
}

function setStats(newStats){
	this.stats = newStats;
}

function setStatById(id, newStat){
	switch(id){
		case '0':
			this.stats.fuerza  ;
		break;
		case '1':
			this.stats.inteligencia  ;
		break;
		case '2':
			this.stats.destreza  ;
		break;
		case '3':
			this.stats.resistencia  ;
		break;
		case '4':
			this.stats.suerte  ;
		break;
	}
}

function getStats(){
	return this.stats;
}

function getStatById(id){
	switch(id){
		case '0':
			return this.stats.fuerza;
		break;
		case '1':
			return this.stats.inteligencia;
		break;
		case '2':
			return this.stats.destreza;
		break;
		case '3':
			return this.stats.resistencia;
		break;
		case '4':
			return this.stats.suerte;
		break;
	}
}