import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users = [
    {name: 'Usuario 1', cpf: '123', age: '20'},
    {name: 'Usuario 2', cpf: '124', age: '20'},
    {name: 'Usuario 3', cpf: '125', age: '20'},
  ]
  constructor() {}

  ngOnInit() {}
}
