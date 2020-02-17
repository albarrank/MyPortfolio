$(document).ready(() => {
	$(".nav-link").on("click", function() {
		$(".toggler").click();
	});

	$(".project-image").on("click", function() {
		let codeButton = $("#sourceCode");
		let liveButton = $("#liveProject");

		codeButton.toggleClass("source-code");
		codeButton.toggleClass("button-up");

		liveButton.toggleClass("live-project");
		liveButton.toggleClass("button-down");
	});
});
