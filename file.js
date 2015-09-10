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
function newCouch(){
	// event.preventDefault();
	count++;
	rect= new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
  
});
	rect.name = nameSpacing(rect);
	rects.push(rect);
	console.log(rects);
	canvas.add(rect).setActiveObject(rect);
}
rects.ajaxGet =  function(){
	$.get('fetch.php',function(data){
		console.log(data);
	});
};
rects.ajaxGet();
rects.urlParams = function(rect){
	for(var i=0; i<rects.length; i++){
		
		var data = {
		x: this[i].left,
		y: this[i].top,
		xScale: this[i].scaleX,
		yScale: this[i].scaleY,
		rotation: this[i].angle,
		type: this[i].type,
		name: this[i].name
		};

		$.ajax({
		url: 'file.php',
		cache: false,
		type: 'POST',
		dataType: 'html',
		data: data,
		success: function(returnData) {
       console.log(returnData);
       console.log('success');
    },
		error: function(){
				console.log('nope');
		}
			});
	console.log(data);
	}
	

};

	$('.couch').on('click', newCouch);

	$('.data').on('click', function(){
		event.preventDefault();
		rects.urlParams();

	});
});