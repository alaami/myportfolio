import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowCircleLeft,faHome  } from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
//import { fab } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  previousUrl: string;
  faArrowCircleLeft =faArrowCircleLeft;
  faHome=faHome;
  constructor(private location: Location) {
  }


  back() {
    this.location.back();
  }


}
