// To start, type the following in the cmd:
// "git ini" To create a new git repository
// "npm init -y" To initiate the folder and create a package.json
// "npm i express" To enable launching a local server
// "npm i cors" To allow the browser to call the API
// "nodemon -v" to make sure the package is installed globally

const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World, ana Abbas");
});

app.get("/portavice", function (req, res) {
  var data = [];
  data.push(
    {
      name: "Patrick Robrecht",
      position: "Head of Software Development ",
      url: "https://profile-images.xing.com/images/2fed445ce5dd270fa6f68ff401844a92-3/patrick-robrecht.256x256.jpg",
    },
    {
      name: "Daniel Thiessen",
      position: "Head of Business Process Development",
      url: "https://media.licdn.com/dms/image/C5603AQGrRMM3IPdZiA/profile-displayphoto-shrink_800_800/0/1662372833372?e=2147483647&v=beta&t=m5XOCQVw_B5oUd2nQXysvIrRTek9YX39vEEPoAS7G00",
    }
  );
  res.send(data);
});

app.listen(33100);
