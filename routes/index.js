import userRouter from "./users.js";
import categoriesRouter from "./categories.js";
import booksRouter from "./books.js";

import express from "express";
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", userRouter);
router.use("/categories", categoriesRouter);
router.use("/books", booksRouter);

export default router;
