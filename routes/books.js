import express from "express";
import Book from "./../models/Book.js";

let router = express.Router();

router.get("/", (req, res) => {
  return res
    .status(200) // 200: Éxito para la lectura
    .send("Acá deberías ver todos los libros"); // Send envía mensajes al cliente
});

router.post("/", async (req, res) => {
  // Crear books
  try {
    let book = await Book.create(req.body);
    return res.status(201).send("Se crearon los books");
  } catch (error) {
    console.log(error);
    return res.status(400).send("No se pudo crear");
  }
});

export default router;
