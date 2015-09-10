$(document).ready(function(){
	// create a wrapper around native canvas element (with id="c")

var canvas = new fabric.Canvas('c');

canvas.setHeight(500);
canvas.setWidth(800);

var rects = [];

var count=0;
canvas.on('object:moving', function(){
		console.log('translating: '+rect.getLeft()+','+rect.getTop());
});
canvas.on('object:rotating',function(){
	console.log("rotating: "+rect.getAngle());
});
canvas.on('object:scaling', function(){
	console.log('scale x: '+ rect.getScaleX()+','+'scale y: '+rect.getScaleY());
});

function nameSpacing(obj){
	return obj.fill+'_'+obj.type+Math.round((10000*Math.random()));
}
function newCouch(x,y){
	// event.preventDefault();
	type = $('select option:selected').text();
	var fill;
	if(type == 'Chair'){
		fill = 'blue';
	}else if(type == 'Couch'){
		fill = 'green';
	}else{
		fill = 'red';
	}
	count++;
	rect= new fabric.Rect({
  left: 100,
  top: 100,
  fill: fill,
  width: 20,
  height: 20,
});
	rect.name = nameSpacing(rect);
	rects.push(rect);
	console.log(rects);
	canvas.add(rect).setActiveObject(rect);
}
function oldCouch(x,y,xScale,yScale,angle,type){
	// event.preventDefault();
	if(type == 'blue'){
		fill = 'blue';
	}else if(type == 'green'){
		fill = 'green';
	}else{
		fill = 'red';
	}
	count++;
	rect= new fabric.Rect({
  left: x,
  top: y,
  scaleX: xScale,
  scaleY: yScale,
  fill: fill,
  angle: angle,
  width: 20,
  height: 20,
});
	rect.name = nameSpacing(rect);
	rects.push(rect);
	console.log(rects);
	canvas.add(rect).setActiveObject(rect);
}
rects.recieveUrlParams = function(){

	var query = window.location.search.substring(1);
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
					oldCouch(params[0],params[1],params[2],params[3],params[4],params[5]);
				}
       
					 
};
rects.recieveUrlParams();
rects.processUrlParams= function(){

};
rects.sendUrlParams = function(rect){
	var query = "index.php?";
	for(var i=0; i<rects.length; i++){
		
		
		// var x=this[i].left;
		// var y=this[i].top;
		// var xScale=this[i].scaleX;
		// var yScale=this[i].scaleY;
		// var rotation=this[i].angle;
		// var type=this[i].type;
		// var name=this[i].name;
		
		query += "x"+i+"="+this[i].left+"&y"+i+"="+this[i].top+"&xScale"+i+"="+this[i].scaleX+"&yScale"+i+"="+this[i].scaleY+"&angle"+i+"="+this[i].angle+"&type"+i+"="+this[i].fill+"&name"+i+"="+this[i].name+"-";
		console.log(query);
		window.location.href =query;
		console.log(window.location.href);
		// create query string for url
	}

};

	$('.couch').on('click', newCouch);

	$('.data').on('click', function(){
		event.preventDefault();
		rects.sendUrlParams();

	});
});