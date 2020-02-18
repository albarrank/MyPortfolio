$(document).ready(() => {
	$(".nav-link").on("click", function() {
		$(".toggler").click();
	});

	$(".project-card").on("click", function() {
		let $this = $(this);

		let $sourceCode = $this[0].children[1];
		let $liveProject = $this[0].children[2];

		$sourceCode.classList.toggle("source-code");
		$sourceCode.classList.toggle("button-up");

		$liveProject.classList.toggle("live-project");
		$liveProject.classList.toggle("button-down");
	});

	$("#sendEmail").on("click", (e) => {
		e.preventDefault();
		const formData = getData();
		console.log(formData);
	});

	function getData() {
		const name = $("#name").val();
		const email = $("#email").val();
		const message = $("#message").val();
	}
});
