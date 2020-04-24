$(document).ready(function(){
	$('.hover').mousemove(function(e){
		var hovertext = $(this).attr('hovertext');
		$('#title').text(hovertext).show();
		$('#title').css({'top':e.clientY +10,'left':e.clientX +10 });
	}).mouseout(function(){
		$('#title').hide();
	});
});

/*

*/






 