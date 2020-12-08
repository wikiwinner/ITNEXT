import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }

  powers = ['Student', 'Teacher',
    'Professor', 'Developer'];

  model = new Hero(18, 'Duman', this.powers[0],'Student', 'wikiblogger@list.ru',);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '', '');
  }
}
