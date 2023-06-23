import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/model/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  ngOnInit() {
  }

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
