/*
   Copyright (c) 2019 MDBootstrap.com
*/ 
import { Component } from '@angular/core';
import { SEOService } from './services/SEO/seo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
constructor(private seo:SEOService){}

}
