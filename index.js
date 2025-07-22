import express from "express";
import axios from "axios";

const server = express();
const port = 3000;

const API_URL = "https://secrets-api.appbrewery.com"


server.use(express.static("public"));

server.get("/", async (req, res) => {

    try {
        const result = await axios.get(API_URL + "/random");
        const $data = result.data;
        res.render("index.ejs", {
            secret: $data.secret,
            user: $data.username
        });
    } catch (error) {
        console.log("error happened broo this one --> " + error.message);
    }

});

server.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});