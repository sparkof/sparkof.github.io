jQuery(document).ready(function($) {
	$("[data-fancybox]").fancybox({
	// Options will go here
	buttons : [
		'slideShow',
		'fullScreen',
		'close'
	]
});


// navigation (show public or house block)
		$(".portfolio_navButton").on("click", function () {
			$(".portfolio_navButton").removeClass("active");
			$(this).addClass("active");

			var design = $(this).attr("data-name");
			if (design==="public") {
				$(".portfolio_houseDesign").hide();
				$(".portfolio_publicDesign").show();
			} else {
				$(".portfolio_publicDesign").hide();
				$(".portfolio_houseDesign").show();
			}
		});


		$(".portfolio .galleryItemLayout").on("click", function () {
			$(this).siblings("a")[0].click();
		})
	});
