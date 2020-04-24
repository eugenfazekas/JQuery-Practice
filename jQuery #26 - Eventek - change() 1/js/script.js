$(document).ready(function(){
	$('#list').change(function(){
		var list_selected_val = $('#list').val();
		$('#par').text('Kivalasztottad a '+ list_selected_val + ' elemet');	
	});
});






