import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  // Obtém o valor de autorização do administrador do sessionStorage

  const autorizado = sessionStorage.getItem('adminAutorizado');
  // Verifica se o usuário está autorizado como administrador

  if (autorizado === 'true') {
    return true;
  }

  return router.createUrlTree(['/admin-login']);
  // Redireciona para a página de login do administrador se não estiver autorizado
};