import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from '../models/login-request.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: LoginRequest;

  constructor(private authService: AuthService, private cookieService: CookieService,
    private router: Router){
    this.model={
      email:'',
      password:''
    }
  }

  onFormSubmit():void {
    this.authService.login(this.model)
    .subscribe({
      next: (response) => {
        //set Auth Cookie
        this.cookieService.set('Authorization', `Bearer ${response.token}`,
        undefined, '/', undefined, true, 'Strict');

        //Set User
        this.authService.setUser({
          email: response.email,
          roles: response.roles
        });
        //Redirect to home page
        this.router.navigateByUrl('/');
      },
      error : () => alert("Invalid Username or Password")
    })
  }
}
