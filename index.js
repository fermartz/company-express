const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello world from express!!!</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening at http://localhost: ${port}`));