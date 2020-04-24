$(document).ready(function(){
	
	function change_size(element,size) {
		var current = parseInt(element.css('font-size'));
		if(size=='nagyobb'){
			var new_size = current+2;
		}else{
			var new_size = current-2;
		}
		element.css('font-size',new_size+'px');
	}
	$('#kisebb').click(function(){
		change_size($('p'),'kisebb');
	});
	$('#nagyobb').click(function(){
		change_size($('p'),'nagyobb');
	});
});

/*

*/






 