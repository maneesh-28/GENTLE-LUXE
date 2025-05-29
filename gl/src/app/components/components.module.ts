import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,    
    SharedModule,
    FormsModule

  ]
})
export class ComponentsModule { }
