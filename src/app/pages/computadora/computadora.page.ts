import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-computadora',
  templateUrl: './computadora.page.html',
  styleUrls: ['./computadora.page.scss'],
})
export class ComputadoraPage implements OnInit {

  personas: Person[] = [];
  nuevaPersona: Person = { nombre: '', apellido: '', edad: 0, estado: 'activo' };

  agregarPersona() {
    this.personas.push(this.nuevaPersona);
    this.nuevaPersona = { nombre: '', apellido: '', edad: 0, estado: 'activo' };
  };


  

  constructor() { }

  ngOnInit() {
  }

}
