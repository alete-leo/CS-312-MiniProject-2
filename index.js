import express from "express";
import axios from "axios";
// gonna not use body-parser
const app = express();
const port = 3000;

app.use(express.static("public"));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
