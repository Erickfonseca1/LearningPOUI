import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {PoMenuModule, PoPageModule} from "@po-ui/ng-components";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    PoMenuModule,
    PoPageModule
  ]
})
export class LayoutModule { }
