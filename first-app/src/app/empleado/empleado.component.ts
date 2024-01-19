import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color: cadetblue;}"]
})
export class EmpleadoComponent {
  name = "Michelle";
  lastName = "Vaca";
  age = 18;
  company = "Corp Superior";

  /*getAge(){
    return this.age;
  }*/

  habilitarCuadro=false;
  userRegist=false;
  registTxt="";

  getRegUser(){
    this.userRegist=false;
  }

  setUsuaurioRegis(event:Event){
    
    if((<HTMLInputElement>event.target).value=="si"){
      this.registTxt="El ususario se acaba de registrar";
    }else{
      this.registTxt="No hay usuarios registrados";
    }
  }
}
