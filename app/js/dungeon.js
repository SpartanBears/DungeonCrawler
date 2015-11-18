/* 
	type
		w = wall
		d = door
		h = hole
		ff = force field
		bd = barred door
		p = path

	gatepay
		entrance
		exit
		none

*/
var dungeonStepObj = {

	type: 'p',
	gatepay: 'entrance'
};

function dungeonStep(type, gatepay){

	var ds = Object.create(dungeonStepObj);

	ds.type = type;

	ds.gateway = gatepay;

	return ds;
}

var dungeon = {

	name: 'd1',
	steps: [

		[dungeonStep('d','entrance'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none')],
		[dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('p', 'none'), dungeonStep('d', 'exit')],

	],

};