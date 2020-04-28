const   express     =   require("express"),
        app         =   express(),
        session     = require("express-session"),
        mongoose    = require("mongoose"),
        User        = require('./models/user'),
        bodyParser  = require("body-parser");

app.use(session({
  secret:'sdfghjkldfgdfvcsfdvffdddvds',
  saveUninitialized: true,
  resave: false
}));

app.use(bodyParser.json());
mongoose.Promise= Promise;
mongoose.connect('mongodb://localhost:27017/angularloginapp',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('Mongoose Up and Running'));

// ============================================================

// login route
app.post('/api/login',async (req,res) => {
  const {email, password} = req.body;
  const resp = await User.findOne({email,password});
  if(!resp){
    // user login is incorrect
    // console.log('incorrect details');
    res.json({
      success: false,
      message: 'Incorrect Details'
    });
  } else {
    res.json({
      success: true
    });
    req.session.user = email;
    req.session.save();
    // console.log(req.session.user)
    // console.log('logging you in');
  }
});

// register route
app.post('/api/register',async (req,res) => {
  const {email, password} = req.body;

  // check if user already exists
  const existingUser = await User.findOne({email:email});
  if(existingUser){
    res.json({
      success:false,
      message: 'Email already in use'
    });
    console.log(existingUser);

    return;
  }

  // store this data on database
  const user = new User({
    email,
    password
  });
  const result = await user.save();
  res.json({
    success: true,
    message: 'Welcome'
  });
});

app.get("/api/data",(req, res) => {
  console.log(req.session.user)

  res.send("User is =>" + req.session.user);
})
// ============================================================
app.listen(1234, function(){
  console.log('Server started at 1234');
});
