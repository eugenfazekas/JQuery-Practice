$(document).ready(function(){
	function center_div(){
		var window_width = $(window).width();
		var window_height = $(window).height();
		
		var div_width = $('#div').width();
		var div_height = $('#div').height();
		
		$('#div').css({'left': (window_width/2)-(div_width/2),'top':(window_height/2)-(div_height/2)});
	};
	center_div();
	$(window).resize(function(){
		center_div();
	});
});







 