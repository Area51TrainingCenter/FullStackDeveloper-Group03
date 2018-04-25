// Importaciones
import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import { ruteador as indexRutas } from '../rutas/indexRutas'

require("dotenv").config({ path: "./variables.env" }) // lee las variables de entorno desde el archivo "variables.env"

// Declaraciones y variables
const app: Application = express()

app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use(express.static("./publico"))
// app.use(express.static(__dirname + "/publico"))

// Rutas
app.use("/", indexRutas)

// Servidor
app.listen(process.env.PORT, () => console.log(`Servidor ejecutándose en el puerto ${process.env.PORT}`))