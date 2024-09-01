import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

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
      // aqui você poderá incluir as rotas futuramente
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
