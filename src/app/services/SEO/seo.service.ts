import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(private meta: Meta) {
    meta.addTags([
       {name: 'description', content: 'Fit IT Solutions is recognized by creativity, innovation and quality. We offer exceptional services in Web development, Web application integration, managed service and consulting. Our expertise will establish a proposal of the best options available on the market to help you achieve your specific goals We ensure the provision of adequate solutions that meet your needs and respect your budgets.'},
       {name: 'robots', content: 'INDEX, FOLLOW'},
       {name: 'author', content: 'Fit IT Solutions'},
       {name: 'keywords', content: 'TypeScript, Angular, PHP, Web development, Web companies, Web agency, Web agencies, IT Solutions, Information Technology, Technical Support, it Services, it Consultant, Managed Service Provider, it Companies, it Solutions, it Security, it Manager, Managed it Services,Technology Consulting, Cloud Architecture,Tech Solutions, it Service Management, Cloud Infrastructurs'},
       {httpEquiv: 'Content-Type', content: 'text/html'}
    ]);     
}
}