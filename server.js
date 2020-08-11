const express = require("express");
const morgan = require("morgan"); // used to print api endpoint
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv").config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const path = require("path");
const app = express();

const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.redirect("https://" + req.headers.host + req.url);
  });
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// if (process.env.NODE_ENV === "development") {
//   app.use(cors({ origin: "http://localhost:3000" }));
// }

app.use("/api", authRoute);
app.use("/api", userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Api is running on port ${port} - ${process.env.NODE_ENV}`);
});
