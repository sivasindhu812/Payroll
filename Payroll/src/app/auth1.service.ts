import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {
  private baseUrl:string = "https://localhost:44348/api/employees/";
  constructor(private http: HttpClient) { }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }

}
