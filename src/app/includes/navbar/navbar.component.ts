import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = "itnext";

  myDate = Date.now();

  public home = 'Home';
  public about = 'About Us';
  public Servives = 'Servives';
  public Pricing = 'Pricing';
  public Blog = 'Blog';
  public Contact = 'Contact';
  public Admin = 'admin';
  public Login = 'login';
  public Register = 'Register';
}
