import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FuncionesService {
  constructor() {}

  saludarPersona(nombre: string): string {
    return `Buenas tardes, ${nombre}`;
  }

  multiplicarNumeros(num1: number, num2: number): number {
    return num1 * num2;
  }

  esMayorQue18(numero: number): boolean {
    return numero > 18;
  }

}
