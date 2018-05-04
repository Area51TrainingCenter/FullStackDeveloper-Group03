// Importaciones
import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import mongoose = require("mongoose")
import bodyParser = require("body-parser")
import { ruteador as cineRutas } from "../rutas/cinesRutas"

require("dotenv").config({ path: "./variables.env" })

// Declaraciones
const app: Application = express()
app.set("puerto", process.env.PORT)

// Rutas
app.use("/", cineRutas)


// Servidor
app.listen(app.get("puerto"), () => console.log(`Servidor ejecutándose en el puerto ${app.get("puerto")}`))


