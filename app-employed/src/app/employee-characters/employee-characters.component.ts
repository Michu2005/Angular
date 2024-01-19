import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-characters',
  templateUrl: './employee-characters.component.html',
  styleUrls: ['./employee-characters.component.css']
})
export class EmployeeCharactersComponent {
  @Output() employeeCharacters = new EventEmitter<string>();
}
