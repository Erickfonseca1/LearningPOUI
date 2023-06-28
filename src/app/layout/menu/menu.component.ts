import { Component } from '@angular/core';
import {PoMenuItem} from "@po-ui/ng-components";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItemSelected: string

  constructor() {
    this.menuItemSelected= 'Title'
  }

  menus: Array<PoMenuItem> = [
    {label: 'Register User', action: this.printMenuAction.bind(this), icon: 'po-icon-user', shortLabel: 'Register'}
  ]

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label
  }
}
