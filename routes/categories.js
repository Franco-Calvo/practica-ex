import express from "express";
import Category from "./../models/Category.js";

let router = express.Router();

router.get("/", (req, res) => {
  return res
    .status(200) // 200: Éxito para la lectura
    .send("Acá deberías ver todas las categorías"); // Send envía mensajes al cliente
});

router.post("/", async (req, res) => {
  // Crear categorías
  try {
    let category = await Category.create(req.body);
    return res.status(201).send("Se creó correctamente la categoría");
  } catch (error) {
    console.log(error);
    return res.status(400).send("No se pudo crear");
  }
});

export default router;
