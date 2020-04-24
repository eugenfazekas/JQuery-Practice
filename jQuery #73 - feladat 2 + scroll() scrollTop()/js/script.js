$(document).ready(function(){
	$('#text').scroll(function() {
		var position = 	$('#text').scrollTop();
		$('#feed_back').html('Position: <i>' + position+ '</i>');
	});
});

/*

*/






 