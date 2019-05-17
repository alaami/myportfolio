import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';

import { HomeViewComponent } from './../../components/home-view/home-view.component';
import { DevelopmentViewComponent } from './../../components/development-view/development-view.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './../../components/components/services/services.component';
import { IntegrationViewComponent } from './../../components/integration-view/integration-view.component';
import { ConseilViewComponent } from './../../components/conseil-view/conseil-view.component';
import { ServiceGereViewComponent } from './../../components/service-gere-view/service-gere-view.component';
import { ProfileComponent } from './../../components/profile/profile.component';
import { ContactComponent } from './../../components/contact/contact.component';
const routes: Routes = [
  { 
	path: '', component: HomeViewComponent, children: [
      { path: 'services', component: ServicesComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'contact', component: ContactComponent}
      

	]
 
  },

  {
    path: 'services', component: ServicesComponent, children: [
            { path: 'development', component: DevelopmentViewComponent },
            { path: 'integration', component: IntegrationViewComponent }, 
            { path: 'conseil', component: ConseilViewComponent },
            { path: 'service-gere', component: ServiceGereViewComponent }
            
	]
  }

]
@NgModule({
  imports: [
CommonModule,
RouterModule.forRoot(routes),
MDBBootstrapModule.forRoot()
  ],
declarations: [],

 exports: [RouterModule]

})
export class RoutesModule { }
