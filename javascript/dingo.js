/**
 * @author cleanboy
 */


$("document").ready(function(){
	
	$('.sitePreview').toggle(
		//site descrition drop box motion up
		
		function (){
			
			$(this).next().animate({
				"width":"290px",
				"height":"200px",
				'left':"0",
				'top': '+=190'
			}, 600);
			
		},
		// and down
		function (){
			$(this).next().animate({
				"width":"270px",
				"height":"170px",
				'left':"10",
				'top': '-=190'
			}, 600);
			
		});
});


