var span = "";
var xy = 16;

var wallColor = "rgb(0, 0, 0)";
var pitColor = "rgb(255, 255, 0)";
var ffColor = "rgb(255, 0, 0)";
var bdColor = "rgb(0, 0, 255)";
var doorColor = "rgb(0, 85, 255)";
var pathColor = "rgb(255, 255, 255)";

var iniColor = "rgb(0, 255, 213)";
var finColor = "rgb(255, 145, 250)";
var noneColor = "rgb(145, 145, 145)";

var interfaceColor = [
	wallColor,
	pitColor,
	ffColor,
	bdColor,
	doorColor,
	pathColor,
	iniColor,
	finColor,
	noneColor
];

var tipoWall = "wall";
var tipoDoor = "door";
var tipoPit = "pit";
var tipoFF = "force_field";
var tipoBD = "barred_door";
var tipoPath = "path";

var gateEntrance = "entrance";
var gateExit = "exit";
var gateNone = "none";

var interfaceLabel = [
	tipoWall,
	tipoPit,
	tipoFF,
	tipoBD,
	tipoDoor,
	tipoPath,
	gateEntrance,
	gateExit,
	gateNone,
];

const maxX = 100;
const maxY = 100;



var pos = new Array();

function createSpan() {

	// console.log("click");

	$("#isCopied").css("background-color","white");
	$("#isCopied").text("ClipBoard: Empty");

	$('#y').css("background-color", "white");
	$('#x').css("background-color", "white");
	$('#title').css("background-color", "grey");

	$('#spans').empty();

	if(validate($("#x").val()) && validate($("#y").val())){

		var x = 0;
		var y = 0;

		// console.log($("#x").val() + " - " + $("#y").val());
		if($("#x").val()>maxX){
			x = maxX;
		}else{
			x = $("#x").val();
		}
		
		if($("#y").val()>maxY){
			y = maxY;
		}else{
			y = $("#y").val();
		}

		// console.log(x + " - " + y);
		// y = $("#y").val();

		$("#title").css("display", "inline");
		$("#spans").show();
		$("#spans").css("width", x*16);
		$("#spans").css("height", y*16);


		for(var cont=0; cont<y; cont++){

			for(var index=0; index<x; index++){

				span = '<span class="square" style="margin-top: '+(xy*cont)+'px; margin-left: '+(xy*index)+'px;" onclick=(changeColor(this)) ></span>';

				$( "#spans" ).append(span);

				pos.push({
					posx: ""+cont,
					posy: ""+index
				});

				console.log("span counter");

			}

		}
		
		setLeyenda();

	}else{
		$("#title").hide();
		if(!validate($('#y').val())){
			$('#y').css("background-color", "red");
		}
		if(!validate($('#x').val())){
			$('#x').css("background-color", "red");
		}
	}

}

function setLeyenda(){
	$("#leyenda").empty();
	var lbl = "<label>";

	for(var index=0; index < interfaceColor.length; index++){
		lbl+= '<span class="squareLegend" style="background-color:'+interfaceColor[index]+';"/>';
		lbl+= "<span class='lblLeyenda'>: "+interfaceLabel[index]+"</span><br>";
	}

	lbl+= "</label>";

		// $("#leyenda").append(
		// 	"<label>"+
		// 	'<span style="height: 15px; width: 15px; background-color:'+wallColor+';"/>'+"<span class='lblLeyenda'>negro: "+tipoWall+"</span>"+
		// 	'<br><span style=" background-color:'+pathColor+';"/>'+"<span class='lblLeyenda'>blanco: "+tipoPath+"</span>"+
		// 	'<br><span style="height: 15px; width: 15px; background-color:'+ffColor+';"/>'+"<span class='lblLeyenda'>rojo: "+tipoFF+"</span>"+
		// 	'<br><span style="height: 15px; width: 15px; background-color:'+bdColor+';"/>'+" <span class='lblLeyenda'>azul:"+tipoBD+"</span>"+
		// 	'<br><span style="height: 15px; width: 15px; background-color:'+doorColor+';"/>'+" <span class='lblLeyenda'>celeste: "+tipoDoor+"</span>"+
		// 	'<br><span style="height: 15px; width: 15px; background-color:'+pitColor+';"/>'+" <span class='lblLeyenda'>amarillo: "+tipoPit+"</span>"+
		// 	'<br><span style="height: 15px; width: 15px; background-color:'+iniColor+';"/>'+" <span class='lblLeyenda'>celeste: "+gateEntrance+"</span>"+
		// 	'<br><span style="height: 15px; width: 15px; background-color:'+finColor+';"/>'+" <span class='lblLeyenda'>rosado: "+gateExit+"</span>"+
		// 	'<br><span style="height: 15px; width: 15px; background-color:'+noneColor+';"/>'+" <span class='lblLeyenda'>gris: "+gateNone+"</span>"
		// 	);
	$("#leyenda").append(lbl);
	$("#leyenda").css("display", "block");
}


