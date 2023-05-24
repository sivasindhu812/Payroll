import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EmployeepageComponent } from './employeepage/employeepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { HomeComponent } from './home/home.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeaveComponent } from './leave/leave.component';
import { ManageComponent } from './manage/manage.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { EmpreportComponent } from './empreport/empreport.component';
import { LeavereportComponent } from './leavereport/leavereport.component';
import { GsalaryComponent } from './gsalary/gsalary.component';
import { AdminpwdComponent } from './adminpwd/adminpwd.component';
import { EmpleavereportComponent } from './empleavereport/empleavereport.component';
import { EditleaveComponent } from './editleave/editleave.component';
import { EmployeepwdComponent } from './employeepwd/employeepwd.component';
import { SalaryreportComponent } from './salaryreport/salaryreport.component';

const routes: Routes = [
  {path:"welcomepage", component: WelcomepageComponent},
  {path:"adminpage", component: AdminpageComponent},
  {path:"employeepage", component: EmployeepageComponent},
  {path:"adminlogin", component: AdminloginComponent},
  {path:"employeelogin", component: EmployeeloginComponent},
  {path:"Home", component: HomeComponent},
  {path:"addadmin", component: AddadminComponent},
  {path:"addingemployee", component: AddEmployeeComponent},
  {path:"leave", component: LeaveComponent},
  {path:"manage", component: ManageComponent},
  {path:"allowance", component: AllowanceComponent},
  {path:"empreport",component: EmpreportComponent},
  {path: "leavereport",component: LeavereportComponent},
  {path:"gsalary", component: GsalaryComponent},
  {path:"adminpwd", component: AdminpwdComponent},
  {path:"empleavereport", component: EmpleavereportComponent},
  {path:"editleave", component: EditleaveComponent},
  {path:"employeepwd", component: EmployeepwdComponent},
  {path:"salaryreport", component: SalaryreportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [WelcomepageComponent, AdminpageComponent, EmployeepageComponent, 
  EmployeeloginComponent, HomeComponent, AddadminComponent, AddEmployeeComponent, AdminloginComponent,
LeaveComponent, ManageComponent, AllowanceComponent, EmpreportComponent, LeavereportComponent,
 GsalaryComponent, AdminpwdComponent, EmpleavereportComponent, EditleaveComponent, EmployeepwdComponent,
SalaryreportComponent]
