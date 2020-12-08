import {Component, EventEmitter, Input, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message = '';
  constructor() {
    console.log('ChildComponent:Constructor');
  }

  ngOnChanges() {    	  console.log('ChildComponent:OnChanges');  }
  ngOnInit() {    		  console.log('ChildComponent:OnInit');  }
  ngDoCheck() {    		  console.log('ChildComponent:DoCheck');  }
  ngAfterContentInit() {  console.log('ChildComponent:AfterContentInit');  }
  ngAfterContentChecked() { console.log('ChildComponent:AfterContentChecked'); }
  ngAfterViewInit() {     console.log('ChildComponent:AfterViewInit');  }
  ngAfterViewChecked() {  console.log('ChildComponent:AfterViewChecked');  }
  ngOnDestroy() {    	  console.log('ChildComponent:OnDestroy');  }



}
