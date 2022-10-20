import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule} from '@angular/common/http';
import { ContactosComponent } from './componentes/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
