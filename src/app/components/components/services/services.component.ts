import { Component, DoCheck} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements DoCheck {

  isChildRouteLoaded = false;

  itemsArray = [
{id:1 , name: 'Developpement', description: 'Nous offrons un service de développement Web qui rajoute de la valeur à votre entreprise en créant des solutions web de qualité qui répondent le mieux à vos besoins.', link: '/services/development' },
{ id: 2, name: 'Integration', description: 'Nous offrons un service d’intégration des application Web (Web services, API …) offrant une stratégie cohérente pour développer une infrastructure TI de qualité.', link: '/services/integration' },
{id:3 , name: 'Conseil', description: 'Nous offrons un service de conseil qui vous suggérera des solutions informatiques de qualité répondant à vos besoins.', link: '/services/conseil' },
{ id: 4, name: 'Service géré', description: 'Nous vous aiderons dans vos tâches quotidiennes en vous offrons de support applicatif afin d’aligner les opérations TI avec vos objectifs. ', link: '/components/cards' }
//{id:5 , name: 'Architecture', description: 'On this page you will find examples of cards', link: '/components/cards' },
//{ id: 6, name: 'Etc.', description: 'On this page you will find examples of cards', link: '/components/cards' }
];


  constructor(private router: ActivatedRoute) { }

  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

}

