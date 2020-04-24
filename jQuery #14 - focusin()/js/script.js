$('document').ready(function(){
	$(':text').focusin(function(){
			$(this).css('backgroundColor','green');
			$(this).removeAttr('value');
	})
});





