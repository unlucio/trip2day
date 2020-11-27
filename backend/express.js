const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
app.use(cors());

const trip = [
    {
        id: "Tokyo",
        location: "Tokyo",
        photo: "../public/Tokyo.jpg"
    }
]

app.get("/", (req, res) => {
    res.json({
        cardViaggio: trip,
    })
})

app.post("/", (req, res) => {
    trip.push({
        id: "Londra",
        location: "Londra",
        photo: "../public/Londra.jpg"
    })
    res.json({
        cardViaggio: trip,
    })
})
app.all((req, res) => {
    res.json({ error: "Sei un coglione!!" });
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})