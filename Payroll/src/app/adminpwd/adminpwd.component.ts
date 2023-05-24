import { Component } from '@angular/core';

@Component({
  selector: 'app-adminpwd',
  templateUrl: './adminpwd.component.html',
  styleUrls: ['./adminpwd.component.css']
})

export class AdminpwdComponent {
  save()
  {
    alert("Password has been changed Successfully");
    window.location.reload();
  }
}
