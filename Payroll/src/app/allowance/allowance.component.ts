/*import { Component } from '@angular/core';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})
export class AllowanceComponent {

} */

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
//import {tap} from 'rxjs/internal/operators';
import {tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
//import { Customers } from '../extra';
import * as _ from 'lodash';
class Allowance {
  allowanceId: number;
  employeeId: number;
  allowanceType: string;
  allowanceAmount: string;

  constructor(allowanceId: number, employeeId: number, allowanceType: string, allowanceAmount: string)
  {
    this.allowanceId = allowanceId;
    this.employeeId = employeeId;
    this.allowanceType = allowanceType;
    this.allowanceAmount = allowanceAmount;
  }
}

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})

export class AllowanceComponent implements OnInit {
  allowances?: Observable<Allowance[]>;
  allowance?: Allowance;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.allowances = this.http
      .get<Allowance[]>("https://localhost:44348/api/allowances")
      .pipe(map(data => _.values(data)))
      .pipe(tap(console.log));
  }
  handleError(error: HttpErrorResponse) {
    console.log("Error Error Error Here");
    return throwError(error);
  }
  type = ["Privilege Leave", "Maternity Leave", "Leave Without Pay", "Relocation Leave"];
  Reason = ["Sick","Vacation","Marriage-Self","Out of Satation","Festival","others"];
  model = new Allowance(0,0,'','');
  save() {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.model);
    console.log(body)
    this.http.post<any>("https://localhost:44348/api/allowances", body, { 'headers': headers }).subscribe();
    alert("Leave Succecfully Applied");
    window.location.reload();
  }
}