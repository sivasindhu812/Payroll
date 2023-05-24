import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empreport',
  templateUrl: './empreport.component.html',
  styleUrls: ['./empreport.component.css']
})
export class EmpreportComponent implements OnInit {
 data:any;
 constructor(private http: HttpClient) {
   this.data=[];
 }
 ngOnInit(): void {
   /* this.http.get<any[]>('https://localhost:44348/api/employees')
      .subscribe(response => {
        this.data = response;
      });*/
   this.getEmployeelist()
 }
 getEmployeelist()
 {
   this.http.get('https://localhost:44348/api/employees')
   .subscribe((result:any)=>
   {
     this.data=result;
   });
 }
}

