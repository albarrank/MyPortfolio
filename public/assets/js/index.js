$(document).ready(() => {
	$(".nav-link").on("click", function() {
		$(".toggler").click();
	});

	$(".project-card").on("click", function() {
		let $this = $(this);

		let $sourceCode = $this[0].children[1];
		let $liveProject = $this[0].children[2];

		console.log($this[0]);

		$sourceCode.classList.toggle("source-code");
		$sourceCode.classList.toggle("button-up");

		$liveProject.classList.toggle("live-project");
		$liveProject.classList.toggle("button-down");
	});

	$("#sendEmail").on("click", (e) => {
		e.preventDefault();
		const formData = getData();

		apiCall(formData);
		resetForm();
	});

	function resetForm() {
		$("#form").trigger("reset");
	}

	function apiCall(formData) {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData)
		};

		const checkForError = (response) => {
			if (!response.ok) throw Error(response.statusText);
			return response.json();
		};

		fetch("/api/email", options)
			.then(checkForError)
			.then((message) => {
				alert(message.msg);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function getData() {
		const name = $("#name").val();
		const email = $("#email").val();
		const message = $("#message").val();

		return {
			name,
			email,
			message
		};
	}
});
