import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageService } from '../../services/language/language.service';


@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private descr:string;
  private keyword:string;

  constructor(private meta: Meta, private translate:LanguageService, private title:Title) {
    this.translate.getTranslate('htmlTitleTag').subscribe((text:string) => {this.title.setTitle(text)});
    this.translate.getTranslate('metaDescr').subscribe((text:string) => {
      this.meta.addTags([
        {name: 'description', content:text}
        ])});
    this.translate.getTranslate('metaKeywords').subscribe((text:string) => {
      this.meta.addTags([
        {name: 'keywords', content:text}
        ])});
    meta.addTags([
       {name: 'robots', content: 'INDEX, FOLLOW'},
       {name: 'author', content: 'Fit IT Solutions'},
       {httpEquiv: 'Content-Type', content: 'text/html'}
    ]);     
}
setDescr(text:string){
  this.descr=text;
}
}