import { Component, Input } from '@angular/core';
import { Employe } from '../empleado.model';

@Component({
  selector: 'app-employee-son-c',
  templateUrl: './employee-son-c.component.html',
  styleUrls: ['./employee-son-c.component.css']
})
export class EmployeeSonCComponent {
  @Input() listEmployee:Employe;
  @Input() indice:number;
}
