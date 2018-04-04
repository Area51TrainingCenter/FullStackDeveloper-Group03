import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  avance: number = 0
  temporizador: number

  grupoForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.temporizador = setInterval(()=>{
      if(this.avance + 15 > 100) {
        this.avance = 100
        clearInterval(this.temporizador)
      } else {
        this.avance += 15
      }
      
    }, 1000)

    this.grupoForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email])
    })

  }

}
