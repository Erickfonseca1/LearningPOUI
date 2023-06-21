import { Component } from '@angular/core';
import {User} from "../shared/model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';
  user: User;
  users: Array<User>

  //Declaração do construtor para os atributos da classe
  constructor() {
    this.user = new User();
    this.users = new Array<User>()
  }

  // Declaração da função utilizada no botão presente no html
  insertUser() {
    this.users.push(this.user)
    this.user = new User()
  }
}
