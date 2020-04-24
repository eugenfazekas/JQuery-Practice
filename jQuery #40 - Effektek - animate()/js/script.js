$(document).ready(function(){
	$('#gomb').click(function(){
		$('#div2').animate({left:'400px',
							width:'400px',
							height:'500px'},3000,function(){
			$('#feed_back').text('Az Animacio befejezodot!');
		});
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

animate ({parameterek},ido,callback)
*/






