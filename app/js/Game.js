var steps = [new DungeonStep(0,0,0,"p","entrance"), new DungeonStep(1,1,0,"p","none"), new DungeonStep(2,2,0,"p","none"), new DungeonStep(3,3,0,"p","none"), new DungeonStep(4,4,0,"p","exit")];

var d1 = new Dungeon("test");

for(var index = 0; index < steps.length; index++){

	d1.pushStep(steps[index]);
}

var auto = new Automaton("oswo");
auto.setEnvironment(d1);

console.log(auto);
