var express = require("express");
var app = express();
var os = require('os-utils');
const shell = require('shelljs');

app.get("/cpu", (req, res, next) => {
  os.cpuUsage(function(v){
    res.json({"cpu": v});
});

});

app.get("/cpuTest", (req, res, next) => {
	let time = req.query.time;
	let cputest = req.query.percentage;
	shell.exec("stress -c 1 -t " + time + " & cpulimit -p $( pidof -o $! stress ) -l " + cputest)
	return res.send("1")
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
