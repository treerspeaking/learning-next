const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const app = express();
const PORT = 8000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())
app.use(session({
  secret:"kasljf",
  cookie: {
    maxAge:5000
  },
  saveUninitialized: false,

}))

app.get("/", (req, res) => {
  res.json({
    "welcome": "welcome to the home page"
  })
})


app.get("/home", (req, res) =>{
  // console.log("there r a home request")
  const number = Math.floor(Math.random() * 101)
  console.log(number)
  res.send({"hello": number})
})

app.listen(PORT, () => {
  console.log("im on port: " + PORT);
})

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  if(username && password){
    if(req.session.authenticated){
      res.json(req.session)
    }
    else{
      if(password == "123"){
        req.session.regenerate((err) => {
          req.session.authenticated = true
          req.session.username = username
          res.json(req.session)
        })
        // res.json(res.session)
      }
      else {
        res.json({
          "msg": "bad request"
        })
      }
    }
  }
  else {
    res.json({
      "msg": "bad request"
    })
  }
})