import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import {  VueComponent } from './view/view.component';

const routes: Routes = [
  { path: 'employe', redirectTo: 'employe/all', pathMatch: 'full' },
  { path: 'employe/all', component: AllComponent },
  { path: 'employe/add', component: AddComponent},
  { path: 'employe/:id/edit', component: EditComponent},
  { path: 'employe/:id/view', component: VueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeRoutingModule {}
