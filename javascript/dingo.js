/**
 * @author cleanboy
 */


$("document").ready(function(){
	
	$('.sitePreview').toggle(
		//site descrition drop box motion up
		function (){
			$(".description").animate({
				'top': '+=190'
			}, 600);
			
		},
		// and down
		function (){
			$(".description").animate({
				'top': '-=190'
			}, 600);
			
		});
});


