
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

} */

//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
//import {tap} from 'rxjs/internal/operators';
import {tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
//import { Branches } from '../extra';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

export class ManageComponent implements OnInit {
  //favoriteSeason: string;
  //seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
 data:any;
 constructor(private http: HttpClient) {
   this.data=[];
 }
 ngOnInit(): void {
   // this.http.get<any[]>('https://localhost:5001/api/UserClaim')
   //   .subscribe(response => {
   //     this.data = response;
   //   });
   this.getManagelist()
 }
 getManagelist()
 {
   this.http.get('https://localhost:44348/api/leaves')
   .subscribe((result:any)=>
   {
     this.data=result;
   });
 }
}
