/*
	Dungeon Crawler: Maze system
	Algorithm: Tremaux

	A maze is composed of nodes ordered in a two dimensional array.
	Nodes represent the smallest length unit of a maze, or "step".

	Also, we'll be using Tremaux's algorithm to simulate walking on the maze.
*/

function Node(id, type){

	this.id = id;
	this.type = type;

	//events
	this.onEnter = function(){};
	this.onExit = function(){};
}

function EntranceNode(id, type){

	Node.call(this, id, type);
}

function ExitNode(id, type){

	Node.call(this, id, type);
}

function PathNode(id, type){

	Node.call(this, id, type);
}

function DoorNode(id, type, characterClass){

	Node.call(this, id, type);

	this.characterClass = characterClass;
}

function WallNode(id, type){

	Node.call(this, id, type);
}

function TrapNode(id, type){

	Node.call(this, id, type);
}

function Maze(name, columnLLength, rowLength, nodeMatrix){

	this.columnLLength = columnLLength;
	this.rowLength = rowLength;
	this.nodeMatrix = nodeMatrix;
}