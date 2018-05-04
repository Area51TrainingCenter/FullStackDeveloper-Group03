import { Request, Response, NextFunction } from "express"
import { Cine } from "../modelos/cinesModelo"

const controlador = {
	listar: async (req: Request, res: Response) => {
		/*const promesaCines = Cine.find()
		const promesasUbigeo = Ubigeo.find()

		await Promise.all([promesasCines, promesasUbigeo])*/

		res.send("Listado de cines")
	}
}

export { controlador }