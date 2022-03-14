import { Component,LOCALE_ID, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';
import { SEOService } from '../../../services/SEO/seo.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  previousUrl: string;
  text: string;

  constructor(private location: Location,private translate: LanguageService, private seoservice:SEOService) {}
  
  setLang(lang: string) {
   this.translate.useLang(lang);
   this.seoservice.setMetaAndTitle();
  }
  back() {
    this.location.back();
  }


}