function changeColor(spn){
	// console.log("hola "+$(spn).css("background-color"));
	$("#isCopied").css("background-color","white");
	$("#isCopied").text("ClipBoard: Empty");

	 if($(spn).css("background-color")==wallColor){

	 	// console.log("path "+$(spn).css("background-color"));
	 	$(spn).css("background-color",pathColor);

	 }else if($(spn).css("background-color")==pathColor){

	 	// console.log("rojo"+$(spn).css("background-color"));
	 	$(spn).css("background-color",ffColor);

	 }else if($(spn).css("background-color")==ffColor){

	 	// console.log("azul"+$(spn).css("background-color"));
	 	$(spn).css("background-color",bdColor);

	 }else if($(spn).css("background-color")==bdColor){
	 	// console.log("negro"+$(spn).css("background-color"));
	 	$(spn).css("background-color",doorColor);

	 }else if($(spn).css("background-color")==doorColor){
	 	// console.log("negro"+$(spn).css("background-color"));
	 	$(spn).css("background-color",pitColor);

	 }else if($(spn).css("background-color")==pitColor){
	 	// console.log("negro"+$(spn).css("background-color"));
	 	$(spn).css("background-color",iniColor);

	 }else if($(spn).css("background-color")==iniColor){
	 	// console.log("negro"+$(spn).css("background-color"));
	 	$(spn).css("background-color",finColor);
	 }else if($(spn).css("background-color")==finColor){
	 	// console.log("negro"+$(spn).css("background-color"));
	 	$(spn).css("background-color",noneColor);
	 }else if($(spn).css("background-color")==noneColor){
	 	// console.log("negro"+$(spn).css("background-color"));
	 	$(spn).css("background-color",wallColor);
	 }
}


function getCodigo(){
	$('#title').css("background-color", "grey");
	$("#isCopied").css("background-color","white");
	$("#isCopied").text("ClipBoard: Empty");

	var difficulty = 1;

	if(validate($("#name").val())){
			// console.log("entrando a getCodigo");

		if(validate($("#diff").val())){
			if(parseInt($("#diff").val()) <100){
				difficulty = $("#diff").val();
			}else{
				difficulty = 100;
			}
		}

		var idCont=0;
		var dungeon = 'var arraySteps = [';

		$(".square").each(function(){

			dungeon += "new DungeonStep("+idCont+","+pos[idCont].posy+","+pos[idCont].posx+",\"";
			
			// console.log("entrando a each "+$(this).css("background-color")+" - "+$("span").size());

			if($(this).css("background-color")==wallColor){

			 	dungeon+= tipoWall;

			 }else if($(this).css("background-color")==pitColor){

			 	dungeon+= tipoPit;

			 }else if($(this).css("background-color")==ffColor){

			 	dungeon+= tipoFF;

			 }else if($(this).css("background-color")==bdColor){

			 	dungeon+= tipoBD;

			 }else if($(this).css("background-color")==doorColor){

			 	dungeon+= tipoDoor;

			 }else if($(this).css("background-color")==pathColor){

			 	dungeon+= tipoPath;

			 }else{

			 	dungeon+= tipoDoor; 

			 }

			 dungeon+= "\",\"";

			 if($(this).css("background-color")==iniColor){

			 	dungeon+= gateEntrance;

			 }else if($(this).css("background-color")==finColor){

			 	dungeon+= gateExit;

			 }else{
			 	dungeon+= gateNone;
			 }

			 dungeon+= "\", "+difficulty+"),";

			 idCont++;

		});

		dungeon+= ']; var d = new Dungeon("'+$("#name").val()+'", arraySteps);';

		$("#txtArea").empty();

		$("#resultado").css("display", "inline");


		$("#txtArea").append('<textarea class="txtCopy" rows="4" cols="100">'+dungeon+'</textarea>');
	}else{
		$('#title').css("background-color", "red");
	}

}

function validate(txt){
	if(txt != null && txt != ''){
		return true;
	}else{
		return false;
	}
}