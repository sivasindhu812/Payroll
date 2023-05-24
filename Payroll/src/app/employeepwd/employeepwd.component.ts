import { Component } from '@angular/core';

@Component({
  selector: 'app-employeepwd',
  templateUrl: './employeepwd.component.html',
  styleUrls: ['./employeepwd.component.css']
})
export class EmployeepwdComponent {
  save()
  {
    alert("Password has been changed Successfully");
    window.location.reload();
  }

}
