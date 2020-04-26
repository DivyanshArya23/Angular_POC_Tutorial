const   express     =   require("express"),
        app         =   express(),
        bodyParser  = require("body-parser");

app.use(bodyParser.json());

app.post('/api/register',function(req,res){
    console.log(req.body)
    const {username, password} = req.body;
    // store this data on database
});

app.listen(1234, function(){
    console.log('Server started at 1234');
});