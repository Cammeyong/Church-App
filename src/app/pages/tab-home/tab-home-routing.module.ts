import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';

const routes: Routes = [ {

    path: 'tabs',
    component: TabHomePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'data',
        loadChildren: () => import('../data/data.module').then( m => m.DataPageModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('../forms/forms.module').then( m => m.FormsPageModule)
      },
      {
        path: 'bible',
        loadChildren: () => import('../bible/bible.module').then( m => m.BiblePageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ]
},
{
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
