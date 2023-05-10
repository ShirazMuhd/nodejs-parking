const express = require("express");
const app = express();

let parkingData = {}

app.use(express.urlencoded({extended: true}))

app.get("/getParking", (req, res) => {
  res.send(parkingData);

});

app.get("/updateParking", (req, res) => {
  console.log("request recieved .......");
  console.log(req.query);
  console.log(req.url);
  parkingData = req.query;
  console.log(parkingData);
})

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
