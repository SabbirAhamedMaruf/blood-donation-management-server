const express = require("express");
const databaseConnection = require("./src/db/database");
const applyCorsConnection = require("./src/middleware/corsPolicy");
const app = express();
const port = process.env.PORT || 5000;
// Router information
const userRoutes = require("./src/routes/user/userRoutes");
const districtsRoutes = require("./src/routes/location/districtsRoutes");
const upazilasRoutes = require("./src/routes/location/upazilasRoutes");
const donationRoutes = require("./src/routes/donation/donationRoutes")

// Adding external connection using cors
applyCorsConnection(app);

// Adding routes connection
app.use(userRoutes);
app.use(districtsRoutes);
app.use(upazilasRoutes);
app.use(donationRoutes);

// Server config
app.get("/", async (req, res) => {
  res.send("Server is runing!");
});

// handling error request middleware
app.all("*", (req, res, next) => {
  const error = new Error("Bad request", req.url);
  error.status = 404;
  next();
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

const main = async () => {
  // connection request for database
  await databaseConnection();
  app.listen(port, () => {
    console.log("Log: Server is currently running on =", port);
  });
};
main();
