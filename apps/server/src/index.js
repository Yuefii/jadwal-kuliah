const express = require('express');
const app = express();
const port = 3001;
const router = require('./routes/route');
const logPath = require('./middlewares/logPath')

app.use(logPath)
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
