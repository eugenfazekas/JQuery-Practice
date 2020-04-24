$(document).ready(function(){
	$('#list').change(function(){
		var str = '' ;
		$('#list option:selected').each(function(){
			str += $(this).text()+' ';
		});
		$('#feed_back').text(str);	
	});
});






