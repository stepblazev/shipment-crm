import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (true) {
    router.navigate(['auth']);
    return false;
  }

  return true;
};
