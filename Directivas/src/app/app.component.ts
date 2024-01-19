import { Component } from '@angular/core';


interface Cuerpo {
  titulo: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  message="";
  registered=false;
  name:string="";
  lastName:string="";
  charge:string="";
  entradas: Cuerpo [];

  constructor(){

    this.entradas=[
      {titulo:"Phyton cada dia más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JS cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"}
    ]

  }

  registerUser(){
    this.registered=true;

    this.message="Usuario registrado con éxito";
  }
}
