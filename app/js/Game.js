var steps = [new DungeonStep(0,0,0,"path","entrance"), new DungeonStep(1,1,0,"path","none"), new DungeonStep(2,2,0,"path","none"), new DungeonStep(3,3,0,"path","none"), new DungeonStep(4,4,0,"path","exit")];

var d1 = new Dungeon("test");

for(var index = 0; index < steps.length; index++){

	d1.pushStep(steps[index]);
}

var auto = new Automaton("oswo");
auto.setEnvironment(d1);
auto.initAutomaton();
console.log(auto.getCurrentStep());
auto.walk();
console.log(auto.getCurrentStep());
