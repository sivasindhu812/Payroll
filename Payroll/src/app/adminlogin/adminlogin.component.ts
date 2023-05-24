import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route,Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login1';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  type: string ="adminPassword";
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private router: Router, private http: HttpClient){}
  ngOnInit():void{
    this.loginForm=this.fb.group({
      adminId:['',[Validators.required]],
      adminPassword:['',[Validators.required]]
    })
  }
  /*onLogin()
  {
    if(this.loginForm.valid)
    {
        console.log(this.loginForm.value)

        this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message)
            this.loginForm.reset();
            this.router.navigate(['adminpage']);
            window.location.reload();
          },

          error:(err)=>{
            alert(err?.error.message)
          }
        })
    }
    else{
        this.validateallformfields(this.loginForm);
        alert("Your form is invalid! ");
    }
  }*/

onLogin()
{

  this.http.get<any>("https://localhost:44348/api/admins").subscribe({

    next:(res)=>{

    const user=res.find((a:any)=>

    {

      return a.adminId===this.loginForm.value.adminId && a.adminPassword===this.loginForm.value.adminPassword

      });

      if(user)

      {

        alert("Login Successful");

        this.loginForm.reset();

        this.router.navigate(['/adminpage']);

      }

  else{

        alert("Login Not Successful")

      }

},

  error:()=>{

  alert("Something is wrong")

  }

})

}
  private validateallformfields(formGroup:FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateallformfields(control)
      }
    })
  }
}
/*implements OnInit{
  username:any
  password:any
  ngOnInit(): void {
  }
  constructor(private router:Router) {}
  login(){
    if(this.username=='admin' && this.password=='admin123'){
      //window.location.assign("admin");
      this.router.navigate(['/adminpage']);
    alert("Login Success")
  }else{
    alert("Login Failed")
  }
} 
}*/

