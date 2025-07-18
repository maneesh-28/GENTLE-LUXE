import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'shared', 
      loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
     },
    { path: 'auth', 
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
     },
    { path: 'admin', 
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
     },
    { path: 'customer', 
      loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
     },
    { path: '', 
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
     },
    { path: '', 
      loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
