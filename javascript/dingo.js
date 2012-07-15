/**
 * @author cleanboy
 */


$("document").ready(function(){
	
	$('.sitePreview').toggle(
		//site descrition drop box motion up
		
		function (){
			
			$(this).next().animate({
				'top': '+=190'
			}, 600);
			
		},
		// and down
		function (){
			$(this).next().animate({
				'top': '-=190'
			}, 600);
			
		});
});


