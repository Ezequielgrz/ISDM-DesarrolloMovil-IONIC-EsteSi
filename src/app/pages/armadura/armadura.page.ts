import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/interfaces/personas';
import { FuncionesService } from 'src/app/funciones.services'; 


@Component({
  selector: 'app-armadura',
  templateUrl: './armadura.page.html',
  styleUrls: ['./armadura.page.scss'],
})
export class ArmaduraPage implements OnInit {

  objPersona : Personas | undefined;

  listaPersonas : Personas [] = [
    {nombre:"Ezequiel", apellido:"Mamani", edad:22, estado:true},
    {nombre:"Leandro", apellido: "Castillo", edad:18,estado:true}
  ];

  constructor(private funcionesService: FuncionesService) {}

  recorrerLista():void{
    this.listaPersonas.forEach(persona=>{
      console.log("nombre: "+persona.nombre);
      console.log("apellido: "+persona.apellido);
      console.log("edad: "+persona.edad);
      console.log("estado: "+persona.estado);
      console.log("---------------------------");
    })
  }
  esMayorEdad(edad:number):string{
    return edad>=18?"Es mayor de edad":"No es mayor de edad";
  }


  // a. Saludo con nombre
  saludoTardes(nombre: string): string {
    return `Buenas tardes, ${nombre}`;
  }
    
  // b. Multiplicación de dos números
  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }
    
  // c. Suma de 3 números
  sumaTresNumeros(num1: number, num2: number, num3: number): number {
    return num1 + num2 + num3;
  }
  
  // d. Verificar si un número es mayor a 18
  esMayorQue18(numero: number): boolean {
    return numero > 18;
  }
    
  saludarPersonas(personas: Personas[]): void {
    personas.forEach((persona) => {
      console.log(`Buenas tardes, ${persona.nombre}`);
    });
  }
    
  mostrarMayoresDeEdad(personas: Personas[]): void {
    personas.forEach((persona) => {
      if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad.`);
      }
    })
  };
    


  ngOnInit() {
    this.recorrerLista()
    console.log(this.esMayorEdad(15))
    console.log(this.saludoTardes('Ezequiel'))
    console.log(this.sumaTresNumeros(5,10,15))
    console.log(this.esMayorQue18(20))
    this.saludarPersonas(this.listaPersonas)
    this.mostrarMayoresDeEdad(this.listaPersonas)
  }

}
