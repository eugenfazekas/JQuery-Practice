$(document).ready(function(){
	$('#div1').animate(5000);
		$('#div1').animate({height:'300px'},2500);
		$('#div1').animate({width:'300px'},2500);
			$('#finish').click(function(){
				$('#div1').finish();
			});
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






