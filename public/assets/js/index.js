$(document).ready(() => {
	$(".nav-link").on("click", function() {
		$(".toggler").click();
	});

	$(".project-card").on("click", function() {
		let $this = $(this);

		let $sourceCode = $this[0].children[1];
		let $liveProject = $this[0].children[2];

		console.log($sourceCode, $liveProject);

		$sourceCode.classList.toggle("source-code");
		$sourceCode.classList.toggle("button-up");

		$liveProject.classList.toggle("live-project");
		$liveProject.classList.toggle("button-down");
	});
});
