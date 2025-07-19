import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  // {path: 'admin-login' , component: AdminRegisterComponent},
  {path: 'signup' , component: SignupComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
