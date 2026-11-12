import { Routes } from '@angular/router';

import { Home } from './home/home';
import { ComoBaixar } from './como-baixar/como-baixar';
import { Dicas } from './dicas/dicas';
import { Especial } from './especial/especial';
import { Passos } from './passos/passos';
import { Desenv } from './desenv/desenv';
import { ComoFunciona } from './como-funciona/como-funciona';

import { Admin } from './admin/admin';
import { AdminLogin } from './admin-login/admin-login';
import { adminGuard } from './admin-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'como-baixar', component: ComoBaixar },
  { path: 'dicas', component: Dicas },
  { path: 'especial', component: Especial },
  { path: 'passos', component: Passos },
  { path: 'desenv', component: Desenv },
  { path: 'como-funciona', component: ComoFunciona },

  { path: 'admin-login', component: AdminLogin },
  { path: 'admin', component: Admin, canActivate: [adminGuard] },

  // Para qualquer rota fora do esperado
  { path: '**', redirectTo: '' }
];