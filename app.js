const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/bookroutes");

require("./database/database");
app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoute);

app.listen(1000, () => {
  console.log("Server is running on port 1000"); // server will start on port 1000
});
