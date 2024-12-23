import { CommonModule } from '@angular/common'; // Importar CommonModule
// Importar CommonModule para *ngIf
/*import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Component } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { CirculoComponent } from '../comp/circulo/circulo.component';
import { TrianguloComponent } from '../comp/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // Se agregó
  imports: [
    IonHeader,
    IonToolbar, IonLabel,
    IonItem,
    IonList,
    IonTitle,
    IonSelect,
    IonSelectOption,
    IonContent,
    CirculoComponent,
    TrianguloComponent,
  ],
})
export class HomePage {

  //figuraSeleccionada: string | null = null; // Variable controlada por ion-select
  figuraSeleccionada: string = 'circulo';
  constructor() {}

  handleChange($event: any): void {
    this.figuraSeleccionada = $event.detail.value; // Actualiza la selección
    console.log('Figura seleccionada:', this.figuraSeleccionada);
  }
}
*/
import { Component } from '@angular/core';
import {
  FormsModule,
} from '@angular/forms'; // Importar FormsModule para [(ngModel)]

import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { CirculoComponent } from '../comp/circulo/circulo.component';
import { TrianguloComponent } from '../comp/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Necesario para *ngIf
    FormsModule, // Necesario para [(ngModel)]
    IonHeader,
    IonToolbar,
    IonItem,
    IonTitle,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonContent,
    CirculoComponent,
    TrianguloComponent,
  ],
})
export class HomePage {
  figuraSeleccionada: string = 'circulo'; // Valor predeterminado

  constructor() { }

  handleChange($event: any): void {
    this.figuraSeleccionada = $event.detail.value; // Actualiza la selección
    console.log('Figura seleccionada:', this.figuraSeleccionada);
  }
}
