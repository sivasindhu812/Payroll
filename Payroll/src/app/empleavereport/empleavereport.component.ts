/*import { Component } from '@angular/core';

@Component({
  selector: 'app-empleavereport',
  templateUrl: './empleavereport.component.html',
  styleUrls: ['./empleavereport.component.css']
})
export class EmpleavereportComponent {

} */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleavereport',
  templateUrl: './empleavereport.component.html',
  styleUrls: ['./empleavereport.component.css']
})

export class EmpleavereportComponent implements OnInit {
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


