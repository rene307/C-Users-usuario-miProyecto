import { CommonModule } from '@angular/common';
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
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonList,
    FormsModule,
    IonInput,
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonItem,
    IonCard,
    IonCardContent,
    IonLabel,
  ],
})

export class CirculoComponent {
  radio: number | null = null;
  perimetro: number | null = null;

  calcular(): void {
    if (this.radio !== null && this.radio > 0) {
      this.perimetro = this.calcularPerimetro(this.radio); // Llamada a la función
    } else {
      alert('Por favor, ingrese un radio válido mayor a 0.');
      this.perimetro = null;
    }
  }

  // Definición de la función calcularPerimetro
  private calcularPerimetro(radio: number): number {
    return 2 * Math.PI * radio;
  }
}


