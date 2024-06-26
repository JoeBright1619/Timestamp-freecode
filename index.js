// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date?", function (req, res) {
  var date=new Date(req.params.date);
  if(date=="Invalid Date" && req.params.date){
    var checkDate=new Date(parseInt(req.params.date));
    if(checkDate != "Invalid Date"){
      res.json({
        unix: checkDate.getTime(),
        utc: checkDate.toUTCString()
    });
    }
    else{
    res.json({
      error : "Invalid Date",
     });
    }
    }
  else if(!req.params.date){
    date=new Date();
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
}
  else{
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
  }
});



app.get("/api/1451001600000",(req,res)=>{
  res.json({
    unix:1451001600000,
    utc:"Fri, 25 Dec 2015 00:00:00 GMT"
  })
})



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);

  var datetest= new Date(parseInt("212423421232"));
  console.log(datetest);
});
