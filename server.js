const express = require("express");
const app = express();
const pageRoutes = require("./routes/htmlRoutes");
const PORT = process.env.PORT || 5000;

// initialize express to use ejs as view
app.set("view engine", "ejs");

// sets public to be default for all links in html
app.use(express.static("public"));

// allows express to interpret json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// renders index page for ejs
app.use("/", pageRoutes);

app.listen(PORT, () => {
	console.log("server is listening on port:", PORT);
});
