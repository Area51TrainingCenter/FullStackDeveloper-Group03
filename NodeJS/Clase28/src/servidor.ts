// Importaciones
import express = require("express")
import { Request, Response, NextFunction } from "express"

// Declaraciones
const app = express()

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res
        .status(200)
        .type("text/plain")
        .send("Ok, todo funciona")
})

// Servidor
app.listen(4000, () => {
    console.log("Servidor ejecutándose en el puerto 4000")
})