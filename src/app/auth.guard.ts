import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const id = localStorage.getItem('id')

  if(id === '1234'){
    return true;
  }

    return false
};
