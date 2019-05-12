var express = require("express");
var app = express();
var os = require('os-utils');


app.get("/cpu", (req, res, next) => {
  os.cpuUsage(function(v){
    res.json({"cpu": v});
});

});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
