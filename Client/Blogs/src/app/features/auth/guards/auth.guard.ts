import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const authService = inject(AuthService)
  const router = inject(Router);
  const user = authService.getUser()

  //Check for JWT Token 
  let token = cookieService.get('Authorization');

  if(token && user){
    token = token.replace('Bearer ', '')
    const decodedToken: any = jwt_decode(token);

    const expirationDate = decodedToken.exp *1000;
    const currentTime = new Date().getTime();

    if(expirationDate < currentTime){
      authService.logout();
      //redirect them back to the state they were at
      return router.createUrlTree([''], {queryParams: {returnUrl: state.url}})
      
    } else {
      if(user.roles.includes('Writer')){
        return true;
      }
      else{
        alert('Unauthorized, You need to be an Admin');
        authService.logout();
        return router.createUrlTree(['/login'], {queryParams: {returnUrl: state.url}})
      }
    }

  }else{
    //Logout
    authService.logout();
    return router.createUrlTree(['/login'], {queryParams: {returnUrl: state.url}})
  }
};
