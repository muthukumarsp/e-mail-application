import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {EmailHomeComponent} from './email-home.component';

const routes: Route[] = [
  {
    path: '',
    component: EmailHomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
