$(document).ready(function(){
	$('#username').focusin(function(){
		$('#username').css('backgroundColor','#efefef').parent().after('<td class="message"> Add meg a felhasznalo neved</td>')
	}).blur(function(){ 
		$('#username').css({'background-color' :'#fff','font-family':'Tahoma'});
		$('.message').remove();
	});
	$('#password').focusin(function(){
		$('#password').css('backgroundColor','#efefef').parent().after('<td class="message"> Add meg a jelszavadat</td>')
	}).blur(function(){ 
		$('#password').css('background-color','#fff');
		$('.message').remove();
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






