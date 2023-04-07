const router = require("express").Router();
const places = require("../models/places.js");

//Places Index Page
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

//New Place Data POST
router.post("/", (req, res) => {
  console.log(req.body);
  //Default values if one is not provided
  if (!req.body.pic) {
    req.body.pic = "https://via.placeholder.com/350";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
  //res.send('POST /places')
});

//New Place Page
router.get("/newPlace", (req, res) => {
  res.render("places/newPlace");
});

//Show Place Page
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/showPlace", { place: places[id], id });
  }
});

//Edit Place Page
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/editPlace", { place: places[id] });
  }
});

//Delete Place
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

module.exports = router;
