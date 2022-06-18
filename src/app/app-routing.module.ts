import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './Content/add-employee/add-employee.component';
import { AllEmployeesComponent } from './Content/all-employees/all-employees.component';
import { GetDetailsComponent } from './Content/get-details/get-details.component';
import { NotFoundComponent } from './Content/not-found/not-found.component';

const routes: Routes = [
  {path: '',component: AllEmployeesComponent},
  {path: 'home',component: AllEmployeesComponent},
  {path: 'addEmployee',component:AddEmployeeComponent },
  {path: 'getDetails/:id',component: GetDetailsComponent},
  {path: '**',component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbModalModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
