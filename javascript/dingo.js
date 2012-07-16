/**
 * @author cleanboy
 */


$("document").ready(function(){
	
	$('.sitePreview img, .sitePreview').hover(
		function(){
		$(this).animate({
			'top':"-=10",
			'left':"-=10",
			"width":"300px",
			"height":"200px",
			}, 600);
		},
		function(){
			$(this).animate({
			"width":"280px",
			"height":"180px",
			'top':"+=10",
			'left':"+=10",
			}, 600);
		}
	);
	
	$('.sitePreview').toggle(
		function (){
		//site descrition drop box motion up
			$(this).next().animate({
				"width":"280px",
				"height":"200px",
				'left':"0",
				'top': '+=190'
			}, 600);
		},
		// and down
		function (){
			$(this).next().animate({
				"width":"260px",
				"height":"160px",
				'left':"10px",
				'top': '-=190'
			}, 600);
			
		});
		
	
});


