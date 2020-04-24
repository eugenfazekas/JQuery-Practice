$('document').ready(function(){
	$(':text').focusin(function(){
			$(this).css('backgroundColor','green');
			$(this).removeAttr('value');
			
	}).blur(function(){
		$(this).css('backgroundColor','#888');
		$(this).attr('value','Irj be valamit');
	});
});





