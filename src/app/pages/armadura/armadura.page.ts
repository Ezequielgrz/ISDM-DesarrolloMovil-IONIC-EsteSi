import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/interfaces/personas';

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

  constructor() { }

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
    return edad>=21?"Es mayor de edad":"No es mayor de edad";
  }

  ngOnInit() {
    this.recorrerLista()
  }

}
