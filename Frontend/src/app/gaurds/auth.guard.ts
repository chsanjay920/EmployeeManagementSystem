import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: any = inject(AuthenticationService);
  const router:any = inject(Router);
  
  const data = JSON.parse(localStorage.getItem('logintoken')!);
  if (data!= null && data.role != "HR_MANAGMENT") {
    return true;
  }
  else if (data!= null && data.role == "HR_MANAGMENT") {
    return true;
  }
   else {
    router.navigateByUrl('/login')
    return false;
  }
};
