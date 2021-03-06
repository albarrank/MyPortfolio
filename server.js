const express = require("express");
const app = express();
const path = require("path");
// depoly through heroku cli
const PORT = process.env.PORT || 5000;

const pageRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// initialize express to use ejs as views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// sets public to be default for all links in html
app.use(express.static("public"));

// allows express to interpret json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes used for website
app.use("/", pageRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
	console.log("server is listening on port:", PORT);
});
