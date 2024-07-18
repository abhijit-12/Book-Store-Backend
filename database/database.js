const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://adas0861:Priyadhar5616@cluster0.zfy0fmx.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected"));
