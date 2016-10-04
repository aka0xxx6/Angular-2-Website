import { Routes }  from '@angular/router';

import { HomeComponent } from './components/routing_components/home/home.component.ts';
import { ReferenceComponent } from './components/routing_components/reference/reference.component.ts';
import { ItknowledgeexchangeComponent } from './components/routing_components/itknowledgeexchange/itknowledgeexchange.component.ts';
import {ImpressumComponent} from "./components/routing_components/impressum/impressum.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reference',
    component: ReferenceComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'it-knowledge-exchange',
    component: ItknowledgeexchangeComponent
  },
];
