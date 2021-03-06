import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { ListadoCursosComponent } from "app/listado-cursos/listado-cursos.component";
import { EdicionCursosComponent } from "app/edicion-cursos/edicion-cursos.component";
import { NuevoCursosComponent } from "app/nuevo-cursos/nuevo-cursos.component";
import { ListadoAlumnosComponent } from "app/listado-alumnos/listado-alumnos.component";
import { EdicionAlumnosComponent } from "app/edicion-alumnos/edicion-alumnos.component";
import { NuevoAlumnosComponent } from "app/nuevo-alumnos/nuevo-alumnos.component";
import { CursoComponent } from "app/curso/curso.component";
import { AlumnoComponent } from "app/alumno/alumno.component";
import { LoginComponent } from "app/nucleo/login/login.component";
import { HomeComponent } from "app/nucleo/home/home.component";


const rutas: Routes = [
    { path: "", component: LoginComponent, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    {
        path: "cursos", children: [
            { path: "", component: ListadoCursosComponent },
            { path: "edicion", component: EdicionCursosComponent },
            { path: "nuevo", component: NuevoCursosComponent }
        ]
    },
    {
        path: "alumnos", children: [
            { path: "", component: ListadoAlumnosComponent },
            { path: "edicion", component: EdicionAlumnosComponent },
            { path: "nuevo", component: NuevoAlumnosComponent }
        ]
    }
]

@NgModule({
    declarations: [
        ListadoCursosComponent,
        EdicionCursosComponent,
        CursoComponent,
        NuevoCursosComponent,
        ListadoAlumnosComponent,
        EdicionAlumnosComponent,
        AlumnoComponent,
        NuevoAlumnosComponent
    ],
    imports : [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }