import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

/* export const authGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService)
  return authService.getAuth();
};
 */


export const authGuard: CanMatchFn = (route, state) => {
  const authService=inject(AuthService)
  return authService.getAuth();
}