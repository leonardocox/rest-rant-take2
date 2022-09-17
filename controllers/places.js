const router = require("express").Router();
const places = require("../models/places.js");

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("POST /places");
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  res.send("GET /places/:id stub");
});

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

module.exports = router;
