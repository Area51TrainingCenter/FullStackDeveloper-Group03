import { Component, OnInit, Input } from '@angular/core';
import { IAlumno } from 'app/i-alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  @Input() alumno: IAlumno

  constructor() { }

  ngOnInit() {
  }

}
