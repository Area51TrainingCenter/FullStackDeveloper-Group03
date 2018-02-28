import { Component, OnInit } from '@angular/core';
import { CursoService } from 'app/curso.service';
import { ICurso } from 'app/i-curso';
import { NgForm } from '@angular/forms'
import { IAlumno } from 'app/i-alumno';
import { AlumnoService } from 'app/alumno.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private listaCursos: Array<ICurso>

  alumno: IAlumno = {nombreCompleto: "", edad: 0, idCurso: 0 }

  constructor(private cursoService: CursoService, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.listaCursos = this.cursoService.listado()
  }

  guardar() {
    this.alumnoService.insertar(this.alumno)
  }

}
