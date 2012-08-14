/**
 * @author cleanboy
 */


$(document).ready(function(){
	//site transition effect
	$('.contactLoader').click(function(){
		$('#home').fadeOut("slow");
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
		$(".description").click(function()
		{			
			if ($(".description").css("top") == "200px")
			{
				$(this).animate({
					top: "10px"
				}, 600);
			}
			else
			{
				$(this).animate({
					top: "200px"
				}, 600);
			}
		})
		
		$('.topNav li').click(function(e)
		{
			
			var c = $(this).text();
			c = c.toLowerCase();
			c = c.replace(' ', '-');
			
			var id = $('#'+c);
			
			if(id.hasClass('active'))
				return;
			
			$('.switcher.active').fadeOut(600, function()
			{
				$(this).removeClass('active');
				
				$('#'+c).fadeIn(600, function()
				{
					$(this).addClass('active');
				});
			});
		});
			
	
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