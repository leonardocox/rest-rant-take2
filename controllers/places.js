const router = require("express").Router();
const db = require("../models");

//Places Index Page
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => res.render("places/index", { places }))
    .catch((err) => res.render("error404"));
});

//New Place Data POST
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => res.redirect("/places"))
    .catch((err) => res.render("error404"));
});

// router.post('/', (req, res) => {
//     console.log(req.body)
//     //Default values if one is not provided
//     if (!req.body.pic) {
//         req.body.pic = 'http://placeimg.com/640/480/nature'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
//     //res.send('POST /places')
// })

//New Place Page
router.get("/newPlace", (req, res) => {
  res.render("places/newPlace");
});

//Edit Place Page
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/editPlace", { place });
      console.log(place);
    })

    .catch((err) => {
      res.render("error404");
      console.log(err);
    });

  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('error404')
  // } else if (!places[id]) {
  //     res.render('error404')
  // } else {
  //     res.render('places/editPlace', place)
  // }
});

//Show Place Page
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => res.render("places/showPlace", { place }))
    .catch((err) => res.render("error404"));

  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('error404')
  // } else if (!places[id]) {
  //     res.render('error404')
  // } else {
  //     res.render('places/showPlace', { place: places[id], id })
  // }
});

//Edit Place PUT
router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(res.redirect(`/places/${req.params.id}`))
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });

  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('error404')
  // } else if (!places[id]) {
  //     res.render('error404')
  // } else {
  //     //Default values if one is not provided
  //     if (!req.body.pic) {
  //         req.body.pic = 'http://placeimg.com/640/480/nature'
  //     }
  //     if (!req.body.city) {
  //         req.body.city = 'Anytown'
  //     }
  //     if (!req.body.state) {
  //         req.body.state = 'USA'
  //     }
  //     places[id] = (req.body)
  //     res.redirect(`/places/${id}`)
  // }
});

//Delete Place
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(res.redirect("/places"))
    .catch(res.render("error404"));

  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('error404')
  // } else if (!places[id]) {
  //     res.render('error404')
  // } else {
  //     places.splice(id, 1)
  //     res.redirect('/places')
  // }
});

//Rant Post
router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub page");
});

//Rant DELETE
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub page");
});

module.exports = router;
