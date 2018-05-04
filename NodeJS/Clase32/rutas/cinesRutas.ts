import { Request, Response, NextFunction } from "express"
import express = require("express")
import { controlador } from "../api/controladores/cinesControlador"
const ruteador = express.Router()

ruteador.get("/", controlador.listar)

export { ruteador }