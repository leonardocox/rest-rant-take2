const db = require("../models");

db.Place.create([
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
])
  .then(() => {
    console.log("Seed Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Seed Failure!", err);
    process.exit();
  });
