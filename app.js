require("dotenv").config();
const express = require("express");

const taskRouter = require("./Routes/taskRoute");
const { connectDB } = require("./db");


const app = express();

app.use(express.json());


app.use("/api/tasks", taskRouter);

// 6XtPO1I9nGNOB554

app.listen(3000, "localhost", function () {
  connectDB();
  console.log("My app is listening on a 3000 port");
});
