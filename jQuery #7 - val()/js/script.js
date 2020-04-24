$('document').ready(function(){
	
	$('#submit').click(function(){
		var username = $('#username').val();
		var password = $('#password').val();
		if(password == '' ){
			alert('Nem lehet a jelszo ures');
		}else{
			alert('Ok');
		}
	})

});

/*$('document').ready(function(){
	
	$('#submit').click(function(){
		$('#username').val('Ertekadas');
		
	})

});*/





