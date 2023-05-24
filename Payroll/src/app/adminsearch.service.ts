import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './addadmin/addadmin.component';

@Injectable({
  providedIn: 'root'
})
export class AdminsearchService {
  adminData: any;
  adminName: any;
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getAdmin();
  }
  //url: string = "https://localhost:44348/api/admins";
  getAdmin(){
    return this.http.get<any>("https://localhost:44348/api/admins").pipe(map((res:any)=>{return res;}))
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
}
