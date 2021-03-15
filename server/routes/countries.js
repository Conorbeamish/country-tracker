const express = require("express");
const router = express.Router({mergeParams: true});

const {updateCountries, getCountries} = require("../handlers/countries");

router.route("/").post(updateCountries);
router.route("/").get(getCountries);

module.exports = router;