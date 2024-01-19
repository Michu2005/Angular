import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeSonCComponent } from './employee-son-c/employee-son-c.component';
import { EmployeeCharactersComponent } from './employee-characters/employee-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonCComponent,
    EmployeeCharactersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
