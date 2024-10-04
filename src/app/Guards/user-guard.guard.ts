import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';

export const userGuardGuard: CanActivateFn = (route, state) => {
  let userService = inject(UserAuthService)
  let router = inject(Router)

  if (userService.isUserLoggedIn) {
    return true
  }else{
    router.navigate(['/UserLogin'])
    return false
  }
};
