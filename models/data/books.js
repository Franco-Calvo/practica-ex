import Book from "../Book.js";
import "dotenv/config.js";
import "../../config/database.js";

let books = [
  {
    title: "Spider-Man: No More",
    date: new Date("2018-12-09"),
    category_id: "63f6824d27a6dbc430e18d06"
  },
  {
    title: "Avengers: Endgame - The Official Movie Special",
    date: new Date("2019-12-09"),
    category_id: "63f6824d27a6dbc430e18d06"
  },
  {
    title: "One Piece, Vol. 1",
    date: new Date("2003-12-09"),
    category_id: "63f6824d27a6dbc430e18d04"
  },
  {
    title: "Naruto, Vol. 1",
    date: new Date("2003-12-09"),
    category_id: "63f6824d27a6dbc430e18d04"
  }
];


Book.insertMany(books)