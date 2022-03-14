import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
@Injectable({
  providedIn: 'root',
  useFactory: (translate: TranslateService) => {
    let lang = localStorage.getItem('lang')
    if (!lang) {
      lang = translate.getBrowserLang()
      localStorage.setItem('lang', lang)
    }
    translate.use(lang)
    return new LanguageService(translate)
  },
  deps: [TranslateService]
})
export class LanguageService {
  lang: any
  browserLang: any
  english: boolean
  french: boolean
constructor(public translate: TranslateService) {}
useLang(language: string) {
    this.translate.use(language)
    localStorage.setItem('lang', language)
if (language === 'fr') {
      this.french = true
      this.english = false
    }
if (language === 'en') {
      this.english = true
      this.french = false
    }
  }
  getTranslate(key: string){
    return this.translate.get(key);
  }
}