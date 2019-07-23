import { Component } from "@angular/core"
import { Usuario } from "../../Modelo/Usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]

})
export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;
 
  constructor() {
    this.usuario = new Usuario();
  }
 



  
}
