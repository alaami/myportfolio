import { Component, DoCheck, AfterViewInit, QueryList, ViewChild, LOCALE_ID} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})

export class HomeViewComponent implements DoCheck {

  isChildRouteLoaded = false;

  constructor(private router: ActivatedRoute) { }

  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }
 
  ngAfterViewInit() {
    // viewChildren is set
  }
}