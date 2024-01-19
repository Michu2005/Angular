import { Component } from '@angular/core';
import { Employe } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista Empleados';
  employes:Employe[]=[
    new Employe("Michelle", "Vaca", "Atención a Cliente", 450),
    new Employe("Patricia", "Moreira", "Presidente", 2800),
    new Employe("Viviana", "Eslava", "Call Center", 500),
  ];

  addEmployee(){
    let myEmployee = new Employe(this.nameChart, this.chartLastName, this.chargeChart, this.salaryChart);
    this.employes.push(myEmployee);
  }

  nameChart:string="";
  chartLastName:string="";
  chargeChart:string="";
  salaryChart:number=0;

}
