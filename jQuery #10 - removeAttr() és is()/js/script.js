$('document').ready(function(){
	$('#cbox').click(function(){
		if($('#cbox').is(':checked')){
			$('#submit').removeAttr('disabled');
		}else {
			$('#submit').attr('disabled',true);
		}
	});

	$('#submit').click(function() {
		$('#submit').attr('value','Legyszi varj...');
	});
});





