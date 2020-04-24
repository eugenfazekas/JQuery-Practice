$(document).ready(function(){
	$('p').click(function() {
		$(this).hide(1000,function(){
			$('#pic').show(1000);
		});
	});
});

/*
show(ido,callback);
hide(ido,callback);

*/



