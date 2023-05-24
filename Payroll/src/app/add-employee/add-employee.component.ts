import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';


class Employee {
  employeeId: number;
  employeeFirstName: string;
  employeeLastName: string;
  employeeEmail: string;
  employeeMobile: string;
  employeePassword: string;
  employeeAddress: string;
  employeeDOJ: string;
  employeeSalary: string;
  employeeDesignation: string;
  adminId: number;
  
  constructor(employeeId: number, employeeFirstName: string, employeeLastName: string, employeeEmail: string, employeeMobile: string, employeePassword: string,
    employeeAddress: string, employeeDOJ: string, employeeSalary: string, employeeDesignation: string, adminId: number)
  {
    this.employeeId = employeeId;
    this.employeeFirstName = employeeFirstName;
    this.employeeLastName = employeeLastName;
    this.employeeEmail = employeeEmail;
    this.employeeMobile = employeeMobile;
    this.employeePassword = employeePassword;
    this.employeeAddress = employeeAddress;
    this.employeeDOJ = employeeDOJ;
    this.employeeSalary = employeeSalary;
    this.employeeDesignation = employeeDesignation;
    this.adminId = adminId;
  }
}


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})


export class AddEmployeeComponent implements OnInit {

  employees?: Observable<Employee[]>;
  employee?: Employee;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.employees = this.http
            .get<Employee[]>("https://localhost:44348/api/employees")
            .pipe(map(data => _.values(data)))
            .pipe(tap(console.log));
          }
          handleError(error: HttpErrorResponse){
            console.log("Error Error Error Here");
            return throwError(error);
            }
            //brans=["Los Angeles","Azlo","Axos","Alden","Boston","Galway","Chevy","Suntrust","Logan Circle"];
            model = new Employee( 0,'','','','','','','','','',0);
            save()
            {
              const headers = { 'content-type': 'application/json'}
              const body=JSON.stringify(this.model);
              console.log(body)
              this.http.post<any>("https://localhost:44348/api/employees", body,{'headers':headers}).subscribe();
              alert("Employee Added");
              window.location.reload();
            }

            

}
