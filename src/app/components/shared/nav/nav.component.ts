import { Component,LOCALE_ID, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowCircleLeft,faHome,faInfoCircle,faAddressCard,faHandPointDown, faNewspaper  } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  previousUrl: string;
  faArrowCircleLeft =faArrowCircleLeft;
  faInfoCircle=faInfoCircle;
  faAddressCard=faAddressCard;
  faHome=faHome;
  faHandPointDown=faHandPointDown;
  faNewspaper=faNewspaper;
  text: string;

  constructor(private location: Location,private translate: LanguageService) {}
  
  setLang(lang: string) {
   this.translate.useLang(lang);
  }
  back() {
    this.location.back();
  }


}
