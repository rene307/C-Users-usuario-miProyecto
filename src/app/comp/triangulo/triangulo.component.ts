import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Importa CommonModule para el pipe `number`
    FormsModule, // Necesario para [(ngModel)]
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
  ],
})
export class TrianguloComponent {
  ladoA: number | null = null; // Lado A
  ladoB: number | null = null; // Lado B
  ladoC: number | null = null; // Lado C
  perimetro: number | null = null; // Resultado del cálculo

  calcularPerimetro(): void {
    if (
      this.ladoA !== null &&
      this.ladoA > 0 &&
      this.ladoB !== null &&
      this.ladoB > 0 &&
      this.ladoC !== null &&
      this.ladoC > 0
    ) {
      this.perimetro = this.ladoA + this.ladoB + this.ladoC;
    } else {
      alert('Por favor, ingrese valores válidos para los tres lados.');
      this.perimetro = null;
    }
  }
}
