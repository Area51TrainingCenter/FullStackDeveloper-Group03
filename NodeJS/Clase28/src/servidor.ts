// Importaciones
import express = require("express")
import { Request, Response, NextFunction } from "express"

// Declaraciones
const app = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {

    //console.log(__dirname)
    res
        .status(200)
        .type("text/html")
        .render("home")
        //.sendFile("/Users/administrador/Desktop/FullStackDeveloper-Group03/NodeJS/Clase28/vistas/home.html")
})

// Servidor
app.listen(4000, () => {
    console.log("Servidor ejecutándose en el puerto 4000")
})