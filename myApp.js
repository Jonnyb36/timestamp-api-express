
var express = require('express');
var app = express();

let returnedDate;

app.get("/api/timestamp", function(req, res){
  returnedDate = new Date();
  res.json({unix: returnedDate.getTime(), UTC: returnedDate.toUTCString()});
})

app.get("/api/timestamp/:date_string", function(req, res){
  returnedDate = new Date(req.params.date_string);
  
  if(returnedDate == "Invalid Date"){
    res.json({error: returnedDate.toString()});
  } else {
    res.json({unix: parseInt(returnedDate.getTime()), UTC: returnedDate.toUTCString()});  
  };
})

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
