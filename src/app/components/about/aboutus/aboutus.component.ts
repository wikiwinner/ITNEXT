import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  netImage:any = "../assets/img/logo.png";

  appthird = {
    button: 'First item',
    buttonsecond: 'Second item',
    buttonthird: 'Third item',
  };
  title = 'Company information.';
  subtitle = 'Our company was founded in 2020.';
  about = 'ITNEXT company was founded in January 2020 by young progressive specialists.' +
    ' We decided to bring the quality of computer service in Almaty to the highest level. ' +
    'Today we are a leader in the field of IT outsourcing and computer equipment repair in Almaty. ' +
    'Our mission is to develop and maintain the IT infrastructure of small, medium and large enterprises, raise its ' +
    'level to European standards and contribute to the development of Kazakhstani business.';

  sub = 'European standards and contribute to the development of Kazakhstani business.';

}
