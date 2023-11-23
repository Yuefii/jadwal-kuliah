const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const router = require("./routes/route");
const logPath = require("./middlewares/logPath");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(logPath);
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
