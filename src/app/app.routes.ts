import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home';

import {DataResolver} from './app.resolver';
import {EmailHomeComponent} from './email-home/email-home.component';
import {ComposeComponent} from './compose/compose.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'email home', component: EmailHomeComponent},
    {path: 'compose', component: ComposeComponent},
   /* {
        path: 'detail', loadChildren: () => System.import('./+detail')
        .then((comp: any) => comp.default),
    },*/
    {path: '**', component: HomeComponent},
];
