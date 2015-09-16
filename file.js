$(document).ready(function(){
	// create a wrapper around native canvas element (with id="c")

var canvas = new fabric.Canvas('c');

canvas.setHeight(1100);
canvas.setWidth(1000);
// creating array to store objs
var objs = [];

var count=0;


var background=fabric.Image.fromURL('brighton.png', function(oImg) {
	oImg.left = 100;
	oImg.top = 50;
	oImg.set('selectable', false);
  canvas.add(oImg);
  canvas.sendToBack(oImg);
});

function nameSpacing(obj){
	return obj.fill+'_'+obj.url+Math.round((10000*Math.random()));
}
function whichObject(type){
	if(type == 'c.png'| type=="Chair"){
		url = 'c.png';
	}else if(type == 'T.png'|type=="Table"){
		url = 'T.png';
	}else{
		url = 'h.png';
	}
	return url;
}

function newCouch(x,y){
	// event.preventDefault();
	type = $('select option:selected').text();
	var url;
	// this part of the code will decide what types of furniture is rendered to the canvas and can be modified later
	url = whichObject(type);
	count++;
	var img= new  fabric.Image.fromURL(url,function(oImg){
		oImg.left=100;
		oImg.Top=100;
		oImg.url=url;
		oImg.width=100;
		oImg.height=100;
		canvas.add(oImg).setActiveObject(oImg);
		canvas.on('object:moving', function(){
				console.log('translating: '+oImg.getLeft()+','+oImg.getTop());
		});
		canvas.on('object:rotating',function(){
			console.log("rotating: "+oImg.getAngle());
		});
		canvas.on('object:scaling', function(){
			console.log('scale x: '+ oImg.getScaleX()+','+'scale y: '+oImg.getScaleY());
		});
		
		
		objs.push(oImg);
		console.log(objs);
	});
}
// this function creates objects out of all the old data
function oldCouch(x,y,xScale,yScale,angle,type){
	// event.preventDefault();

	url=whichObject(type);
	count++;
	var img= new fabric.Image.fromURL(url,function(oImg){
		oImg.left=x;
		oImg.top=y;
		oImg.url=url;
		oImg.scaleX=xScale;
		oImg.scaleY=yScale;
		oImg.width=100;
		oImg.height=100;
		canvas.add(oImg).setActiveObject(oImg);
		canvas.on('object:moving', function(){
				console.log('translating: '+oImg.getLeft()+','+oImg.getTop());
		});
		canvas.on('object:rotating',function(){
			console.log("rotating: "+oImg.getAngle());
		});
		canvas.on('object:scaling', function(){
			console.log('scale x: '+ oImg.getScaleX()+','+'scale y: '+oImg.getScaleY());
		});
		objs.push(oImg);
		console.log(objs);
	});
}
objs.recieveUrlParams = function(){

	var query = window.location.search.substring(1);
	console.log(query);
 var queries = query.split("-");
 queries.pop();
 console.log(queries);
	for(var k=0; k<queries.length;k++){

		vars =  queries[k].split('&');
	
		console.log(vars);
		var params=[];
		for(var i=0;i<vars.length;i++){

			if(isNaN(parseFloat(vars[i].replace(/\b\w+=/,'')))){
				console.log('success');
				params[i] = vars[i].replace(/\b\w+=/,'');
			}else{
				console.log('whoops');
				params[i] = parseFloat(vars[i].replace(/\b\w+=/,''));
			}
			console.log(params);
			
		}
		if(query !== ""){
			oldCouch(params[0],params[1],params[2],params[3],params[4],params[5]);
		}
	}
};


objs.recieveUrlParams();

objs.sendUrlParams = function(){
	console.log('test');
	var query = "index.html?";
	for(var i=0; i<objs.length; i++){
		
		query += "x"+i+"="+this[i].left+"&y"+i+"="+this[i].top+"&xScale"+i+"="+this[i].scaleX+"&yScale"+i+"="+this[i].scaleY+"&angle"+i+"="+this[i].angle+"&img"+i+"="+this[i].url+'-';
		
		window.location.href =query;
		console.log(window.location.href);
		
	}
console.log(query);
};

	$('.couch').on('click', newCouch);

	$('.data').on('click', function(){
		event.preventDefault();
		objs.sendUrlParams();

	});

});