const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./Routes/taskRoute");


const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  console.log("Fetching API.....");
  next();
});

app.use("/api/tasks", taskRouter);

const dbString =
  "mongodb+srv://tunrayotemitope05:6XtPO1I9nGNOB554@cluster0.6w0jm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(dbString);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err.message);
  }
}
connectDB();
// 6XtPO1I9nGNOB554

app.listen(3000, "localhost", function () {
  console.log("My app is listening on a 3000 port");
});
