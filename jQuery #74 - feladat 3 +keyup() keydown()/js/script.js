$(document).ready(function(){
	var max = $('#text').attr('maxlength');
	$('#feed_back').html(max+' karaktert irhatsz be meg!');
	$('#text').keyup(function(){
		var length = $('#text').val().length;
		$('#feed_back').html(max-length + ' karaktert irhatsz be meg!');
	});
});








 