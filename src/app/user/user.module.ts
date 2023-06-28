import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from "@angular/forms";
import {PoDynamicModule, PoModule} from "@po-ui/ng-components";
import { UserListComponent } from './user-list/user-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    BrowserAnimationsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PoDynamicModule,
    PoModule,
    BrowserAnimationsModule
  ]
})
export class UserModule { }
