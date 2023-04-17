const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

console.log(process.env.PRIVATE_KEY);

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": process.env.PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.res.status || 500).json(error.res.data || "Internal Server Error");
  }
});

app.listen(3001, () => {
  console.log("Server is listening on Port :", 3001);
});
