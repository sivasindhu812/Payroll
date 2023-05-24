/*import { Component } from '@angular/core';

@Component({
  selector: 'app-salaryreport',
  templateUrl: './salaryreport.component.html',
  styleUrls: ['./salaryreport.component.css']
})
export class SalaryreportComponent {

}*/


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salaryreport',
  templateUrl: './salaryreport.component.html',
  styleUrls: ['./salaryreport.component.css']
})
export class SalaryreportComponent implements OnInit {
 data:any;
 constructor(private http: HttpClient) {
   this.data=[];
 }
 ngOnInit(): void {
   /* this.http.get<any[]>('https://localhost:44348/api/employees')
      .subscribe(response => {
        this.data = response;
      });*/
   this.getSalaryreport()
 }
 getSalaryreport()
 {
   this.http.get('https://localhost:44348/api/salaries')
   .subscribe((result:any)=>
   {
     this.data=result;
   });
 }
}

