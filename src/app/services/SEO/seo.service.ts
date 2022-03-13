import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(private meta: Meta) {
    meta.addTags([
       {name: 'description', content: 'We offer services in Web, Mobile and Desktop App development. IT consulting. We offer best options on the market that meet your needs and respect your budgets.'},
       {name: 'robots', content: 'INDEX, FOLLOW'},
       {name: 'author', content: 'Fit IT Solutions'},
       {name: 'keywords', content: 'TypeScript, Angular, PHP, Web development, Web companies, Web agency, Web agencies, IT Solutions, Information Technology, Technical Support, it Services, it Consultant, Managed Service Provider, it Companies, it Solutions, it Security, it Manager, Managed it Services,Technology Consulting, Cloud Architecture,Tech Solutions, it Service Management, Cloud Infrastructurs'},
       {httpEquiv: 'Content-Type', content: 'text/html'}
    ]);     
}
}