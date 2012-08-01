/**
 * @author cleanboy
 */


$("document").ready(function(){
	//Zoom image effect
	$('.sitePreview img').hover(
		function(){
		$(this).stop().animate({
			marginTop:"0",
			marginLeft:"0",
			width:"300px",
			height:"200px",
			}, 300);
		},
		function(){
			$(this).stop().animate({
			width:"280px",
			height:"180px",
			marginTop:"10",
			marginLeft:"10",
			}, 300);
		}
	);
	
	$('.siteBox').toggle(
		function (){
		//site descrition drop box motion up
			$(this).next().stop().animate({
				top: "200"
			}, 600);
		},
		// and down
		function (){
			$(this).next().stop().animate({
				top: "0"
			}, 600);
			
		});
		
	
});


