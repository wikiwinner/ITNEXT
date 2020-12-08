import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { FooterComponent } from './includes/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ChildComponentComponent } from './components/pricing/child-component/child-component.component';
import { AboutusComponent } from './components/about/aboutus/aboutus.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { ServiceComponent } from './components/services/service/service.component';
import { AdminModuleModule } from './components/admin-module/admin-module.module';
import {LoggingService} from './services/logging.service';
import {UserService} from './services/user.service';
import { Child1Component } from './components/services/child1/child1.component';
import { Child2Component } from './components/services/child2/child2.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    AboutComponent,
    PricingComponent,
    ServicesComponent,
    HomeComponent,
    ComponentsComponent,
    ChildComponentComponent,
    AboutusComponent,
    BlogSingleComponent,
    ServiceComponent,
    Child1Component,
    Child2Component,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
