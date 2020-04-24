$(document).ready(function(){
	$('#pic').on('mouseover',function(){
		alert('Ez egy idegesito fuggveny!')
	});
	
	$('#pic2').on('mouseover',{uzenet: 'Ez egy idegesito fuggveny!'},function(e){
		alert(e.data.uzenet);
	});
});






