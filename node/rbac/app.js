const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Server error" });
});

module.exports = app;
