const tbody = document.querySelector("tbody")
const inputTitulo = document.querySelector('#titulo')
const inputDireccion = document.querySelector('#direccion')
const btnGuardar = document.querySelector('#btnGuardar')

////////////// PARA LISTAR
const objHttp = new XMLHttpRequest()

objHttp.addEventListener("readystatechange", obj => {
	const e = obj.currentTarget

	// readyState indica el estado de la llamada
	console.log(e.readyState)

	// status = 200 indica que la respuesta llego bien
	if(e.readyState == 4 && e.status == 200 ){
		const registros = JSON.parse(e.responseText)
		console.log(registros)

		const filas = registros
		.sort( (a, b) => {
			// console.log(a.id)
			return a.id < b.id
		})
		//.sort( (a, b) => parseInt(a.id) > parseInt(b.id))
		//.sort( (a, b) => +a.id > +b.id)
		.map( farmacia => {
			let row = `
			<tr>
				<td>${farmacia.id}</td>
				<td>${farmacia.titulo}</td>
				<td>${farmacia.direccion}</td>
				<td></td>
			</tr>	
			`
			return row
		}).join("")
		
		tbody.innerHTML = filas		
		

	}
})

/*
	get: para traer uno o mas registros
	post: para insertar un registro
	put: para actualizar un registro
	delete: para eliminar un registro

	open
		1. Verbo
		2. Direccion URL
		3. Sincronia
*/
objHttp.open("get", "http://javascript.tibajodemanda.com/farmacia", true)
objHttp.send()


////// PARA GUARDAR

btnGuardar.addEventListener('click', e => {
	e.preventDefault()

	const titulo = inputTitulo.value
	const direccion = inputDireccion.value

	const formData = new FormData()
	formData.append('titulo', titulo)
	formData.append('direccion', direccion)

	const objxml = new XMLHttpRequest()

	objxml.addEventListener('readystatechange', respuesta => {
		const obj = respuesta.currentTarget

		if(obj.readyState == 4 && obj.status == 201){
			//alert('Se inserto')
			inputTitulo.value = ''
			inputDireccion.value = ''
		}
	})

	objxml.open('post', 'http://javascript.tibajodemanda.com/farmacia', true)
	objxml.send(formData)
})