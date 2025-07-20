import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  { path :'header', component : HeaderComponent},
  { path :'footer', component : FooterComponent},
  { path :'hero', component : HeroBannerComponent},
  // { path :'loader', component : LoaderComponent},

  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
