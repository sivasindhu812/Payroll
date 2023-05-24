/*import { Component } from '@angular/core';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {

} */


import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
//import { Admin } from './admin';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { AdminsearchService } from '../adminsearch.service';




export class Admin {
  adminId: number;
  adminName: string;
  adminEmail: string;
  adminPassword: string;
  
  constructor(adminId: number,adminName: string, adminEmail: string, adminPassword:string)
  {
    this.adminId = adminId;
    this.adminName = adminName;
    this.adminEmail = adminEmail;
    this.adminPassword = adminPassword;
  }
}

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})

export class AddadminComponent implements OnInit {
  admins?: Observable<Admin[]>;
  //admin?: Admin;
  adminData:any;
  companyName:any;
  adminId:any;
  adminName: any;
  admin: Admin[] = [];
  constructor(private http:HttpClient, public rs: AdminsearchService) { }
  
  ngOnInit(): void 
  {
    this.rs.getAdmin().subscribe((response) => {
      this.admin = response;
    });
    this.admins = this.http
            .get<Admin[]>("https://localhost:44348/api/admins")
            .pipe(map(data => _.values(data)))
            .pipe(tap(console.log));
            this.Search();
  }

  handleError(error: HttpErrorResponse)
  {
    console.log("Error Error Error Here");
    return throwError(error);
  }

  Search()
  {
    if(this.adminName=="")
    {
      this.ngOnInit();
    }
    else
    {              
      this.adminData=this.adminData.filter((res: { adminName: string; })=>
      {             
        return res.adminName.toLocaleLowerCase().match(this.adminName?.toLocaleLowerCase());              
      });              
    }              
  }
//brans=["Los Angeles","Azlo","Axos","Alden","Boston","Galway","Chevy","Suntrust","Logan Circle"];
  model = new Admin( 0,'','','');
  save()
  {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(this.model);
    console.log(body)
    this.http.post<any>("https://localhost:44348/api/admins", body,{'headers':headers}).subscribe();
    alert("Admin Added");
    window.location.reload();
  }
            
            
}
