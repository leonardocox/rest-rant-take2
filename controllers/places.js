const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "Kirby Cafe",
      city: "Tokyo",
      state: "Japan",
      cuisines: "Kirby Themed Cuisine",
      pic: "/images/kirby-food.jpg",
    },
    {
      name: "Ninja Shinjuku",
      city: "Tokyo",
      state: "Japan",
      cuisines: "Japanese Cuisine",
      pic: "/images/ninja-cafe.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
