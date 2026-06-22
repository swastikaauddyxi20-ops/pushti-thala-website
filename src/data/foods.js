import bowl from "../assets/bengali-power-bowl.jpg";
import paneer from "../assets/paneer-shorshe-bowl.jpg";
import chicken from "../assets/chicken-bhuna-bowl.jpg";
import fish from "../assets/fish-curry-rice-bowl.jpg";

import makhana from "../assets/makhana-snack.jpg";
import chana from "../assets/roasted-chana.jpg";
import peanut from "../assets/peanut-mix.jpg";
import khakhra from "../assets/protein-khakhra.jpg";

import laddoo from "../assets/protein-laddoo.jpg";
import datebar from "../assets/date-nut-bar.jpg";

import lassi from "../assets/mango-lassi.jpg";
import shake from "../assets/protein-shake.jpg";

const foods = [
  // MEALS

  {
    id: 1,
    name: "Bengali Power Bowl",
    price: 299,
    protein: "32g",
    image: bowl,
    category: "Meals",
  },

  {
    id: 2,
    name: "Paneer Shorshe Bowl",
    price: 279,
    protein: "28g",
    image: paneer,
    category: "Meals",
  },

  {
    id: 3,
    name: "Chicken Bhuna Bowl",
    price: 349,
    protein: "40g",
    image: chicken,
    category: "Meals",
  },

  {
    id: 4,
    name: "Fish Curry Rice Bowl",
    price: 329,
    protein: "35g",
    image: fish,
    category: "Meals",
  },

  // SNACKS

  {
    id: 5,
    name: "Makhana Snack",
    price: 89,
    protein: "6g",
    image: makhana,
    category: "Snacks",
  },

  {
    id: 6,
    name: "Roasted Chana",
    price: 79,
    protein: "8g",
    image: chana,
    category: "Snacks",
  },

  {
    id: 7,
    name: "Peanut Mix",
    price: 99,
    protein: "10g",
    image: peanut,
    category: "Snacks",
  },

  {
    id: 8,
    name: "Protein Khakhra",
    price: 119,
    protein: "12g",
    image: khakhra,
    category: "Snacks",
  },

  // SWEETS

  {
    id: 9,
    name: "Protein Laddoo",
    price: 99,
    protein: "8g",
    image: laddoo,
    category: "Sweets",
  },

  {
    id: 10,
    name: "Date Nut Bar",
    price: 129,
    protein: "9g",
    image: datebar,
    category: "Sweets",
  },

  // DRINKS

  {
    id: 11,
    name: "Mango Lassi",
    price: 149,
    protein: "7g",
    image: lassi,
    category: "Drinks",
  },

  {
    id: 12,
    name: "Protein Shake",
    price: 179,
    protein: "25g",
    image: shake,
    category: "Drinks",
  },
];

export default foods;