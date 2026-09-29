import express from "express";
import axios from "axios";
// gonna not use body-parser
const app = express();
const port = 3000;

app.use(express.static("public"));

//appbrewery ex. from 5.6
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");

    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
