import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageService } from '../../services/language/language.service';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(private meta: Meta, private translate:LanguageService, private title:Title) {
    this.title.setTitle(this.translate.translate('htmlTitleTag'));
    meta.addTags([
       {name: 'description', content:  this.translate.translate('metaDescr') },
       {name: 'robots', content: 'INDEX, FOLLOW'},
       {name: 'author', content: 'Fit IT Solutions'},
       {name: 'keywords', content: this.translate.translate('metaKeywords')},
       {httpEquiv: 'Content-Type', content: 'text/html'}
    ]);     
}
}