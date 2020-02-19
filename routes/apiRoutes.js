const express = require("express");
const router = express.Router();

const nodeMailer = require("nodemailer");
const creds = require("../config/config");

let transporter = nodeMailer.createTransport({
	host: "smtp.gmail.com",
	auth: {
		user: creds.USER,
		pass: creds.PASS
	}
});

transporter.verify((err) => {
	if (err) console.log(err);
	else console.log("Server is ready to take emails");
});

router.post("/email", (req, res) => {
	const body = req.body;

	const name = body.name;
	const email = body.email;
	const message = body.message;

	const content = `<h1>name:</h1> <h4>${name}</h4> \n <h1>email:</h1> <h4>${email}</h4> \n <h1>message:</h1> <h4>${message}</h4> `;

	let mailOptions = {
		from: name,
		to: "kevthedev365@gmail.com",
		subject: "New Message from contact form",
		html: content
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) console.log("error occured");
		else console.log("message sent");
	});
});

module.exports = router;
