/**
 * @author cleanboy
 */


$("document").ready(function(){
	//site transition effect
	$('.contactLoader').click(function(){
		$('.contact').fadeIn();
	});
	
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
		//site descrition drop box motion down
			$(this).next().stop().animate({
				top: "200"
			}, 600);
		},
		// and up
		function (){
			$(this).next().stop().animate({
				top: "0"
			}, 600);
			
		});
		
		//attempt at being able to click the description box back up when it is down
		if ($(".description").css("top") == "200px"){
			$(".description").click(function(){
				$(this).animate({
					top: "10"
				}, 600);
			}
				
			)
		}
	
});

//idea but doesnt quite work...try going with the above
//$('.siteBox').toggle(
//		function (){
//		//site descrition drop box motion up
//			$(this).next().stop().animate({
//				top: "200"
//			}, 600, function(){
//					$(".description").click(function(){
//					$(".description").animate({
//						top: "0"
//					}, 600);
//				})
//			})
//		},
//		// and down
//		function (){
//			$(this).next().stop().animate({
//				top: "0"
//			}, 600);
			
