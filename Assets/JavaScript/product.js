$(document).ready(function() {
	$("a.mountain").click(function() {
		$("#oneMount").toggle();
	});
	$("a.riding").click(function() {
		$("#twoRiding").toggle();
	});
	$("a.bmx").click(function() {
		$("#threeBmx").toggle();
	});
	$("a.beach").click(function() {
		$("#fourBeachcruiser").toggle();
	});
	$("img.magnify").mouseenter(function() {
	 	$(this).css({ width: '320', height: '300px' });
	});
	$("img.magnify").mouseleave(function() {
		$(this).css({width: '200', height: '200'});
	});
	/*document.getElementById("mountain").onclick = function() {
		$("div").find("#oneMount").show();
	};*/
});