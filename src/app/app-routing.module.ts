import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'single', component: BlogSingleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
