const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// initialize express to use ejs as view
app.set("view engine", "ejs");

// sets public to be default for all links in html
app.use(express.static("public"));

// renders index page for ejs
app.get("/", function(req, res) {
	res.render("pages/index");
});

app.listen(PORT, function() {
	console.log("server is listening on port:", PORT);
});
