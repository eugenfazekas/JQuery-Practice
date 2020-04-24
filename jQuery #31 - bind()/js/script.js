$(document).ready(function(){
	$('#pic').bind('click',function(){
		alert(' Hello');
	});
	$('#pic2').bind('click contextmenu',{uzenet: 'Hello!'},function(e){
		alert(e.data.uzenet);
	});
});






