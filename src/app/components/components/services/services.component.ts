import { Component, DoCheck} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements DoCheck {
itemsArray:any;
isChildRouteLoaded = false;

  constructor(private router: ActivatedRoute,private translate: TranslateService) { 
    translate.get('services.itemsArray').subscribe((res: string) => {
      this.itemsArray=res;
    });

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('services.itemsArray').subscribe((res: string) => {
        this.itemsArray=res;
      });
    });
}
 
  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

}

