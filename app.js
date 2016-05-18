$(document).ready(function() {

		$("#container").fadeIn(1000);

		$("p").on("mouseenter", function(){
			$(this).css("background-color", "#f5f102");
			});
		$("p").on("mouseleave", function(){
			$(this).css("background-color", "#fff");
		});

		$("h2").on("click", function(){
			$(this).animate({
				"opacity":".25",
				"margin-left": "20px"
			}, 400, "swing", function(){
				$(".speech").animate({
					"opacity": ".50"
				});
			});
		});

		$(document).on("click", "#switcher-large", function(){
			$("p").css("font-size", "200%");
		});
		$(document).on("click", "#switcher-small", function(){
			$("p").css("font-size", "50%");
		});
		$(document).on("click", "#switcher-default", function(){
			$("p").css("font-size", "100%");
		});
});
