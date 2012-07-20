/**
 * @author cleanboy
 */


$("document").ready(function(){
	
	$('.sitePreview img, .sitePreview').hover(
		function(){
		$(this).stop().animate({
			top:"0",
			left:"0",
			width:"300px",
			height:"200px",
			}, 600);
		},
		function(){
			$(this).stop().animate({
			width:"280px",
			height:"180px",
			top:"10",
			left:"10",
			}, 600);
		}
	);
	
	$('.sitePreview').toggle(
		function (){
		//site descrition drop box motion up
			$(this).next().animate({
				width:"280px",
				height:"200px",
				left:"0",
				top: "200"
			}, 600);
		},
		// and down
		function (){
			$(this).next().animate({
				width:"260px",
				height:"160px",
				left:"10px",
				top: "10"
			}, 600);
			
		});
		
	
});


