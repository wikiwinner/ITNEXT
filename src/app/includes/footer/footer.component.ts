import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public number: "77005200051";
  public email: "info@itnext.com";


  ngOnInit(): void {
  }
  public name = "itnext";

}
