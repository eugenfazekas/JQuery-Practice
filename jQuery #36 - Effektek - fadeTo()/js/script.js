$(document).ready(function(){
	$('#pic1').fadeTo(1000,'0.5');
	$('#pic2').fadeTo(2000,'0.5',function(){
		$('#pic3').fadeTo(1000,'0.5');
	});
});

/*
show(ido,callback);
hide(ido,callback);
toggle(ido,callback);
fadeIn(ido,callback);
fadeOut(ido,callback);
fadeToggel(ido,callback);
fadeTo(ido,attetszosegi ertek, callback)
*/






