import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-ng-class.component.html',
  styleUrl: './diretiva-ng-class.component.scss'
})
export class DiretivaNgClassComponent {
  favoritarIcone: boolean = false;

  preencherIcone(){
    this.favoritarIcone = !this.favoritarIcone;
  }
}
