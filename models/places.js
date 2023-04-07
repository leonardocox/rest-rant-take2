const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "http://placeimg.com/640/480/nature" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

module.exports = mongoose.model("Place", placeSchema);

// module.exports = [
//  {
//    name: "Kirby Cafe",
//    city: "Tokyo",
//    state: "Japan",
//    cuisines: "Kirby Themed Cuisine",
//    pic: "/images/kirby-food.jpg",
//  },
//  {
//    name: "Ninja Shinjuku",
//    city: "Tokyo",
//    state: "Japan",
//    cuisines: "Japanese Cuisine",
//    pic: "/images/ninja-cafe.jpg",
//  },
//];
