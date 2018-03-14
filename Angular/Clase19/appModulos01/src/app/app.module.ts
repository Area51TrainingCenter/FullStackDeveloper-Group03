import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { EdicionCursosComponent } from './edicion-cursos/edicion-cursos.component';
import { CursoComponent } from './curso/curso.component';
import { NuevoCursosComponent } from './nuevo-cursos/nuevo-cursos.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { EdicionAlumnosComponent } from './edicion-alumnos/edicion-alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { NuevoAlumnosComponent } from './nuevo-alumnos/nuevo-alumnos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';


const rutas: Routes = [
  {path: "", component: LoginComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "cursos", children: [
    {path: "", component: ListadoCursosComponent},
    {path: "edicion", component: EdicionCursosComponent},
    {path: "nuevo", component: NuevoCursosComponent}
  ]},
  {path: "alumnos", children: [
    {path: "", component: ListadoAlumnosComponent},
    {path: "edicion", component: EdicionAlumnosComponent},
    {path: "nuevo", component: NuevoAlumnosComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    ListadoCursosComponent,
    EdicionCursosComponent,
    CursoComponent,
    NuevoCursosComponent,
    ListadoAlumnosComponent,
    EdicionAlumnosComponent,
    AlumnoComponent,
    NuevoAlumnosComponent,
    LoginComponent,
    HomeComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
