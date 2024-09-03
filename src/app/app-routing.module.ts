import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SingleCharacterModule } from './pages/single-character/single-character.module';

type RouteConfig = {
  [key: string]: string;
};

const routeConfig: RouteConfig = {
  itemList: 'characters',
  singlePage: 'character-details',
  team: 'my-team'
};

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
  {
    path: '',
    redirectTo: routeConfig['itemList'],
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: routeConfig['itemList'],
        loadChildren: () => 
          import('./pages/home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  { 
    path: 'character-details' + '/:id', 
    loadChildren: (): Promise<SingleCharacterModule> => 
      import('./pages/single-character/single-character.module').then(m => m.SingleCharacterModule) 
  },
  { path: 'my-team',
    loadChildren: () => 
      import('./pages/my-team/my-team.module').then(m => m.MyTeamModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
