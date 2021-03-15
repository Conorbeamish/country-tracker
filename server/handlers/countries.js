const db = require("../models");

exports.updateCountries = async function(req, res, next){
  try {
    let foundUser = await db.User.findById(req.params.id);
    //replace countries list in user
    foundUser.countries = req.body.countries
    await foundUser.save();
    return res.status(200).json(foundUser.countries);
  } catch (err){
    return next(err);
  }
};

exports.getCountries = async function(req, res, next){
  try{
    let foundUser = await db.User.findById(req.params.id);
    return res.status(200).json(foundUser.countries);
  } catch (err) {
    return next(err);
  }
};


