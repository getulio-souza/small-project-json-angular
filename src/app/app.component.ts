import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { CommonModule } from '@angular/common';
import { CursosComponent } from "./cursos/cursos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CursosComponent]
})

export class AppComponent implements OnInit{
  title= "teste de titulo"

  constructor(private http: HttpClient, private service: AppService){}

   ngOnInit(): void {
  }
}
