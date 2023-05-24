import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EmployeepageComponent } from './employeepage/employeepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { HomeComponent } from './home/home.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { LeaveComponent } from './leave/leave.component';
import { ManageComponent } from './manage/manage.component';
import { EmpreportComponent } from './empreport/empreport.component';
import { LeavereportComponent } from './leavereport/leavereport.component';
import { AuthService } from './auth.service';
import { Auth1Service } from './auth1.service';
import { GsalaryComponent } from './gsalary/gsalary.component';
import { PayslipComponent } from './payslip/payslip.component';
import { EmpleavereportComponent } from './empleavereport/empleavereport.component';
import { EditleaveComponent } from './editleave/editleave.component';
import { EmployeepwdComponent } from './employeepwd/employeepwd.component';
import { SalaryreportComponent } from './salaryreport/salaryreport.component';
import { AdminsearchService } from './adminsearch.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    RoutingComponent,
    AdminpageComponent,
    EmployeepageComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    HomeComponent,
    AddadminComponent,
    AddEmployeeComponent,
    AllowanceComponent,
    LeaveComponent,
    ManageComponent,
    EmpreportComponent,
    LeavereportComponent,
    GsalaryComponent,
    PayslipComponent,
    EmpleavereportComponent,
    EditleaveComponent,
    EmployeepwdComponent,
    SalaryreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,Auth1Service, Auth1Service,AdminsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
