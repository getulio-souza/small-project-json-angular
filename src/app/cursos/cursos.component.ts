import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Curso } from '../interfaces/cursos';
import { AppService } from '../services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  standalone: true,
  imports:[CommonModule, HttpClientModule]
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private http: HttpClient, private cursoService: AppService){}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe((data)=> {
      // console.log(data)
      this.cursos = data.record.cursos;
    }, (error: any)=> {
      console.error('Erro ao carregar os cursos:', error); 
    })
  }
}


// https://jsonbin.io/app/bins#! - onde 