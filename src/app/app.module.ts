import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component'; // Importe o CursosComponent
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CursosComponent,
    AppComponent
  ],
  providers: [AppService],
  bootstrap: [],
})
export class AppModule { }
