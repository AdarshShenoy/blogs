import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from '../models/register-request.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: RegisterRequest;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
    this.model={
      email:'',
      password:''
    }
  }

  onFormSubmit():void{
    console.log(this.model);
    this.authService.register(this.model)
    .subscribe({
      next: _ => {
        alert("Registered Successfully");
        this.router.navigateByUrl('/');
      },
      error: (error)=> console.log(error)
    })
    
  }
}
