import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route,Router } from '@angular/router';
import { Auth1Service } from '../auth1.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit{
  type: string = "employeePassword";
  loginForm!: FormGroup;
    constructor(private fb:FormBuilder, private auth: Auth1Service, private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      employeeId:['', Validators.required],
      employeePassword:['', Validators.required]
    })
  }
  
/*  onLogin()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)

      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.loginForm.reset();
          this.router.navigate(['employeepage'])
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
  } */

  onLogin()
{

  this.http.get<any>("https://localhost:44348/api/employees").subscribe({

  next:(res)=>{

  const user=res.find((a:any)=>

  {

      return a.employeeId===this.loginForm.value.employeeId && a.employeePassword===this.loginForm.value.employeePassword

  });

if(user)

{

  alert("Login Successful");

  this.loginForm.reset();

  this.router.navigate(['/employeepage']);

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

  private validateallformfields(formGroup: FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf: true});
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
    if(this.username=='ushad@gmail.com' && this.password=='Usha@123'){
      //window.location.assign("admin");
      this.router.navigate(['/employeepage']);
    alert("Login Success")
  }else{
    alert("Login Failed")
  }
} 
} */


/*implements OnInit {
  type: string ="password";
loginForm!: FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private router: Router){}

  ngOnInit():void{
    this.loginForm=this.fb.group({
      employeeId:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onLogin()
  {
    if(this.loginForm.valid)
    {
        console.log(this.loginForm.value)
        
        this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message)
            this.loginForm.reset();
            this.router.navigate(['Employee'])
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
}*/
