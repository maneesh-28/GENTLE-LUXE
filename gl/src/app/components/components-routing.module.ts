import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProfileComponent } from '../customer/profile/profile.component';

const routes: Routes = [
    { path :'home', component : HomeComponent},
    { path :'aboutus', component : AboutusComponent},
    { path :'shop', component : ShopComponent, canActivate: [AuthGuard]},
    { path :'contact', component : ContactComponent},
    // { path :'profile', component : ProfileComponent},


    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
