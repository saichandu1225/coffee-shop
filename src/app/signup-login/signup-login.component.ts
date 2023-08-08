import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  signUp:FormGroup|any
  signuser:any
  login:FormGroup|any;
  islogin:any
  routedata:any
  constructor(private router:Router,private _http:HttpClient,private fb:FormBuilder, private activatedRoute: ActivatedRoute) { 
    this.islogin=this.activatedRoute.snapshot.data['isLogin']
  }
   Signedup(signUp:FormGroup)
  {
    this.signuser=this.signUp.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.signUp.value)
    .subscribe(res=>{
      alert('You are successfully Signed in')
      this.signUp.reset();
      this.router.navigate(['login']);
    },err=>{
      alert('something is wrong')
    }
    )
  }  
  logindata(login:FormGroup){
    this._http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.password === this.login.value.password
      })
      if(user){
        alert('you are successfully logged In');
        localStorage.setItem('user',JSON.stringify(user))
        this.login.reset();
        this.router.navigate(['navbar']);
      }
      else{
        alert('User not found');
      }
    },err=>{
      alert('Something was wrong')
    })
  }
  ngOnInit(){
    this.signUp= this.fb.group({
      fname: ["",Validators.required],
      lname: [],
      email: ["",Validators.required],
      Mobileno: ["",Validators.required],
      password: ['',Validators.required]
    })
    this.login= this.fb.group({
      fname : ['',Validators.required],
      password :['',Validators.required]
    })  
    
  }
  loggedIn(){
    this.router.navigate(['login'])
  }
  signedUp(){
      this.router.navigate(['signup'])
  }
}
