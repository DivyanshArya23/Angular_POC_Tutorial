const   express     =   require("express"),
        app         =   express(),
        mongoose    = require("mongoose"),
        User        = require('./models/user'),
        bodyParser  = require("body-parser");

app.use(bodyParser.json());
mongoose.Promise= Promise;
mongoose.connect('mongodb://localhost:27017/angularloginapp',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('Mongoose Up and Running'));

app.post('/api/login',async (req,res) => {
  const {email, password} = req.body;
  const resp = await User.findOne({email,password});
  if(!resp){
    // user login is incorrect
    console.log('incorrect details');
  } else {
    console.log('logging you in');
  }
});

app.post('/api/register',async (req,res) => {
  console.log(req.body)
  const {email, password} = req.body;
  console.log(email,password);
  // store this data on database
  const user = new User({
    email,
    password
  });
  const result = await user.save();
});

app.listen(1234, function(){
  console.log('Server started at 1234');
});
