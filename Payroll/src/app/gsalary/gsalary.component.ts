
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-gsalary',
  templateUrl: './gsalary.component.html',
  styleUrls: ['./gsalary.component.css']
})
export class GsalaryComponent {

} */

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


class Salary {
  salaryId: number;
  employeeId: number;
  basicSalary: string;
  hra: string;
  da: string;
  tax: string;
  netSalary: string;
  pf: string;
  payDate: string;
  
  constructor(salaryId: number, employeeId: number, basicSalary: string, hra: string, da: string, tax: string, netSalary: string,
    pf: string, payDate: string)
  {
    this.salaryId = salaryId;
    this.employeeId = employeeId;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.netSalary = netSalary;
    this.pf = pf;
    this.payDate = payDate;
  }
}


@Component({
  selector: 'app-gsalary',
  templateUrl: './gsalary.component.html',
  styleUrls: ['./gsalary.component.css']
})


export class GsalaryComponent implements OnInit {

  salaries?: Observable<Salary[]>;
  salary?: Salary;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.salaries = this.http
            .get<Salary[]>("https://localhost:44348/api/salaries")
            .pipe(map(data => _.values(data)))
            .pipe(tap(console.log));
          }
          handleError(error: HttpErrorResponse){
            console.log("Error Error Error Here");
            return throwError(error);
            }
            //brans=["Los Angeles","Azlo","Axos","Alden","Boston","Galway","Chevy","Suntrust","Logan Circle"];
            model = new Salary( 0,0,'','','','','','','',);
            save()
            {
              const headers = { 'content-type': 'application/json'}
              const body=JSON.stringify(this.model);
              console.log(body)
              this.http.post<any>("https://localhost:44348/api/salaries", body,{'headers':headers}).subscribe();
              alert("Salary Generated");
              window.location.reload();
            }

            

}
