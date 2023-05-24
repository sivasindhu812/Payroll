import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
//import {tap} from 'rxjs/internal/operators';
import {tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import * as _ from 'lodash';
class Leave {
  leaveCode: number;
  employeeId: number;
  leaveType: string;
  fromDate: string;
  toDate: string;
  leaveReason: string;
  leaveStatus: string;
  constructor(leaveCode: number, employeeId: number, leaveType: string, fromDate: string, toDate: string, leaveReason: string, leaveStatus: string)
  {
    this.leaveCode = leaveCode;
    this.employeeId = employeeId;
    this.leaveType = leaveType;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.leaveReason = leaveReason;
    this.leaveStatus = leaveStatus;
  }
}

@Component({
  selector: 'app-editleave',
  templateUrl: './editleave.component.html',
  styleUrls: ['./editleave.component.css']
})
export class EditleaveComponent implements OnInit {
  leaves?: Observable<Leave[]>;
  leave?: Leave;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.leaves = this.http
      .get<Leave[]>("https://localhost:44348/api/leaves")
      .pipe(map(data => _.values(data)))
      .pipe(tap(console.log));
  }
  handleError(error: HttpErrorResponse) {
    console.log("Error Error Error Here");
    return throwError(error);
  }
  type = ["Privilege Leave", "Maternity Leave", "Leave Without Pay", "Relocation Leave"];
  Reason = ["Sick","Vacation","Marriage-Self","Out of Satation","Festival","others"];
  model = new Leave(0,0,'','','','','Approved');
  save() {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.model);
    console.log(body)
    this.http.post<any>("https://localhost:44348/api/leaves", body, { 'headers': headers }).subscribe();
    alert("Leave was approved");
    window.location.reload();
  }
}
