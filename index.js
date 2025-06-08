import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Welcom to Chetan Joshi landing Page");
});

app.get("/health", (req, res) => {
	res.send("Everything is working fine");
});

app.get("/products", (req, res) => {
	res.send("This is Product page");
});

app.listen(8080, () => {
	console.log("Server is running on port 8080");
});
