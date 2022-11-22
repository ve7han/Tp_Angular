import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { VueComponent } from './view/view.component';


@NgModule({
  declarations: [
    AllComponent,
    AddComponent,
    EditComponent,
    VueComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeModule { }
