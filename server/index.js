require("dotenv").config();

const express                       = require("express"),
      bodyParser                    = require("body-parser"),
      cors                          = require("cors"),
      errorHandler                  = require("./handlers/error"),
      authRoutes                    = require("./routes/auth"),
      countriesRoutes               = require("./routes/countries"),
      {loginRequired, correctUser} = require("./middleware/auth");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/countries",  loginRequired, correctUser, countriesRoutes);

app.use(function(req, res, next){
  let err = new Error("Not Found");
  err.status = 404;
  next(err)
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});