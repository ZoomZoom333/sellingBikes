$(document).ready(function() {
	$("img.magnify").mouseenter(function() {
	 $(this).css({ width: '300', height: '315px' });
	});
	$("img.magnify").mouseleave(function() {
		$(this).css({width: '200', height: '200'});
	});
	$("a.mountain").click(function() {
		$("div").find("#oneMount").show('img');
	});
	$("a.riding").click(function() {
		$("#twoRdidng.library").show();
	});
	$("a.bmx").click(function() {
		$("#threeBmx").show();
	});
	$("a.beach").click(function() {
		$("#fourBeachcruiser").show();
	});
	/*document.getElementById("mountain").onclick = function() {
		$("div").find("#oneMount").show();
	};*/
});