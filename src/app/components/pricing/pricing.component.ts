import { Component, OnChanges,  OnInit, DoCheck,  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})

export class PricingComponent implements  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  displayChild = false;
  constructor() {    console.log('PricingComponent:Constructor');  }
  // tslint:disable-next-line:typedef
  toggle(){  this.displayChild = !this.displayChild;  }

  ngOnChanges() {    		console.log('PricingComponent:OnChanges');  }
  ngOnInit() {    			console.log('PricingComponent:OnInit');  }
  ngDoCheck() {         	console.log('PricingComponent:DoCheck');  }
  ngAfterContentInit() {    console.log('PricingComponent:AfterContentInit');  }
  ngAfterContentChecked() { console.log('PricingComponent:AfterContentChecked');}
  ngAfterViewInit() {       console.log('PricingComponent:AfterViewInit');  }
  ngAfterViewChecked() {    console.log('PricingComponent:AfterViewChecked');  }
  // tslint:disable-next-line:typedef
  ngOnDestroy() {    		console.log('PricingComponent:OnDestroy');  }

}


