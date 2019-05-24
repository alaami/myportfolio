import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft,faHome,faInfoCircle,faAddressCard,faHandPointDown  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faArrowCircleLeft =faArrowCircleLeft;
  faInfoCircle=faInfoCircle;
  faAddressCard=faAddressCard;
  faHome=faHome;
  faHandPointDown=faHandPointDown;
  constructor() { }

  ngOnInit() {

  }

}
