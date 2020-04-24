$(document).ready(function(){
	$('#div1').animate({height:'300px'},1000);
	$('#div1').animate({width:'300px'},1000);
	$('#div1').animate({height:'150px'},1000);
	$('#div1').animate({width:'150px'},1000);
	
	var str = $('#div1').queue().length;	
	$('#feed_back').text(str);
		});
	


/*
show(ido,callback);
hide(ido,callback);
toggle(ido,callback);
fadeIn(ido,callback);
fadeOut(ido,callback);
fadeToggel(ido,callback);
fadeTo(ido,attetszosegi ertek, callback);
slideDown(ido,callback);
slideUp(ido,callback);
slideToggle(ido,callback);

stop();
finish();
*/






