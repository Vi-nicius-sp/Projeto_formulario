import { Component, signal } from '@angular/core';
import { FirstComponent } from "./first-component/first-component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formulario-simples');
}
