const express = require("express");
const router = express.Router();

const nodeMailer = require("nodemailer");
const creds = require("../config/config");

router.post("/email", (req, res) => {
	const body = req.body;

	const name = body.name;
	const email = body.email;
	const message = body.message;

	const content = `<h1>name:</h1> ${name} \n <h1>email:</h1> ${email} \n <h1>message</h1>: ${message} `;

	let transporter = nodeMailer.createTransport({
		host: "smtp.gmail.com",
		auth: {
			user: creds.USER,
			pass: creds.PASS
		}
	});

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
