import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showMe: boolean;
  services = [
    { titlefirst: 'Web programming',
      description1: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
    },
    { titlesecond: 'Java Developer',
      description2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    },
    { titlethird: 'Angular Developer',
      description3: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    },
    { titleforth: 'Software',
      description4: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    },
    { titlefive: 'Enterprise developer application',
      description5: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    },
    { titlesixth: 'Database',
      description6: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
    }
  ]

  features =[
    { featurestitle1: 'Sensor' },
    { featurestitle2: 'Finger' },
    { featurestitle3: 'Code' },
    { featurestitle4: 'Neiron' },
    { featurestitle5: 'Ultra' },
    { featurestitle6: 'Atom' },
    { featurestitle7: 'Mobile phone' },
    { featurestitle8: 'Application' },
    { featurestitle9: 'weapon laser' },
    { featurestitle10: 'wireless' },
    { featurestitle11: 'local network' },
    { featurestitle12: 'robot' }
  ]

  features1 =[
    { featurestitle1: 'Sensor' },

  ]

  features2 =[
    { featurestitle5: 'Neiron' },


  ]
  features3 =[

    { featurestitle12: 'weapon laser' },

  ]

  nofeatures: any;
  featuresList: any;

  viewTab='x';
  x: any;

  viewTab1='a';
  a: any;

  viewTab2='b';
  b: any;dddd


  isButton = true;
  isPrimary = true;

  canText = true;

}
