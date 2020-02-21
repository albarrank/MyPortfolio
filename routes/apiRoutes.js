require("dotenv").config();
const express = require("express");
const router = express.Router();

const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
	service: "Gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	},
	maxConnections: 50,
	maxMessages: 100
});
transporter.verify((err) => {
	if (err) checkErr = err;
	else checkErr = "No error";
});

router.post("/email", (req, res) => {
	const body = req.body;

	const name = body.name;
	const email = body.email;
	const message = body.message;

	let validEmail = validateEmail(email);

	if (validEmail) {
		const content = `<h1>name:</h1> <h4>${name}</h4> \n <h1>email:</h1> <h4>${email}</h4> \n <h1>message:</h1> <h4>${message}</h4> `;

		activateNodeMailer(name, content);

		res.json({
			msg: "Email Sent!",
			errTest: checkErr
		});
	} else
		res.json({
			msg: "Email is Invalid!",
			errTest: checkErr
		});
});

function activateNodeMailer(name, content) {
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
}

function validateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	} else return false;
}

module.exports = router;
