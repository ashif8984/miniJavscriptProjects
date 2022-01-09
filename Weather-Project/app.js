const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // console.log("Post Submitted");
//   console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = "<YOUR_API_KEY>";  // Replace this with your API key from https://openweathermap.org/api
  const url ="https://api.openweathermap.org/data/2.5/weather?q=" +query +"&appid=" +apiKey;

  // Sample URL
  // http://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YOUR_API_KEY

  https.get(url, function (response) {
    response.on("data", function (data) {
      console.log(data);
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDesc = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<h1>The Weather Description  is: " + weatherDesc + "</h1>");
      res.write("<h1>The Tempature in "+ query+ " is: " + temp + "</h1>");
      res.write(" <img src=" + imageUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server listening to port 3000.");
});
