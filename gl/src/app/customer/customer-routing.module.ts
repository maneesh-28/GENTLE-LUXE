import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  // {path: 'profile' , component: ProfileComponent, canActivate: [AuthGuard]}

{
  path: 'profile/:cust_id',
  component: ProfileComponent,
  canActivate: [AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
